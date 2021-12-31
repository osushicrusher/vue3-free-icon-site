<template>
  <div class="bg-gray-100 dark:bg-gray-800 dark:text-gray-50">
    <Header />
    <div class="container px-5 py-24 mx-auto">
      <!-- <canvas id="canvas"></canvas> -->
      <!-- <search-bar></search-bar> -->
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useIconStore } from "./store/icon";
import { onMounted } from "vue";
import SearchBar from "./components/modules/SearchBar.vue"
import Modal from "./components/modules/Modal.vue"
import Header from "./components/modules/Header.vue"
import Footer from "./components/modules/Footer.vue"
import Canvg from "canvg";
// import html2canvas from "html2canvas"

const store = useIconStore()
// コンポーネントマウント時にダークモード適用か確認する
onMounted(() => {
    const isDarkmode = document.cookie === 'isDarkmode=true'
    if(isDarkmode) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
})
// let isModalClosed = ref(false)
// const toggleModal = () => {
//   store.toggleModal()
// }

// const render = () => {
//     const svgRoot = document.querySelector("#svg_root");
//     const svgString = svgRoot.outerHTML.replace(/NS[0-9]+:href/g, "xlink:href");
//     // .replace()はiOS Safari等でnamespaceが"xlink"ではなく"NSなんとか"になるのに対応するため

//     const canvas = document.createElement("canvas");
//     canvas.width = 1920; // canvasの幅を指定
//     canvas.height = 1080; // canvasの高さを指定
//     const ctx = canvas.getContext('2d');

//     const v = Canvg.fromString(ctx, svgString);
//     return v.render(); // Promise
// }

// onMounted(async() => {
//   let v = null;
//   const canvas = document.querySelector('canvas')
//   canvas.width = 1920; // canvasの幅を指定
//   canvas.height = 1080; // canvasの高さを指定
//   const ctx = canvas.getContext('2d')

//   v = await Canvg.from(ctx, '/src/assets/icons/animals/cat1.svg')
//   v.start()
  // html2canvas(canvas, {
  //   onrendered: function(c) {
  //       c.toDataURL(); // base64形式で描画内容を出力する
  //   }
  // })
// })

const changeImgType = () => {
  
}


</script>