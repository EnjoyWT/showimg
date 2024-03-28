<template>
  <div class="relative h-screen w-screen overflow-auto">
    <img :src="bgimgSource" alt="Background Image" class="absolute inset-0 object-cover h-full w-full z-0" />
    <div class="absolute inset-0 flex flex-col justify-center items-center pt-6 ">
      <div class=" z-10 mx-5 max-w-full max-h-full overflow-auto">
        <img ref="imageRef" :src="imageUrl" alt="" class="max-h-full w-full">

        <div class="mt-8  h-10 save-image inline-block py-2 px-4 border border-black rounded-full text-gray-800">长按图片即可保存</div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref , computed,onMounted} from 'vue'
import bgimgSource from "@assets/bg.png"

defineProps({
  msg: String,
})
const canvasRef = ref(null);
const imageBlob = ref(null)

const imageRef = ref(null)
var imageData = null
const imageUrl = computed(() => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('a') || '';
});

</script>

<style>
.save-image {
  font-size: 16px; /* 设置字体大小为20像素 */
  min-width: 200px; /* 设置按钮的最小宽度 */
  white-space: nowrap; /* 防止文本换行 */
}
</style>