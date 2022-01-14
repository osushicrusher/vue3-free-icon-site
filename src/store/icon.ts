import { defineStore } from "pinia";

type IconName = {
  ja: string
  en: string
}

type Icon = {
  id: number
  name: IconName
  category_id: number
  tags: string,
  description: string,
  path: string
  settingCount: number
}

export const useIconStore = defineStore("icon", {
  state: () => {
    return {
      category_id: 1,
      selectedIcon: {} as Icon,
      icons: [] as Icon[],
      searchText: '',
      categoryPage: 1,
      perPage: 20,
      isModalOpen: false
    }
  },
  getters: {
    // 選択されたアイコンを取得
    findSelectedIcon(state) :Icon {
      return state.selectedIcon
    },
    findCategoryId(state) :number {
      return state.category_id
    },
    findIsModalOpen(state) :boolean {
      return state.isModalOpen
    },
    // カテゴリーごとにフィルターした要素を取得
    filteredIcons(state) :Icon[] {
      return state.icons.filter(i => i.category_id === state.category_id)
    },
    // カテゴリーごとにフィルターした要素から最大perPage分だけ取得
    filteredIconsPerPage(state) :Icon[] {
      const icons = this.filteredIcons
      const iconLen = icons.length
      const page = state.categoryPage
      const perPage = state.perPage
      let res = []
      if(iconLen <= perPage) {
        res =  icons
      } else {
        res =  icons.slice((page-1)*perPage, page*perPage)
      }
      return res
    },
    // アイコン数からぺジネーションに必要なページ数を取得
    pageNum(state) :number {
      const len = this.filteredIcons.length
      const perPage = state.perPage
      return Math.ceil(len / perPage)
    },
    // gettersのpageNumをArrayにして返す
    pageNumArr() :number[] {
      return [...Array(this.pageNum)].map((_, i) => i+1);
    },
  },
  actions: {
    addCategoryId(id :number) :void {
      this.category_id = id
    },
    addIconData(data :Icon[]) :void {
      this.icons = data
    },
    addSelectedIcon(icon :Icon) :void {
      this.selectedIcon = icon
    },
    addCategoryPage(page :number) :void {
      this.categoryPage = page
    },
    toggleModal() :void  {
      this.isModalOpen = !this.isModalOpen
    }
  }
});