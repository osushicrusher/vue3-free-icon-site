<template>
    <div class="text-center">
        <input
        type="text"
        @input="setPokeName"
        class="bg-white rounded-3xl p-3 text-black shadow-md border divide-solid border-black w-10/12 md:w-8/12 lg:w-6/12" 
        placeholder="ポケモンの名前を入力する"
        />
        <!-- <fa icon="search" class="search"/> -->
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { reactive, ref, computed } from "vue";
import { useIconStore } from "../../store/icon";

const store = useIconStore()

const adjustedPokeId = ((id :number) :string => {
    return String(id).padStart(3, '0')
})

const toKatakana = (str :string) => {
    str.replace(/[\u3041-\u3096]/g, match => {
        const chr = match.charCodeAt(0) + 0x60
        return String.fromCharCode(chr)
    })
}

// const pokeName = ref('');
const setPokeName = ({ target }) :void => {
    store.addSearchText(target.value)
}

</script>

<!-- <script>
export default {
    name: "SearchBar",
    data() {
        return {
            pokemonName: ''
        }
    },
    created() {
        
    },
    computed: {
        toKatakana() {
            return str => {
                return str.replace(/[\u3041-\u3096]/g, match => {
                    const chr = match.charCodeAt(0) + 0x60;
                    return String.fromCharCode(chr);
                });
            }
        },
        
    },
    methods: {
        searchPokemon(pokemonName) {
            //検索バーが空白だった場合、処理を抜ける
            if(this.pokemonName == "") return
            this.$store.dispatch("searchPokemon", pokemonName)
            this.pokemonName = ''
            this.setShowFlg()
            console.log(this.$store.getters.showFlg)
        },
        setShowFlg() {
            this.$store.dispatch("setShowFlg", 2)
        }
    }
};
</script> -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type="text"] {
    border: solid 1px rgb(225, 255, 255);
}

</style>