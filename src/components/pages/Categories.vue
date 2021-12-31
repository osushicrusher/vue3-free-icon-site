<template>
    <div>
        <div>カテゴリーページです</div>
        <p v-if="filteredIcons == ''" class="text-center">見つかりませんでした</p>
        <ul v-if="filteredIcons != []" class="flex flex-wrap -m-2">
            <li v-for="i in filteredIcons" :key="i.id" class="p-2 lg:w-1/6 md:w-1/4 sm:w-1/3 w-1/2">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <a :href="`/category/${i.category_id}/${i.id}`">
                        <img class="w-full" :src="i.path + '.svg'" alt="">
                    </a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useIconStore } from "../../store/icon";
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref } from "vue";
import categoryData from "../../assets/data/categories/category.json"

const store = useIconStore()
const router = useRouter()
const route = useRoute()

const { filteredIcons } = storeToRefs(store)

type IconName = {
    ja: string
    en: string
}
type Icon = {
    id: number
    name: IconName
    category_id: number
    tags: string[]
    path: string
    settingCount: number
}

const id = Array(route.params.category_id)[0]
if(typeof id !== 'object') {
    const iconData :Icon[] = categoryData
    store.addCategoryId(parseInt(id))
    store.addIconData(iconData)
}




</script>