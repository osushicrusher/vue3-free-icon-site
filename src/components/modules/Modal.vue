<template>
    <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div class="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-10/12 sm:min-h-screen">
                <div class="relative bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                        <div class="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                            <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                                <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" :src="`${findSelectedIcon.path}.svg`">
                                <div class="lg:w-2/3 w-full">
                                    <div class="flex justify-start">
                                        <div class="bg-blue-500 hover:bg-blue-700 border-r-2 border-r-blue-700 text-white font-bold py-2 px-4">サイズ</div>
                                        <button class="bg-blue-500 hover:bg-blue-700 border-r-2 border-r-blue-700 text-white font-bold py-2 px-4">16x16</button>
                                        <button class="bg-blue-500 hover:bg-blue-700 border-r-2 border-r-blue-700 text-white font-bold py-2 px-4">32x32</button>
                                        <button class="bg-blue-500 hover:bg-blue-700 border-r-2 border-r-blue-700 text-white font-bold py-2 px-4">64x64</button>
                                        <button class="bg-blue-500 hover:bg-blue-700 border-r-2 border-r-blue-700 text-white font-bold py-2 px-4">128x128</button>
                                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">256x256</button>
                                    </div>
                                    <div class="flex justify-start mt-3">
                                        <div class="bg-green-500 hover:bg-green-700 border-r-2 border-r-green-700 text-white font-bold py-2 px-4">ファイル</div>
                                        <button class="bg-green-500 hover:bg-green-700 border-r-2 border-r-green-700 text-white font-bold py-2 px-4">SVG</button>
                                        <button class="bg-green-500 hover:bg-green-700 border-r-2 border-r-green-700 text-white font-bold py-2 px-4">JPEG</button>
                                        <button class="bg-green-500 hover:bg-green-700 border-r-2 border-r-green-700 text-white font-bold py-2 px-4">PNG</button>
                                        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4">EPS</button>
                                    </div>
                                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-50">Microdosing synth tattooed vexillologist</h1>
                                    <p class="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span @click="toggleModal()" class="absolute top-0 right-0"><fa icon="times-circle" /></span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useIconStore } from "../../store/icon";
const store = useIconStore()
const { findSelectedIcon } = storeToRefs(store)

// モーダルの開閉を制御
const toggleModal = () => {
    store.toggleModal()
}

</script>