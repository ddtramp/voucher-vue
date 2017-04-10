<template>
    <div class="body"
         ref="scroll"
         @scroll="scroll($event)"
    >
        <table>
            <MBTrs :initData="items"></MBTrs>
        </table>
    </div>
</template>

<script>
    import MBTrs from './MBTrs.vue'
    import MiddleEvent from '../../Event/Middle'
    const MBody = {
        name: 'MBody',
        props: ['initData'],
        data: function () {
            return {
                items: this.initData
            }
        },
        methods: {
            scroll (e) {
                MiddleEvent.$emit('M_SCROLL', e)
            }
        },
        created: function () {
            MiddleEvent.$on('M_SUBJECT_CLICK_FOR_SCROLL', (index, e) => {
                let scrollDiv = this.$refs.scroll
                let distance = parseInt(index) * 61
                if (scrollDiv.scrollTop > distance) {
                    distance = (parseInt(index) * 61)
                } else if (distance > scrollDiv.scrollTop + 61 * 3) {
                    distance = (parseInt(index) - 3) * 61
                } else {
                    return
                }
                this.$refs.scroll.scrollTop = distance
            })
        },
        components: {
            MBTrs
        }
    }

    export default MBody
</script>

<style >
    table {
        width: 930px;
        border-collapse: collapse;
        border-spacing: 0;
        box-sizing: border-box;
        overflow: hidden;
    }

    table tr {
        box-sizing: border-box;
    }

    table td {
        vertical-align: middle;
        text-align: center;
        border: 1px solid #ccc;
        height: 60px;
        padding: 0 0;
        font-size: 14px;
        font-weight: bold;
    }

    .body {
        max-height: 244px;
        width: 1000px;
        overflow-x: hidden;
        overflow-y: auto;
        z-index: -1;
    }

    .body table {
        width: 1000px;
    }

    .body table tr {
        position: relative;
    }
    .body table td {
        border-top: none;
        font-weight: normal;
    }
    .body table tr:first-child td {
        border-top: 0 none;
    }
    .body table tr:last-child td {
        border-bottom: 0 none;
    }




</style>
