<template>
    <td class="je">
        <Je
            :initData="initData"
            :setValue="setJe"
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
            }
        },
        data: function () {
            return {

            }
        },
        methods: {
            setJe (v) {
                MiddleEvent.$emit('M_JFJE_CHANGE', this.index, v)
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
