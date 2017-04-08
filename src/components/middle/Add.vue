<template>
    <td class="addStyle">
        <div class="addArea">
            <span :class="{ hidden: !initData }"  @click="add">+</span>
        </div>
    </td>
</template>

<script>
    import MiddleEvent from '../../Event/Middle'
    const Add = {
        name: 'Add',
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
            add: function () {
                MiddleEvent.$emit('M_ADD_ITEM', this.index)
            }
        }
    }

    export default Add
</script>

<style scoped>

    .hidden { display: none !important; }
    .addStyle { width: 30px; border: none !important; user-select: none; }

    .addArea { width: 24px;  height: 61px; position: relative; }

    .addArea span {
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
