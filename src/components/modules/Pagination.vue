<template>
    <nav aria-label="Page navigation">
        <ul class="inline-flex space-x-2">
            <li v-if="!isHeadNum(pageQuery)">
                <a :href="`/category/${findCategoryId}?page=${pageQuery-1}`">
                    <button class="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                    </button>
                </a>
            </li>
            <li v-for="n in pageNumArr" :key="n">
                <a :href="`/category/${findCategoryId}?page=${n}`">
                    <button :class="{'bg-white': n === pageQuery}" class="w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">{{ n }}</button>
                </a>
            </li>
            <li v-if="!isTailNum(pageQuery)">
                <a :href="`/category/${findCategoryId}?page=${pageQuery+1}`">
                    <button class="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                    </button>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useIconStore } from "../../store/icon";
import { useRoute, useRouter } from 'vue-router'

const store = useIconStore()
const router = useRouter()
const route = useRoute()
const { findCategoryId, pageNumArr } = storeToRefs(store)

const pageQuery = Number(route.query.page)
const paramCategoryId = route.params.category_id

// 現在表示しているページが先頭のページかどうか
const isHeadNum = (pageNum :number) :boolean => {
    const pageNumArr = store.pageNumArr
    return pageNum === pageNumArr[0]
}
// 現在表示しているページが末尾のページかどうか
const isTailNum = (pageNum :number) :boolean => {
    const pageNumArr = store.pageNumArr
    return pageNum === pageNumArr[pageNumArr.length-1]
}

</script>