<template>
    <div class="voucher">
        <MHeader></MHeader>
        <MBody :initData="items"></MBody>
        <MFooter
            :initCount="initCount"
        ></MFooter>
    </div>
</template>

<script>
    import MHeader from './MHeader.vue'
    import MBody from './MBody.vue'
    import MFooter from './MFooter.vue'
    const Middle = {
        name: 'Middle',
        props: {
            initData: Array,
            initCount: {
                type: Object,
                required: true
            }
        },
        data: function () {
            return {
                items: this.initData
            }
        },
        components: {
            MHeader,
            MBody,
            MFooter
        }
    }

    export default Middle
</script>

<style scoped>
.voucher { width: 100%; }

</style>
