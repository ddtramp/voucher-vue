<template>
    <td class="bodyKjkm">
        <div
            class="kjkmText"
            @click="click(index, $event)"
        >{{ initData.subject + ' ' + initData.subjectName }}</div>
    </td>
</template>

<script>
    import MiddleEvent from '../../Event/Middle'
    const Subject = {
        name: 'Subject',
        props: {
            index: Number,
            initData: Object
        },
        data: function () {
            return {
                d: 'you data'
            }
        },
        methods: {
            click (index, $event) {
                MiddleEvent.$emit('M_SUBJECT_CLICK_FOR_SCROLL', index, $event)
                MiddleEvent.$emit('M_SUBJECT_CLICK', index, { offsetTop: $event.target.offsetTop, offsetLeft: $event.target.offsetLeft })
            }
        }
    }

    export default Subject
</script>

<style scoped>
    .bodyKjkm {
        vertical-align: top !important;
    }

    .kjkmText {
        padding: 4px 4px;
        text-align: left;
        height: 52px;
        position: relative;
    }
</style>
