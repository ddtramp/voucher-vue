<template>
    <div class="accessory">
        附单据 &nbsp;
        <div class="inputStyle" :class="{ inputStyleFocused: focus}">
            <input type="text" @input="change($event)" @focus="focusin" @blur="blur" :value="v"/>
        </div>
        &nbsp;张
    </div>
</template>

<script>
    import TopEvent from '../../Event/Top'
    const Accessory = {
        name: 'Accessory',
        props: ['initData'],
        data: function () {
            return {
                v: this.initData,
                focus: false
            }
        },
        methods: {
            change: function (e) {
                let v = e.target.value
                let reg = /^\d{0,4}/
                let res = reg.exec(v)
                if (res) {
                    this.v = res[0]
                    TopEvent.$emit('T_ACCESSORY_CHANGE', res[0])
                    e.target.value = res[0]
                }
            },
            focusin: function () {
                this.focus = true
            },
            blur: function () {
                this.focus = false
            }

        }

    }

    export default Accessory
</script>

<style scoped>
    .inputStyle { display: inline-block; border: 1px solid #cdcdcd; padding: 4px 2px; border-radius: 4px 4px; }
    .inputStyleFocused { border-color: #349aef; }

    .accessory { width: 50%; text-align: right; }
    .accessory input { width: 48px; border: 0 none; text-align: center; }
    .accessory input:focus { outline: 0 none; }
</style>
