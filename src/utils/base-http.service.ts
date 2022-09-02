import axios from 'axios'
import type { AxiosError } from 'axios'
import router from '../router/index'
import { useAuth } from '../composables/useAuth'
const { _accessToken } = useAuth()

export const apiBaseUrl = import.meta.env.VITE_API_BASEURL

const request = axios.create({
  baseURL: apiBaseUrl,
  timeout: 30000,
})

interface IFail {
  statusCode: number
  message: string | string[]
  error: string
}

export default class BaseHttpService {
  protected async get<T>(
    endpoint: string,
    options = {},
  ): Promise<T> {
    Object.assign(options, this._getCommonOptions())
    return request
      .get<T>(`/${endpoint}`, options)
      .then((res) => {
        return res.data
      })
      .catch((error: AxiosError<IFail>) => {
        return this._handleHttpError(error.response!.data)
      })
  }

  protected async post<T>(
    endpoint: string,
    data = {},
    options = {},
  ): Promise<T> {
    Object.assign(options, this._getCommonOptions())
    return request
      .post<T>(`/${endpoint}`, data, options)
      .then((res) => {
        return res.data
      })
      .catch((error: AxiosError<IFail>) => {
        return this._handleHttpError(error.response!.data)
      })
  }

  protected async delete<T>(
    endpoint: string,
    options = {},
  ): Promise<T> {
    Object.assign(options, this._getCommonOptions())
    return request
      .delete<T>(`/${endpoint}`, options)
      .then((res) => {
        return res.data
      })
      .catch((error: AxiosError<IFail>) => {
        return this._handleHttpError(error.response!.data)
      })
  }

  protected async patch<T>(
    endpoint: string,
    data = {},
    options = {},
  ): Promise<T> {
    Object.assign(options, this._getCommonOptions())
    return request
      .patch<T>(`/${endpoint}`, data, options)
      .then((res) => {
        return res.data
      })
      .catch((error: AxiosError<IFail>) => {
        return this._handleHttpError(error.response!.data)
      })
  }

  protected _handleHttpError(error: IFail) {
    const { statusCode } = error
    const message = Array.isArray(error.message) ? error.message[0] : error.message

    console.log(message)

    if (statusCode === 401)
      this._handle401()

    if (statusCode === 404)
      this._handle404()

    return Promise.reject(error)
  }

  protected _handle401(): void {
    this.removeToken()
    router.push({
      path: '/login',
    })
  }

  protected _handle404(): void {
    router.push({
      name: '404',
    })
  }

  protected _getCommonOptions() {
    return {
      headers: {
        'Authorization': `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
    }
  }

  get accessToken(): string {
    return _accessToken.value ? _accessToken.value : this.loadToken()
  }

  protected saveToken(accessToken: string): void {
    _accessToken.value = accessToken
    return localStorage.setItem('accessToken', accessToken)
  }

  protected loadToken(): string {
    const token = localStorage.getItem('accessToken') ?? ''
    _accessToken.value = token
    return token
  }

  protected removeToken(): void {
    _accessToken.value = ''
    localStorage.removeItem('accessToken')
  }
}
