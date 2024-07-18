<template>
  <div class="relative h-screen w-screen overflow-auto">
    <img :src="bgimgSource" class="w-screen h-svh fixed inset-0" />

    <img
      :src="bgimgSource"
      alt="Background Image"
      class="absolute inset-0 object-cover h-full w-full z-0"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import bgimgSource from "@assets/bg.png";

defineProps({
  msg: String,
});
const canvasRef = ref(null);
const imageBlob = ref(null);

const imageRef = ref(null);
var imageData = null;
const imageUrl = computed(() => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("a") || "";
});
</script>

<style>
.save-image {
  font-size: 16px; /* 设置字体大小为20像素 */
  min-width: 200px; /* 设置按钮的最小宽度 */
  white-space: nowrap; /* 防止文本换行 */
}
</style>