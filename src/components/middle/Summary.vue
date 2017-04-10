<template>
    <td class="zy bodyZy">
        <div>
            <div
                class="zyText"
                :class="{ hidden: toggle }"
                @click="showEditor(index, $event)"
            >{{ initData }}</div>
            <div
                class="zyEdit"
                :class="{ hidden: !toggle }
            ">
                <textarea
                    ref="textArea"
                    @focusout="focusout"
                    @input="change(index, $event.target.value)"
                    @keydown.enter.tab.prevent="keydown(index, $event)"
                >{{ initData }}</textarea>
            </div>
        </div>
    </td>

</template>

<script>
    import MiddleEvent from '../../Event/Middle'
    const Summary = {
        name: 'Summary',
        props: {
            index: {
                type: Number,
                required: true
            },
            initData: {
                type: String
            },
            status: {
                type: Boolean,
                required: true
            }
        },
        data: function () {
            return {
                toggle: this.status
            }
        },
        methods: {
            showEditor: function (index, $event) {
                MiddleEvent.$emit('M_SUBJECT_CLICK_FOR_SCROLL', index, $event)
                this.toggle = true
            },
            focusout: function () {
                this.toggle = false
            },
            change: function (index, text) {
                MiddleEvent.$emit('M_SUMMARY_CHANGE', index, text)
            },
            keydown: function (index, $event) {
                MiddleEvent.$emit('M_ITEM_KEYDOWN', 'summary', index, $event)
            }
        },
        updated: function () {
            this.toggle ? this.$refs.textArea.focus() : ''
        }

    }

    export default Summary
</script>

<style scoped>
    .hidden { display: none !important; }
    .zy {
        width: 200px;
    }
    .bodyZy {
        vertical-align: top !important;
    }

    .zyText { padding: 4px 4px; text-align: left;  height: 52px; width: 192px; word-break: break-all; }

    .zyEdit {  height: 60px;  }

    .zyEdit textarea {
        position: relative;
        border: 2px solid #3ec8dd;
        width: 192px;
        height: 53px;
        resize: none;
        overflow: auto;
    }

    .zyEdit textarea:focus {
        outline: none;
    }
</style>
