<template>
    <div id="category" class="text-gray-600 body-font">
        <div class="flex flex-col text-center w-full mb-20">
            <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">CATEGORIES</h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 dark:text-white">カテゴリーで選ぶ</h1>
        </div>
        <div class="flex flex-wrap flex-col">
            <div class="flex items-center mb-3">
                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                </div>
                <h2 class="text-gray-900 dark:text-white text-lg title-font font-medium">ベーシック</h2>
            </div>
            <ul class="container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 mx-auto mb-10">
                <li v-for="i in getIcons(2, 6)" :key="i.id" class="w-full rounded">
                    <img :src="`${i.path}.svg`" alt="image">
                </li>
            </ul>
            <div class="flex items-center mb-3">
                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                </div>
                <h2 class="text-gray-900 dark:text-white text-lg title-font font-medium">動物</h2>
            </div>
            <ul class="container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 mx-auto mb-10">
                <li v-for="i in getIcons(2, 6)" :key="i.id" class="w-full rounded">
                    <a :href="`/category/${i.category_id}/${i.id}`">
                        <img :src="`${i.path}.svg`" alt="image">
                    </a>
                </li>
            </ul>
            <div class="flex items-center mb-3">
                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                </div>
                <h2 class="text-gray-900 dark:text-white text-lg title-font font-medium">文字</h2>
            </div>
            <ul class="container grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 mx-auto">
                <li v-for="i in getIcons(3, 6)" :key="i.id" class="w-full rounded">
                    <img :src="`${i.path}.svg`" alt="image">
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import iconData from "../../assets/data/categories/icons.json"
import { Icon, typeCategoryIds } from '../../logics/iconType'

// 1:ベーシック, 2:動物, 3:文字
const categoryIds :typeCategoryIds[] = [1, 2, 3]

// 各カテゴリーのIDに一致するアイコンデータをnum個分取得
const getIcons = (categoryId :number, num :number) :Icon[] => {
    let res :Icon[] = []
    let count = 0
    iconData.forEach(i => {
        if(count >= num) return res
        if(i.category_id === categoryId) {
            res.push(i)
            count++
        }
    })
    return res
}

</script>