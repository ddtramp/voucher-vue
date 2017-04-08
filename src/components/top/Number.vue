<template>
  <div class="number">
    记字第&nbsp;
    <div class="inputStyle" :class="{ inputStyleFocused : focus }">
      <input type="text" @input="change($event)" @focus="focusin" @blur="blur" :value="v"/>
    </div>
    &nbsp;号
  </div>
</template>
<script>
    import TopEvent from '../../Event/Top'
    export default {
        props: ['initData'],
        name: 'Number',
        data: function () {
            return {
                v: this.initData,
                focus: false
            }
        },
        methods: {
            change: function (e) {
                let v = e.target.value
                let reg = /^\d{0,3}/
                let res = reg.exec(v)
                if (res) {
                    this.v = res[0]
                    TopEvent.$emit('T_NUMBER_CHANGE', res[0])
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
</script>
<style scoped>
  .inputStyle { display: inline-block; border: 1px solid #cdcdcd; padding: 4px 2px; border-radius: 4px 4px; }
  .inputStyleFocused { border-color: #349aef; }

  .number { width: 20%;  }
  .number input { width: 48px; border: 0 none; text-align: center; }
  .number input:focus { outline: 0 none; }


</style>
