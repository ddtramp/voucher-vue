<template>
    <div class="footer">
        <table>
            <tbody>
            <tr >
                <td colSpan="2" class="zy">
                    <div class="footerLeft">
                        <p><span>合计：</span><span>{{ initCount.DX }}</span></p>
                    </div>
                </td>
                <td  class="je">
                    <Je
                        name="jfjehj"
                        :initData="initCount.jfje"
                        :status="status"
                        :disable="true"
                    >
                    </Je>
                </td>
                <td  class="je">
                    <Je
                        name="dfjehj"
                        :initData="initCount.dfje"
                        :status="status"
                        :disable="true"
                    >
                    </Je>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Je from '../middle/Je.vue'

    const MFooter = {
        name: 'MFooter',
        props: {
            initCount: {
                type: Object,
                required: true
            }
        },
        data () {
            return {
                status: false
            }
        },
        components: {
            Je
        }
    }

    export default MFooter
</script>

<style scoped>
    table {  width: 930px; border-collapse: collapse; border-spacing: 0; box-sizing: border-box; overflow: auto; }
    table td { vertical-align: middle; text-align: center; border: 1px solid #ccc; height: 30px; padding: 0 0; font-size: 14px; font-weight: bold; }
    .jeul { list-style: none; padding: 0 0; margin: 0 0; height: 30px; display: flex; font-size: 12px; font-weight: normal; }
    .jeul li { width: 16px; height: 30px; line-height: 30px; display: inline-flex; flex: 1; margin: 0 auto; text-align: center; justify-content: center; border-right: 1px solid #ccc; }
    .jeul li:last-child { border-right: 0 none; }
    .je { width: 176px;  }


    .footer { height: 60px; margin: 0 40px 0 30px;}
    .footer .jeul  li { font-size: 18px; }

    .footerLeft { text-align: left; padding-left: 20px;  }
    .footer .jeul {  height: 60px;  }
    .footer .jeul  li { height: 60px; line-height: 60px;}
</style>
