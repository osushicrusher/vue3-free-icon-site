<template>
    <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap justify-between md:justify-start p-5 flex-row items-center">
            <a class="flex title-font font-medium items-center text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <router-link to="/" class="ml-3 text-xl dark:text-white mr-auto">Practicons.</router-link>
            </a>
            <!-- ml-4  -->
            <div :class="{'hidden sm:block': !isNavOpen}" class="md:mr-auto">
                <nav :class="[isNavOpen ? 'w-9/12 z-50 bg-indigo-200 dark:bg-indigo-900 h-screen absolute inset-0 flex-col ' : '']" class="ml-4 mr-auto py-1 pl-4 md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                    <router-link to="/category/2" @click="addCategoryId(2)" class="mr-5 hover:text-gray-900 dark:text-white">カテゴリーで選ぶ</router-link>
                    <router-link to="/category/3" class="mr-5 hover:text-gray-900 dark:text-white">よくある質問</router-link>
                </nav>
            </div>
            <button @click="theme()" class="w-12 h-6 rounded-full p-1 bg-gray-400 dark:bg-gray-600 relative transition-colors duration-500 ease-infocus:outline-none focus:ring-2 focus:ring-blue-700 dark:focus:ring-blue-600 focus:border-transparent">
                <div id="toggle" class="rounded-full w-4 h-4 bg-blue-600 dark:bg-blue-500 relative ml-0 dark:ml-6 pointer-events-none transition-all duration-300 ease-out"></div>
            </button>
            <Hamburger @click="toggleNav()" />
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useIconStore } from "../../store/icon"
import Hamburger from "../modules/Hamburger.vue"

const store = useIconStore()

// コンポーネントマウント時にダークモード適用か確認する
const theme = () :void => {
    const isDarkmode = document.documentElement.classList.contains('dark')
    if(isDarkmode) {
        document.documentElement.classList.remove('dark')
        document.cookie = "isDarkmode=" + encodeURIComponent("false")
    } else {
        document.documentElement.classList.add('dark')
        document.cookie = "isDarkmode=" + encodeURIComponent("true")
    }
}

const addCategoryId = (id :number) => {
    store.addCategoryId(id)
}

let isNavOpen = ref<boolean>(false)
const toggleNav = () :void => {
    isNavOpen.value = !isNavOpen.value
}
</script>

