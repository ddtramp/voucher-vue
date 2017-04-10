<template>
    <div
        class="kjkmEdit"
        :class="{ hidden: !initData.show }"
        :style=" { top: position.top + 'px', left: position.left + 'px' } "
    >
    <textarea
        ref="textareaInput"
        @input="change"
        @blur="blur"
        @keydown.tab.prevent="tab($event)"
        @keydown.enter.prevent="enter($event)"
        @keydown.up.prevent="up($event)"
        @keydown.down.prevent="down($event)"

    />
    <div  class="dropdown"  >
        <ul
            ref="wrapper"
        >
            <li v-if="this.filterItems.length===0">没有匹配的数据</li>
            <li
                v-for="(item, index) in this.filterItems"
                :class= "{ dropDownCurrent: (index === liCurrent) }"
                :key="index"
                @mousedown="click(item, index)"
            >{{ item.all }}</li>

        </ul>
        <div
            class="newSubject"
            @mousedown="newSubject"
        >
            <span>+</span> 新增科目
        </div>
    </div>
    </div>
</template>

<script>
    import fetch from 'isomorphic-fetch'
    import MiddleEvent from '../Event/Middle'
    const DropDown = {
        name: 'DropDown',
        props: ['initData'],
        data: function () {
            return {
                items: [],
                filter: '',
                liCurrent: 0
            }
        },
        computed: {
            position () {
                return this.initData.position
            },
            filterItems () {
                let reg = new RegExp(this.filter, 'g')
                return this.items.filter(function (val) {
                    return reg.test(val.all)
                })
            }
        },
        methods: {
            change: function ($event) {
                this.filter = $event.target.value
            },
            click: function (item) {
                MiddleEvent.$emit('DROPDOWN_CLICK', item)
            },
            blur: function (e) {
                e.target.value = ''
                this.filter = ''
                this.liCurrent = 0
                MiddleEvent.$emit('DROPDOWN_BLUR')
            },
            tab ($event) {
                MiddleEvent.$emit('M_ITEM_KEYDOWN', 'subject', null, $event)
            },
            enter ($event) {
                MiddleEvent.$emit('M_ITEM_KEYDOWN', 'subject', null, $event)
                MiddleEvent.$emit('DROPDOWN_CLICK', this.filterItems[this.liCurrent])
            },
            up ($event) {
                if (this.liCurrent > 0) {
                    this.liCurrent--
                    this.$refs.wrapper.scrollTop = (this.liCurrent > 3) ? (this.liCurrent - 3) * 30 : 0
                }
            },
            down ($event) {
                if (this.liCurrent < (this.filterItems.length - 1)) {
                    this.liCurrent = this.liCurrent + 1
                }
                this.$refs.wrapper.scrollTop = (this.liCurrent > 3) ? (this.liCurrent - 3) * 30 : 0
            },
            newSubject () {
                // TODO not done
                console.log('new subject click')
            }
        },
        created: function () {
            fetch(`./static/data/subjects.json`)
                .then(response => response.json())
                .then(json => this.items = json)
        },
        updated: function () {
            this.$refs.textareaInput.focus()
        }

    }

    export default DropDown
</script>

<style scoped>
    .hidden { display: none !important; }
    .kjkmEdit { height: 60px; position: absolute;  }
    .kjkmEdit textarea { height: 62px; border: 2px solid #3ec8dd; width: 346px; height: 52px; resize: none; overflow: auto; }
    .kjkmEdit textarea { outline: none; }

    .dropdown { position: absolute; top: 61px; left: -1px; z-index: 999;  width: 353px; max-height: 185px; overflow-y: auto; border-left: 1px solid #ccc; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc;  background-color: #fff; }
    .dropdown ul { position: relative; top: 0; width: 100%; max-height: 150px; margin: 0 0; padding: 0 0; overflow-x: hidden;  }
    .dropdown ul li { padding: 0 10px; width: 100%; height: 30px; line-height: 30px; display: block; box-sizing: border-box; text-align: left; font-size: 12px; font-weight: normal; cursor: pointer; }
    .dropdown ul li:hover { background-color: #effceb; }
    .dropDownCurrent { background-color: #effceb; }

    .dropdown .newSubject { text-align: center; height: 34px; line-height: 34px; color: #51c1c2; border-top: 1px solid #ccc; cursor: pointer; }

</style>
