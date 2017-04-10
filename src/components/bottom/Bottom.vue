<template>
    <div class="bottom">
        <div
            class="bottomLeft"
        >
            制单人： {{ extraInfo.zdrName }}
        </div>
        <div class="bottomRight">
            <button
                :class="{ buttonActive: count }"
                @click="save(0)"
            >保存</button>
            <button
                :class="{ buttonActive: count }"
                @click="save(1)"
            >保存并新增</button>
        </div>
    </div>
</template>

<script>
    const Bottom = {
        name: 'Bottom',
        props: {
            initData: {
                type: Object,
                required: true
            },
            extraInfo: {
                type: Object,
                required: true
            }
        },
        data: function () {
            return {
                d: 'you data'
            }
        },
        computed: {
            count () {
                return (this.initData.jfje === this.initData.dfje && this.initData.jfje)
            }
        },
        methods: {
            save (v) {
                if (!this.count) {
                    return
                }
                if (v) {
                    console.log('save && new ')
                } else {
                    console.log('save')
                }
            }
        }
    }

    export default Bottom
</script>

<style scoped>
    .bottom { height: 48px; margin: 0 40px 0 30px; display: flex; }

    .bottomLeft { display: inline-block; width: 50%; height: 48px; line-height: 48px; }
    .bottomRight { display: inline-block; width: 50%; text-align: right; height: 48px; line-height: 48px; position: relative; }

    .bottomRight button { margin-left: 10px; padding: 6px 20px; border-radius: 4px 4px; border: 0 none;  background-color: #cdcdcd; color: #fff;font-size: 14px; position: relative; top: 3px; }
    .bottomRight button:focus { outline: none; }

    .buttonActive { cursor: pointer; background-color: #93d200 !important; }
</style>
