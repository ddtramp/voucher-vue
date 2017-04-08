<template>
    <tr @mouseenter="mouseEnter" @mouseleave="mouseLeave">
        <Add
            :initData="adShow"
            :index="index"
        ></Add>
        <ElSummary
            :index="index"
            :initData="item.summary"
        ></ElSummary>
        <Subject
            :index="index"
            :initData="item"
        ></Subject>
        <Jfje
            :index="index"
            :initData="item.jfje"
        ></Jfje>
        <Dfje
            :index="index"
            :initData="item.dfje"
        ></Dfje>
        <ElDel
            :initData="adShow"
            :index="index"
        ></ElDel>
    </tr>
</template>

<script>
    import Add from './Add.vue'
    import Summary from './Summary.vue'
    import Subject from './Subject.vue'
    import Jfje from './Jfje.vue'
    import Dfje from './Dfje.vue'
    import Del from './Del.vue'
    const MBTr = {
        name: 'MBTr',
        props: ['initData', 'index'],
        data: function () {
            return {
                adShow: false
            }
        },
        computed: {
            item () {
                return this.initData
            }
        },
        methods: {
            mouseEnter: function () {
                this.adShow = true
            },
            mouseLeave: function () {
                this.adShow = false
            }
        },
        components: {
            Add: Add,
            ElSummary: Summary,
            Subject: Subject,
            Jfje: Jfje,
            Dfje: Dfje,
            ElDel: Del
        }
    }

    export default MBTr
</script>

<style scoped>

</style>
