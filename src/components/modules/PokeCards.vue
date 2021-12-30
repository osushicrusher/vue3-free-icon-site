<template>
    <p v-if="filteredPokemonsByName == ''" class="text-center">見つかりませんでした</p>
    <ul v-if="filteredPokemonsByName != []" class="flex flex-wrap -m-2">
        <li v-for="p in filteredPokemonsByName" :key="p.id" class="p-2 lg:w-1/6 md:w-1/4 sm:w-1/3 w-1/2" @click="setPokemon(p.id)">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" :src="`/src/assets/thumbnails/${adjustedPokeId(p.id)}.png`" alt="Sunset in the mountains">
                <div class="pt-4 pb-2 flex justify-center">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">{{ translateTypeInJa(p.type[0]) }}</span>
                    <span v-if="p.type[1]" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mb-2">{{ translateTypeInJa(p.type[1]) }}</span>
                </div>
            </div>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useIconStore } from "../../store/icon";

type Names = {
    english: string
    japanese: string
    chinese: string
    french: string
}

type Base = {
    HP: number
    Attack: number
    Defense: number
    SpAttack: number
    SpDefense: number
    Speed: number
}

type Pokemon = {
    id: number
    name: Names
    type: string[]
    base: Base
}

const store = useIconStore()
const { filteredPokemonsByName } = storeToRefs(store)

const pokemons = ref(pokeJson)
store.addPokemons(pokemons)

// ポケモンIDの桁整形
const adjustedPokeId = ((id :number) :string => {
    return String(id).padStart(3, '0')
})

// 選択したポケモンを保持
const setPokemon = (id :number) :void => {
    store.toggleModal()
    store.addSelectedId(id)
    // store.addPokemon(pokemons[id-1])
}

type PokeType = 'Normal' | 'Fire' | 'Water' | 'Grass' | 'Electric' |
                'Ice' | 'Fighting' | 'Poison' | 'Ground' | 'Flying' |
                'Psychic' | 'Bug' | 'Rock' | 'Ghost' | 'Dragon' | 'Dark' |
                'Steel' | 'Fairy'

type PokeTypeInJa = 'ノーマル' | 'ほのお' | 'みず' | 'くさ' | 'でんき' |
                'こおり' | 'かくとう' | 'どく' | 'じめん' | 'ひこう' |
                'エスパー' | 'むし' | 'いわ' | 'ゴースト' | 'ドラゴン' | 'あく' |
                'はがね' | 'フェアリー'

// タイプを日本語で返す
const translateTypeInJa = (type :string) :PokeTypeInJa => {
    const typeObj = {
        "Normal": 'ノーマル',
        "Fire": 'ほのお',
        "Water": 'みず',
        "Grass": 'くさ',
        "Electric": 'でんき',
        "Ice": 'こおり',
        "Fighting": 'かくとう',
        "Poison": 'どく',
        "Ground": 'じめん',
        "Flying": 'ひこう',
        "Psychic": 'エスパー',
        "Bug": 'むし',
        "Rock": 'いわ',
        "Ghost": 'ゴースト',
        "Dragon": 'ドラゴン'as PokeTypeInJa,
        "Dark": 'あく',
        "Steel": 'はがね',
        "Fairy": 'フェアリー',
    }
    return typeObj[type]
}
</script>