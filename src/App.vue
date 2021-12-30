<template>
  <div class="bg-gray-100 dark:bg-gray-800 dark:text-gray-50">
    <Header />
    <div class="container px-5 py-24 mx-auto">
      <search-bar></search-bar>
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useIconStore } from "./store/icon";
import SearchBar from "./components/modules/SearchBar.vue"
import Modal from "./components/modules/Modal.vue"
import Header from "./components/modules/Header.vue"
import Footer from "./components/modules/Footer.vue"

const store = useIconStore()
// let isModalClosed = ref(false)
// const toggleModal = () => {
//   store.toggleModal()
// }
</script>