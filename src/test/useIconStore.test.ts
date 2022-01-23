import { setActivePinia, createPinia } from 'pinia'
import { useIconStore } from '../store/icon'

const dummy = {
    icon: {
        "id": 1,
        "name": {
            "ja": "ねこ1",
            "en": "cat1"
        },
        "category_id": 2,
        "tags": "['可愛い']",
        "description": "ねこ1です",
        "path": "/src/assets/icons/svg/cat1",
        "settingCount": 2
    },
    iconArr: [
        {
            "id": 1,
            "name": {
                "ja": "ねこ1",
                "en": "cat1"
            },
            "category_id": 2,
            "tags": "['可愛い']",
            "description": "ねこ1です",
            "path": "/src/assets/icons/svg/cat1",
            "settingCount": 2
        }
    ],
}

describe('Test addCategoryId', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('4いれたら4入る', () => {
        const store = useIconStore()
        expect(store.category_id).toBe(1)
        store.addCategoryId(4)
        expect(store.category_id).toBe(4)
    })

    it('負の数は許容しないので初期値のまま', () => {
        const store = useIconStore()
        expect(store.category_id).toBe(1)
        store.addCategoryId(-20)
        expect(store.category_id).toBe(1)
    })
})

describe('Test addIconData', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('iconData入れたらちゃんと入ってる', () => {
        const store = useIconStore()
        const iconArr = [
            {
                "id": 1,
                "name": {
                    "ja": "ねこ1",
                    "en": "cat1"
                },
                "category_id": 2,
                "tags": "['可愛い']",
                "description": "ねこ1です",
                "path": "/src/assets/icons/svg/cat1",
                "settingCount": 2
            }
        ]
        expect(store.icons).toEqual([])
        store.addIconData(dummy.iconArr)
        expect(store.icons).toEqual(dummy.iconArr)
    })
})

describe('Test addSelectedIcon', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('iconをselectedIconにいれる', () => {
        const store = useIconStore()
        expect(store.selectedIcon).toEqual({})
        store.addSelectedIcon(dummy.icon)
        expect(store.selectedIcon).toEqual(dummy.icon)
    })
})

describe('Test addCategoryPage', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('categoryPageに10入れたら10入る', () => {
        const store = useIconStore()
        expect(store.categoryPage).toBe(1)
        store.addCategoryPage(10)
        expect(store.categoryPage).toBe(10)
    })

    it('categoryPageに負の数与えたら許容しない', () => {
        const store = useIconStore()
        expect(store.categoryPage).toBe(1)
        store.addCategoryPage(-10)
        expect(store.categoryPage).toBe(1)
    })
})

describe('Test toggleModal', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('isModalOpenをfalseからtrueに', () => {
        const store = useIconStore()
        expect(store.isModalOpen).toEqual(false)
        store.toggleModal()
        expect(store.isModalOpen).toEqual(true)
    })

    it('isModalOpenをtrueからfalseに', () => {
        const store = useIconStore()
        store.isModalOpen = true
        expect(store.isModalOpen).toEqual(true)
        store.toggleModal()
        expect(store.isModalOpen).toEqual(false)
    })
})