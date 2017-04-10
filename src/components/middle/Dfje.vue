<template>
    <td class="je">
        <Je
            name="dfje"
            :initData="initData"
            :status="status"
            @SET_VALUE="setJe"
            @KEYDOWN="keydown"

        ></Je>
    </td>
</template>

<script>
    import Je from './Je.vue'
    import MiddleEvent from '../../Event/Middle'
    const Dfje = {
        name: 'Dfje',
        props: {
            index: {
                type: Number,
                required: true
            },
            initData: {
                type: [ Number, String ]
            },
            status: {
                type: Boolean,
                required: true
            }
        },
        data: function () {
            return {

            }
        },
        methods: {
            setJe (v) {
                MiddleEvent.$emit('M_DFJE_CHANGE', this.index, v)
            },
            keydown ($event) {
                MiddleEvent.$emit('M_ITEM_KEYDOWN', 'dfje', this.index, $event)
            }
        },
        components: {
            Je
        }
    }

    export default Dfje
</script>

<style scoped>
    .hidden { display: none !important; }

    .je {
        width: 176px;
    }
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
        height: 60px;
        border: 2px solid #3ec8dd;
        width: 180px;
        height: 55px;
        resize: none;
        overflow: auto;
        text-align: right;
        font-size: 20px;
    }

    .jeEdit input:focus {
        outline: none;
    }
</style>
