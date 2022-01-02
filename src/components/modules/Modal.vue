<template>
    <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div class="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-10/12 sm:min-h-screen">
                <div class="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                        <div class="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                            <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                                <!-- <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" :src="`/src/assets/thumbnails/${adjustedPokeId(store.selectedId)}.png`"> -->
                                <div class="lg:w-2/3 w-full">
                                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-50">Microdosing synth tattooed vexillologist</h1>
                                    <p class="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
                                    <div class="flex justify-start">
                                        <ul class="flex border-b">
                                            <li class="-mb-px mr-1">
                                                <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="#">Active</a>
                                            </li>
                                            <li class="mr-1">
                                                <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Tab</a>
                                            </li>
                                            <li class="mr-1">
                                                <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Tab</a>
                                            </li>
                                            <li class="mr-1">
                                                <a class="bg-white inline-block py-2 px-4 text-gray-400 font-semibold" href="#">Tab</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span @click="toggleModal()"><fa icon="times-circle" /></span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useIconStore } from "../../store/icon";
const store = useIconStore()

// モーダルの開閉を制御
const toggleModal = () => {
    store.toggleModal()
}

</script>