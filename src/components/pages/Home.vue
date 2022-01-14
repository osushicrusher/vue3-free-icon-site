<template>
    <div>
        <category-section class="py-20"></category-section>
        <Faq class="py-20" />
    </div>
</template>

<script setup lang="ts">
import { useIconStore } from "../../store/icon";
import CategorySection from "../modules/CategorySection.vue"
import Faq from "../modules/Faq.vue"

const store = useIconStore()

</script>