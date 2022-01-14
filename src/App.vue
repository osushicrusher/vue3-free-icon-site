<template>
  <div class="bg-gray-100 dark:bg-gray-800 dark:text-gray-50">
    <Header />
    <div class="container px-5 py-24 mx-auto">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useIconStore } from "./store/icon";
import { onMounted } from "vue";
import Header from "./components/modules/Header.vue"
import Footer from "./components/modules/Footer.vue"

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

</script>