<template>
    <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-row items-center">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl dark:text-white">Practicons</span>
            </a>
            <nav class="mr-auto ml-4 py-1 pl-4 md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                <router-link to="/" class="mr-5 hover:text-gray-900 dark:text-white">文字</router-link>
                <router-link to="/category/1" class="mr-5 hover:text-gray-900 dark:text-white">動物</router-link>
            </nav>
            <button @click="theme()" class="w-12 h-6 rounded-full p-1 bg-gray-400 dark:bg-gray-600 relative transition-colors duration-500 ease-infocus:outline-none focus:ring-2 focus:ring-blue-700 dark:focus:ring-blue-600 focus:border-transparent">
                <div id="toggle" class="rounded-full w-4 h-4 bg-blue-600 dark:bg-blue-500 relative ml-0 dark:ml-6 pointer-events-none transition-all duration-300 ease-out"></div>
            </button>
        </div>
    </header>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useIconStore } from "../../store/icon";

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

// コンポーネントマウント時にダークモード適用か確認する
const theme = () :void => {
    const isDarkmode = document.documentElement.classList.contains('dark')
    if(isDarkmode) {
        document.documentElement.classList.remove('dark')
        document.cookie = "isDarkmode=" + encodeURIComponent("false")
    } else {
        document.documentElement.classList.add('dark')
        document.cookie = "isDarkmode=" + encodeURIComponent("true");
    }
}

// ページ切り替え用
type Page = 'first' | 'second'
const changepage = (page :Page) => {
    store.changePage(page)
}

</script>
