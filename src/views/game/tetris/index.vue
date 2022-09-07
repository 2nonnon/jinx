<script setup lang="ts">
type Block = number[][]
type Playground = Block
// S、Z、L、J、I、O、T
const I = [[1, 2, 3, 4]]
const Z = [[1, 2], [2, 3]]

const size = {
  x: 10,
  y: 20,
}

const playground: Playground = Array.from<number[]>({ length: size.y }).fill((() => Array.from<number>({ length: size.x }).fill(-1))())

const active = ref(I)
const pre = ref(Z)

// const collisionDetection = (block: Block, playground: Playground) => {
//   if (block.length > playground.length)
//     return false
// }
console.log(playground)

const horizontal = (block: Block, step: number) => block.forEach((r, i) => {
  if (r.length > 0)
    r.forEach((c, j) => block[i][j] = c + step)
})
// const left = (block: Block) => horizontal(block, -1)
const right = (block: Block) => horizontal(block, 1)
// const down = (block: Block) => block.unshift([])

// 逆时针90deg
// const rotate = (block: Block) => {

// }

setInterval(() => {
  right(active.value)
}, 1000)

const isBlockOrNot = (block: Block, i: number, j: number) => block[i]?.length && block[i].includes(j)

const activeBlock = (i: number, j: number) => isBlockOrNot(active.value, i, j)
const preBlock = (i: number, j: number) => isBlockOrNot(pre.value, i, j)
</script>

<template>
  <h1>Tetris</h1>
  <div :id="$style.screen">
    <div :id="$style.playground">
      <p v-for="i in size.y" :key="i" flex gap-2px>
        <b v-for="j in size.x" :key="j" :class="[$style.block, { [$style.active]: activeBlock(i - 1, j) || playground[i - 1][j - 1] > 0 }]" />
      </p>
    </div>
    <div :id="$style.dashboard">
      <div>
        <p text-start>
          下一个
        </p>
        <div>
          <p v-for="i in 2" :key="i" flex gap-2px>
            <b v-for="j in 4" :key="j" :class="[$style.block, { [$style.active]: preBlock(i - 1, j) }]" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style module>
#screen {
  display: flex;
  background-color: #9ead86;
  padding: 8px;
  border: 2px solid #494536;
  width: fit-content;
  gap: 8px;
}
#dashboard {
  width: 150px;
}
#playground {
  border: 2px solid #000;
  padding: 2px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: fit-content;
}
.block {
  display: block;
  width: 20px;
  height: 20px;
  padding: 2px;
  border: 2px solid #879372;
}
.block::after {
  content: "";
  display: block;
  width: 12px;
  height: 12px;
  background: #879372;
}
.active {
  border-color: #000;
}
.active::after {
  background: #000;
}
</style>
