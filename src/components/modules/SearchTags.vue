<template>
    <div id="SearchTags">
        {{ typeAlert }}
        <ul class="tags">
            <li v-for="(type, index) in pokeTypes" :key="index" @click="sendType(type)" class="tag" :class="{selected: isSelected(type)}">
                {{ type }}
            </li>
        </ul>
        <button @click="console()">確認するタグ</button>
    </div>
</template>

<script>
export default {
    "name": "SearchTags",
    data() {
        return {
            pokeTypes: ['ノーマル', 'ほのお', 'みず', 'でんき', 'くさ', 'こおり',
            'かくとう', 'どく', 'じめん', 'ひこう', 'エスパー', 'むし', 'いわ', 'ゴースト',
            'ドラゴン', 'あく', 'はがね', 'フェアリー'
            ],
            selectedTypes: [],
            typeAlert: '',
        }
    },
    created() {
    },
    computed: {
        isSelected() {
            return type => {
                return this.selectedTypes.includes(type)
            }
        },
        //タイプを受け取ってclassに設定できる値を返す
        getTypeForStyle() {
            return type => {
                return "--" + type.toLowerCase()
            }
        },
    },
    methods: {
        sendType(type) {
            this.setShowFlg()
            if(this.selectedTypes.includes(type)) {
                this.selectedTypes = this.selectedTypes.filter(e => e != type)
            } else if (this.selectedTypes.length === 2) {
                this.typeAlert = '選択できるタイプは2つまでです'
            }
            else {
                this.selectedTypes.push(type)
            }
            this.$emit('parent', this.selectedTypes)
        },
        setShowFlg() {
            this.$store.dispatch("setShowFlg", 3)
        },
        console() {
            console.log(this.selectedTypes)
        }
    }
}
</script>

<style scoped>
.tags {
    display: flex;
    flex-wrap: wrap;
}
.tag {
    background-color: #fff;
    border: blueviolet 1px solid;
    border-radius: 10px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .16);
    color: #212121;
    text-decoration: none;
    text-align: center;
    list-style: none;
    margin-left: 12px;
    margin-top: 12px;
    width:calc((100% - (12px * 5) )/ 5);
}
.tag.selected {
    background-color: blueviolet;
    color: #fff;
}
.type {
    color: #fff;
}
.type.--grass {
    background-color: seagreen;
}
.type.--poison {
    background-color: slateblue;
}
.type.--fire {
    background-color: red;
}
.type.--water {
    background-color: royalblue;
}
.type.--normal {
    background-color: slategray;
}
.type.--electric {
    background-color: yellow;
}
.type.--ice {
    background-color: skyblue;
}
.type.--fighting {
    background-color: firebrick;
}
.type.--ground {
    background-color: tan;
}
.type.--flying {
    background-color: skyblue;
}
.type.--psychic {
    background-color: plum;
}
.type.--bug {
    background-color: palegreen;
}
.type.--rock {
    background-color: peru;
}
.type.--ghost {
    background-color: purple
}
.type.--dragon {
    background-color: rebeccapurple;
}
.type.--dark {
    background-color: black;
}
.type.--steal {
    background-color: darkgray;
}
.type.--fairy {
    background-color: violet;
}
</style>