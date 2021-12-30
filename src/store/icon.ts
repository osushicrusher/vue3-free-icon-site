import { defineStore } from "pinia";

type IconName = {
  ja: string
  en: string
}

type Icon = {
  id: number
  name: IconName
  category: number
  tags: string[]
  path: string
  settingCount: number
}

export const useIconStore = defineStore("icon", {
  state: () => {
    return {
      selectedIcon: {} as Icon,
      icons: [] as Icon[]
    }
  },
  getters: {
    // filteredPokemonsByName(state) :Pokemon[] {
    //   const txt = state.searchText
    //   const katakanaTxt = txt.replace(/[\u3042-\u3093]/g, m=>String.fromCharCode(m.charCodeAt(0) + 96))
    //   return state.pokemons.filter(p => txt === p.name.japanese.substr(0, txt.length) || katakanaTxt === p.name.japanese.substr(0, txt.length))
    // }
  },
  actions: {
    // addPokemon(pokemon: Pokemon) :void {
    //   this.pokemon = pokemon
    // },
    // addPokemons(pokemons: Pokemon[]) :void {
    //   this.pokemons = pokemons
    // },
  }
});