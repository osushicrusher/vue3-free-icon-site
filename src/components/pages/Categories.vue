<template>
    <div>
        <Pagination class="text-center" />
        <div class="py-20 min-h-screen">
            <p v-if="filteredIconsPerPage == []" class="text-center">見つかりませんでした</p>
            <ul v-else class="flex flex-wrap -m-2">
                <li v-for="i in filteredIconsPerPage" :key="i.id" class="p-2 lg:w-1/5 md:w-1/4 sm:w-1/3 w-1/2">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <a :href="`/category/${i.category_id}/${i.id}`">
                            <img class="w-full" :src="i.path + '.svg'" alt="">
                        </a>
                    </div>
                </li>
            </ul>
        </div>
        <Pagination v-if="filteredIconsPerPage != []" class="text-center" />
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useIconStore } from "../../store/icon";
import { useRoute, useRouter } from 'vue-router'
import categoryData from "../../assets/data/categories/icons.json"
import Pagination from "../../components/modules/Pagination.vue"
import { Icon } from '../../logics/iconType'

const store = useIconStore()
const router = useRouter()
const route = useRoute()

const { filteredIcons, filteredIconsPerPage } = storeToRefs(store)

const pageQuery = route.query.page
const paramCategoryId = route.params.category_id

if(paramCategoryId && typeof paramCategoryId === 'string' && pageQuery === '0') {
    const id = Array(paramCategoryId)[0]
    if(typeof id !== 'object') {
        const iconData = categoryData
        store.addCategoryId(parseInt(id))
        store.addIconData(iconData)
    }
    if(pageQuery && typeof pageQuery === 'string') {
        store.addCategoryPage(1)
    }
    router.push(`/category/${paramCategoryId}?page=1`)
}

if(pageQuery && typeof pageQuery === 'string') {
    store.addCategoryPage(parseInt(pageQuery))
}

const id = Array(paramCategoryId)[0]
if(typeof id !== 'object') {
    const iconData :Icon[] = categoryData
    store.addCategoryId(parseInt(id))
    store.addIconData(iconData)
}

</script>