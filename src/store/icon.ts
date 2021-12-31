import { defineStore } from "pinia";

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

export const useIconStore = defineStore("icon", {
  state: () => {
    return {
      id: 1,
      selectedIcon: {} as Icon,
      icons: [] as Icon[],
      searchText: ''
    }
  },
  getters: {
    findSelectedIcon(state) :Icon {
      return state.selectedIcon
    },
    filteredIcons(state) :Icon[] {
      return state.icons.filter(i => i.category_id === state.id)
    }
  },
  actions: {
    addCategoryId(id :number) :void {
      this.id = id
    },
    addIconData(data :Icon[]) {
      this.icons = data
    },
    addSelectedIcon(icon :Icon) {
      this.selectedIcon = icon
    }
    // addPokemon(pokemon: Pokemon) :void {
    //   this.pokemon = pokemon
    // },
    // addPokemons(pokemons: Pokemon[]) :void {
    //   this.pokemons = pokemons
    // },
  }
});