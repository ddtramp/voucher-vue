<template>
    <div class="date">
        日期：
        <date-picker @change="change" :date="startTime" :option="option" :limit="limit"></date-picker>
    </div>
</template>

<script>
    import TopEvent from '../../Event/Top'
    import myDatepicker from 'vue-datepicker/vue-datepicker-es6.vue'
    import moment from 'moment'
    const d = moment()
    const Date = {
        name: 'Date',
        props: ['initData'],
        data () {
            return {
                startTime: {
                    time: this.initData
                },
                endtime: {
                    time: ''
                },
                option: {
                    type: 'day',
                    week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    format: 'YYYY-MM-DD',
                    placeholder: '',
                    inputStyle: {
                        'display': 'inline-block',
                        'padding': '6px',
                        'line-height': '22px',
                        'font-size': '12px',
                        'border': '1px solid #cdcdcd',
                        'border-radius': '2px',
                        'color': '#5F5F5F',
                        width: '100px',
                        cursor: 'pointer'
                    },
                    color: {
                        header: '#ccc',
                        headerText: '#f00'
                    },
                    buttons: {
                        ok: 'Ok',
                        cancel: 'Cancel'
                    },
                    overlayOpacity: 0.5, // 0.5 as default
                    dismissible: true // as true as default
                },
                timeoption: {
                    type: 'min',
                    week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    format: 'YYYY-MM-DD'
                },
                multiOption: {
                    type: 'multi-day',
                    week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    format: 'YYYY-MM-DD HH:mm'
                },
                limit: [
                    {
                        type: 'fromto',
                        from: d.year() + '-' + moment().subtract(1, 'M').format('MM') + '-' + moment().subtract(1, 'M').daysInMonth(),
                        to: d.year() + '-' + moment().add(1, 'M').format('MM') + '-' + '01'
                    }]
            }
        },
        methods: {
            change: function (v) {
                TopEvent.$emit('T_DATE_CHANGE', v)
            }
        },
        components: {
            'date-picker': myDatepicker
        }

    }

    export default Date
</script>

<style scoped>
    .inputStyle {
        display: inline-block;
        border: 1px solid #cdcdcd;
        padding: 4px 2px;
        border-radius: 4px 4px;
    }

    .inputStyleFocused {
        border-color: #349aef;
    }

    .date {
        width: 30%;
    }

    .date input {
        width: 48px;
        border: 0 none;
        text-align: center;
    }

</style>
