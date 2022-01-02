<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                <img alt="feature" class="object-cover object-center h-full w-full" :src="`${findSelectedIcon.path}.svg`">
            </div>
            <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                <div class="flex flex-col mb-10 lg:items-start items-center">
                    <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    </div>
                    <div class="flex-grow">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">{{ findSelectedIcon.name.ja }}</h2>
                        <p class="leading-relaxed text-base">{{ findSelectedIcon.description }}</p>
                        <a class="mt-3 text-indigo-500 inline-flex items-center">カテゴリ:動物
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <button @click="toggleModal()" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    ダウンロードする
                </button>
            </div>
            <Modal :class="{'hidden': !findIsModalOpen}"/>
        </div>
    </section>

</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useIconStore } from "../../store/icon";
import { useRoute, useRouter } from 'vue-router'
import { ref } from "vue";
import categoryData from "../../assets/data/categories/category.json"
import Modal from "../modules/Modal.vue"
const store = useIconStore()
const router = useRouter()
const route = useRoute()
const { findSelectedIcon, findIsModalOpen } = storeToRefs(store)

const id = Array(route.params.id)[0]
if(typeof id !== 'object') {
    const selectedIcon = categoryData[parseInt(id)-1]
    store.addSelectedIcon(selectedIcon)
}

// モーダルの開閉を制御
const toggleModal = () => {
    store.toggleModal()
}
</script>