<template>
    <td class="delStyle">
        <div class="delArea">
            <span :class="{ hidden: !initData }"  @click="del">x</span>
        </div>
    </td>
</template>

<script>
    import MiddleEvent from '../../Event/Middle'
    const Del = {
        name: 'Del',
        props: {
            index: {
                type: [ Number, String ],
                required: true
            },
            initData: {
                type: Boolean,
                default: false,
                required: true
            }
        },
        methods: {
            del: function () {
                MiddleEvent.$emit('M_DEL_ITEM', this.index)
            }
        }
    }

    export default Del
</script>

<style scoped>
    .hidden { display: none !important; }
    .delStyle {
        width: 40px;
        border: none !important;
        user-select: none;
    }

    .delArea {
        width: 24px;
        height: 61px;
        position: relative;
    }

    .delArea span {
        position: absolute;
        top: 24px;
        left: 6px;
        border: 1px solid #ccc;
        padding: 0 5px;
        border-radius: 50% 50%;
        cursor: pointer;
        color: #ccc;
    }
</style>
