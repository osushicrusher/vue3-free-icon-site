<template>
    <section class="text-gray-600 body-font">
        <div class="flex flex-col mb-10 items-start">
            <div class="flex-grow">
                <!-- <a class="mt-3 text-indigo-500 inline-flex items-center">
                    カテゴリ:動物
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a> -->
                <h1 class="text-gray-900 text-lg title-font font-medium mb-3">{{ findSelectedIcon.name.ja }}のアイコン</h1>
                <p class="leading-relaxed text-base">{{ findSelectedIcon.description }}</p>
            </div>
        </div>
        <div class="flex flex-wrap">
            <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                <img alt="feature" class="object-cover object-center h-full w-full" :src="`${findSelectedIcon.path}.svg`">
            </div>
            <div class="flex flex-col flex-wrap justify-center mx-auto lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                <div class="lg:w-2/3">
                    <ul class="flex justify-start mb-3">
                        <li class="bg-blue-500 text-white font-bold py-2 px-4">サイズ</li>
                        <li v-for="(s, i) in sizes" :key="i" @click="setSize(s)" :class="{'bg-blue-700': s === sizeRef}" class="flex justify-center items-center bg-blue-500 hover:bg-blue-700 border-l-2 border-l-blue-700 text-white font-bold py-2 px-4">{{ s }}</li>
                    </ul>
                    <ul class="flex justify-start mb-3">
                        <li class="bg-green-500 text-white font-bold py-2 px-4">ファイル</li>
                        <li v-for="(f, i) in fileTypes" :key="i" @click="setFileType(f)" :class="{'bg-green-700': f === fileTypeRef}" class="flex justify-center items-center bg-green-500 hover:bg-green-700 border-l-2 border-l-green-700 text-white font-bold py-2 px-4">{{ f }}</li>
                    </ul>
                </div>
                <a :href="`/src/assets/icons/${fileTypeRef.toLowerCase()}/${findSelectedIcon.name.en}_${sizeRef}.${fileTypeRef.toLowerCase()}`" :download="`${findSelectedIcon.name.en}_${sizeRef}.${fileTypeRef.toLowerCase()}`" :class="{'pointer-events-none bg-gray-500': !isSelected, 'bg-green-500': isSelected}" class="text-white font-bold py-6 px-4 rounded text-center">
                    ダウンロードする
                </a>
            </div>
        </div>
    </section>

</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { storeToRefs } from "pinia";
import { useIconStore } from "../../store/icon";
import { useRoute } from 'vue-router'
import categoryData from "../../assets/data/categories/icons.json"
import { sizeType, fileType } from '../../logics/iconType'
const store = useIconStore()
const route = useRoute()
const { findSelectedIcon } = storeToRefs(store)

const id = Array(route.params.id)[0]
if(typeof id !== 'object') {
    const selectedIcon = categoryData[parseInt(id)-1]
    store.addSelectedIcon(selectedIcon)
}

// ダウンロードアイコンのサイズ・ファイル選択に
const sizes :sizeType[] = ['16x16', '32x32', '64x64', '128x128', '256x256']
const fileTypes :fileType[] = ['SVG', 'JPEG', 'PNG', 'EPS']

let sizeRef = ref<sizeType>('')
let fileTypeRef = ref<fileType>('')

const isSelected = computed(() => {
    return sizeRef.value !== '' && fileTypeRef.value !== ''
})

// ダウンロードするアイコンのサイズをセットする関数
const setSize = (size :sizeType) => {
    if(size === sizeRef.value) {
        sizeRef.value = ''
        return
    }
    sizeRef.value = size
}

// ダウンロードするアイコンのファイルタイプをセットする関数
const setFileType = (type :fileType) => {
    if(type === fileTypeRef.value) {
        fileTypeRef.value = ''
        return
    }
    fileTypeRef.value = type
}



</script>