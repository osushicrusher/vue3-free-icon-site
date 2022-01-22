import { setActivePinia, createPinia } from 'pinia'
import { useIconStore } from '../store/icon'

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
        const iconData = [
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
        store.addIconData(iconData)
        expect(store.icons).toEqual(iconData)
    })
})