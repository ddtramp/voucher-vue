<template>
    <div>
        <ul
            class="jeul "
            :class="{ hidden: toggle }"
            @click="showEditor"
        >
            <li>{{ (value[0] !== 'x' ) ? value[0] : '' }}</li>
            <li>{{ (value[1] !== 'x' ) ? value[1] : '' }}</li>
            <li class="blue">{{ (value[2] !== 'x' ) ? value[2] : '' }}</li>
            <li>{{ (value[3] !== 'x' ) ? value[3] : '' }}</li>
            <li>{{ (value[4] !== 'x' ) ? value[4] : '' }}</li>
            <li class="blue">{{ (value[5] !== 'x' ) ? value[5] : '' }}</li>
            <li>{{ (value[6] !== 'x' ) ? value[6] : '' }}</li>
            <li>{{ (value[7] !== 'x' ) ? value[7] : '' }}</li>
            <li class="red">{{ (value[8] !== 'x' ) ? value[8] : '' }}</li>
            <li>{{  data ? value[9] : '' }}</li>
            <li>{{  data ? value[9] : '' }}</li>
        </ul>
        <div
            class="jeEdit"
            :class="{ hidden: !toggle }"
        >
            <input
                ref="textInput"
                :value="data"
                @focusout="focusout"
                @input="change"
                @keydown.enter.tab.prevent="keydown($event)"

            />
        </div>
    </div>
</template>

<script>
    /**
     * TODO should use props control state; just like react
     * @:SET_VALUE {Function} when value change emit
     */
    const Je = {
        name: 'Je',
        props: {
            name: String,
            initData: {
                type: [Number, String]
            },
            status: {
                type: Boolean,
                required: true
            },
            disable: {
                type: Boolean,
                default: false
            }
        },
        data: function () {
            return {
                toggle: this.status,          // editor show & hide
                focus: true,            // input focus
                d: ''
            }
        },
        computed: {
            value () {
                this.d = this.initData
                return this.handleJe(this.initData)
            },
            data: {
                get () {
                    return this.d
                },
                set (v) {
                    this.d = v
                }
            }
        },
        watch: {
            status () {
                this.toggle = this.status   // watch props
            }
        },
        methods: {
            showEditor: function () {
                this.disable ? '' : this.toggle = true
            },
            focusout: function () {
                this.toggle = false
                this.focus = true
            },
            change: function ($event) {
                let regNumber = /^\d{0,9}(\.\d{0,2})?$/g
                let v = $event.target.value
                this.focus = false
                if (regNumber.test(v)) {
                    this.$emit('SET_VALUE', v) // sent data to parent
                } else {
                    $event.target.value = this.data
                }
            },
            keydown (e) {
                this.toggle = false
                this.$emit('KEYDOWN', e)
            },
            /**
             * 强制保留两位小数
             * @param x
             * @returns {*}
             */
            ToDecimal2: function (x) {
                var f = parseFloat(x)
                if (isNaN(f)) {
                    return false
                }
                f = Math.round(x * 100) / 100
                var s = f.toString()
                var rs = s.indexOf('.')
                if (rs < 0) {
                    rs = s.length
                    s += '.'
                }
                while (s.length <= rs + 2) {
                    s += '0'
                }
                return s
            },

            /**
             * 数字前面补X
             * @param num {String|number}
             * @param length {Number}
             * @returns {Blob|ArrayBuffer|Array.<T>|Buffer|*|string}
             * @constructor
             */
            PrefixInteger: function (num, length) {
                return (Array(length).join('x') + num).slice(-length)
            },

            /**
             * 格式化金额
             * @param v {String}
             * @returns {Array}
             */
            handleJe: function (v) {
                if (!v) {
                    return ['', '', '', '', '', '', '', '', '', '', '']
                }
                var value = this.ToDecimal2(Number.parseFloat(v)).toString().split('.')

                var interger = this.PrefixInteger(value[0], 9)
                var decima = value[1]

                return interger.split('').concat(decima.split(''))
            }
        },
        updated: function () {
            if (this.toggle && this.focus) {
                this.$refs.textInput.focus()
                this.$refs.textInput.select()
            }
        }
    }

    export default Je
</script>

<style scoped>

    .hidden { display: none !important; }

    .blue {
        border-color: #a5d9f6 !important;
    }

    .red {
        border-color: #eeb9b9 !important;
    }
    .jeul {
        list-style: none;
        padding: 0 0;
        margin: 0 0;
        display: flex;
        font-size: 12px;
        font-weight: normal;
        height: 60px;
    }


    .jeul li {
        height: 60px;
        line-height: 60px;
        font-size: 18px;
        width: 16px;
        display: inline-flex;
        flex: 1;
        margin: 0 auto;
        text-align: center;
        justify-content: center;
        border-right: 1px solid #ccc;
    }

    .jeul li:last-child {
        border-right: 0 none;
    }

    .jeText {
        padding: 4px 4px;
        text-align: left;
        height: 52px;
    }

    .jeEdit {
        height: 60px;
    }

    .jeEdit input {
        border: 2px solid #3ec8dd;
        width: 180px;
        height: 54px;
        resize: none;
        overflow: auto;
        text-align: right;
        font-size: 20px;
    }

    .jeEdit input:focus {
        outline: none;
    }
</style>
