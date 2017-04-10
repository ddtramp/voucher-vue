<template>
    <td class="je">
        <Je
            name="jfje"
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
    const Jfje = {
        name: 'Jfje',
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
                MiddleEvent.$emit('M_JFJE_CHANGE', this.index, v)
            },
            keydown ($event) {
                MiddleEvent.$emit('M_ITEM_KEYDOWN', 'jfje', this.index, $event)
            }
        },
        components: {
            Je
        }
    }

    export default Jfje
</script>

<style scoped>

    .je {
        width: 176px;
    }

</style>
