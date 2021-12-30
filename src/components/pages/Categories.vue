<template>
    <div>カテゴリーページです</div>
</template>

<script setup lang="ts">
import { useIconStore } from "../../store/icon";
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from "vue";

const store = useIconStore()

const router = useRouter()
const route = useRoute()

onMounted(() => {
  const { id } = route.params
  console.log(id)
})
</script>