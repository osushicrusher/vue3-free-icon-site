export type IconName = {
    ja: string
    en: string
}

export type Icon = {
    id: number
    name: IconName
    category_id: number
    tags: string,
    description: string,
    path: string
    settingCount: number
}

export type sizeType  = '16x16' | '32x32' | '64x64' | '128x128' | '256x256'
export type fileType = 'SVG' | 'JPEG' | 'PNG' | 'EPS'

export type typeCategoryIds = 1 | 2 | 3