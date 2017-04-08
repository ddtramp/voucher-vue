<template>
    <div class="header">
        <table>
            <tbody>
            <tr>
                <td rowSpan="2"  class="zy">
                    摘要
                </td>
                <td rowSpan="2">会计科目</td>
                <td>借方金额</td>
                <td>贷方金额</td>
            </tr>
            <tr>
                <td class="je">
                    <ul  class="jeul">
                        <li>
                            亿
                        </li>
                        <li>
                            千
                        </li>
                        <li class="blue">
                            百
                        </li>
                        <li>
                            十
                        </li>
                        <li>
                            万
                        </li>
                        <li class="blue">
                            千
                        </li>
                        <li>
                            百
                        </li>
                        <li>
                            十
                        </li>
                        <li class="blue">
                            元
                        </li>
                        <li>
                            角
                        </li>
                        <li>
                            分
                        </li>
                    </ul>
                </td>
                <td class="je">
                    <ul  class="jeul">
                        <li>
                            亿
                        </li>
                        <li>
                            千
                        </li>
                        <li  class="blue">
                            百
                        </li>
                        <li>
                            十
                        </li>
                        <li>
                            万
                        </li>
                        <li  class="blue">
                            千
                        </li>
                        <li>
                            百
                        </li>
                        <li>
                            十
                        </li>
                        <li  class="blue">
                            元
                        </li>
                        <li>
                            角
                        </li>
                        <li>
                            分
                        </li>
                    </ul>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    const header = {
        name: 'header'
    }

    export default header
</script>

<style scoped>
    table {  width: 930px; border-collapse: collapse; border-spacing: 0; box-sizing: border-box; }
    table tr { box-sizing: border-box; }
    table td { vertical-align: middle; text-align: center; border: 1px solid #ccc; height: 30px; padding: 0 0; font-size: 14px; font-weight: bold; }

    .jeul { list-style: none; padding: 0 0; margin: 0 0; height: 30px; display: flex; font-size: 12px; font-weight: normal; }
    .jeul li { width: 16px; height: 30px; line-height: 30px; display: inline-flex; flex: 1; margin: 0 auto; text-align: center; justify-content: center; border-right: 1px solid #ccc; }
    .jeul li:last-child { border-right: 0 none; }

    .hidden { display: none !important; }

    .header { height: 63px; margin: 0 40px 0 30px; }

    .blue { border-color: #a5d9f6 !important; }
    .red {  border-color: #eeb9b9 !important; }

    .zy { width: 200px; }
    .je { width: 176px;  }
</style>
