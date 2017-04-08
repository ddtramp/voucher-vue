<template>
    <tbody>
        <MBTr
            v-for="(item, index) in items"
            :initData="item"
            :key="index"
            :index="index"
        ></MBTr>
    </tbody>
</template>

<script>
    import MBTr from './MBTr.vue'
    const MBTrs = {
        name: 'MBTrs',
        props: ['initData'],
        computed: {
            items () {
                return this.initData
            }
        },
        components: {
            MBTr
        }
    }

    export default MBTrs
</script>

<style scoped>

</style>
