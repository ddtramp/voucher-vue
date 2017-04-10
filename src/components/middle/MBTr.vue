<template>
    <tr @mouseenter="mouseEnter" @mouseleave="mouseLeave">
        <Add
            :initData="adShow"
            :index="index"
        ></Add>
        <ElSummary
            :index="index"
            :initData="item.summary"
            :status="item.status.summary"
        ></ElSummary>
        <Subject
            :index="index"
            :initData="item"
            :status="item.status.subject"
        ></Subject>
        <Jfje
            :index="index"
            :initData="item.jfje"
            :status="item.status.jfje"
        ></Jfje>
        <Dfje
            :index="index"
            :initData="item.dfje"
            :status="item.status.dfje"
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
            },
            summary: {
                get () {
                    return this.status.summary
                },
                set (v) {
                    this.status.summary = v
                }
            },
            subject: {
                get () {
                    return this.status.subject
                },
                set (v) {
                    this.status.subject = v
                }
            },
            jfje: {
                get () {
                    return this.status.jfje
                },
                set (v) {
                    this.status.jfje = v
                }
            },
            dfje: {
                get () {
                    return this.status.dfje
                },
                set (v) {
                    this.status.dfje = v
                }
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
