<template>
  <div id="app">
      <Top name="Top" :initData="top"></Top>
      <Middle name="Middle" :initData="items"></Middle>

      <DropDown
        :initData="dropDown"
      ></DropDown>
  </div>
</template>

<script>
    import TopEvent from './Event/Top'
    import MiddleEvent from './Event/Middle'
    import Top from './components/top/Top.vue'
    import Middle from './components/middle/Middle.vue'
    import DropDown from './components/DropDown.vue'
    import moment from 'moment'
    const defaultItem = {
        summary: '',
        subject: '',
        subjectName: '',
        jfje: '',
        dfje: '',
        status: {}
    }
    const defaultStatus = {
        summary: false,
        subject: false,
        jfje: false,
        dfje: false
    }
    const App = {
        name: 'app',
        data: function () {
            return {
                top: {
                    number: '666',
                    date: moment().format('YYYY-MM-DD'),
                    accessory: ''

                },
                items: [
                    {
                        summary: '',
                        subject: '',
                        subjectName: '',
                        jfje: '',
                        dfje: '',
                        status: {
                            summary: false,
                            subject: false,
                            jfje: false,
                            dfje: false
                        }
                    },
                    {
                        summary: '',
                        subject: '',
                        subjectName: '',
                        jfje: '',
                        dfje: '',
                        status: {
                            summary: false,
                            subject: false,
                            jfje: false,
                            dfje: false
                        }
                    },
                    {
                        summary: '',
                        subject: '',
                        subjectName: '',
                        jfje: '',
                        dfje: '',
                        status: {
                            summary: false,
                            subject: false,
                            jfje: false,
                            dfje: false
                        }
                    },
                    {
                        summary: '',
                        subject: '',
                        subjectName: '',
                        jfje: '',
                        dfje: '',
                        status: {
                            summary: false,
                            subject: false,
                            jfje: false,
                            dfje: false
                        }
                    }
                ],
                b: {
                    hello: 12
                },
                scrollTop: 0,
                dropDown: {
                    index: '',
                    show: false,
                    position: {
                        top: 0,
                        left: 0
                    }
                }

            }
        },
        created: function () {
            TopEvent.$on('T_NUMBER_CHANGE', (d) => {
                this.top.number = d
            })
            TopEvent.$on('T_DATE_CHANGE', (d) => {
                this.top.date = d
            })
            TopEvent.$on('T_ACCESSORY_CHANGE', (d) => {
                this.top.accessory = d
            })
            MiddleEvent.$on('M_ADD_ITEM', (index) => {
                this.items.splice(index, 0, Object.assign({}, defaultItem, { status: Object.assign({}, defaultStatus) }))
            })
            MiddleEvent.$on('M_DEL_ITEM', (index) => {
                this.items.splice(index, 1)
            })
            MiddleEvent.$on('M_ITEM_KEYDOWN', (itemName, index, $event) => {
                switch (itemName) {
                case 'summary':
                    this.items[index].status.summary = false
                    MiddleEvent.$emit('M_SUBJECT_CLICK', index, { offsetTop: $event.target.offsetTop, offsetLeft: $event.target.offsetLeft + 200 })
                    break
                case 'subject':
                    this.items[this.dropDown.index].status.subject = false
                    this.items[this.dropDown.index].status.jfje = true
                    break
                case 'jfje':
                    this.items[index].status.jfje = false
                    this.items[index].status.dfje = true
                    break
                case 'dfje':
                    this.items[index].status.dfje = false
                    break
                default:
                    console.log('lala')
                }
            })
            MiddleEvent.$on('M_SUMMARY_CHANGE', (index, text) => {
                this.items[index].summary = text
            })
            MiddleEvent.$on('M_JFJE_CHANGE', (index, text) => {
                this.items[index].jfje = text
                this.items[index].dfje = ''
            })
            MiddleEvent.$on('M_DFJE_CHANGE', (index, text) => {
                this.items[index].jfje = ''
                this.items[index].dfje = text
            })
            MiddleEvent.$on('M_SCROLL', (e) => {
                this.scrollTop = e.target.scrollTop
                if (this.dropDown.show) {
                    let scrollDiv = e.target
                    let distance = (parseInt(this.dropDown.index) * 61)
                    if (scrollDiv.scrollTop > distance || (scrollDiv.scrollTop < (parseInt(this.dropDown.index) + 1 - 4) * 61)) {
                        // hide
                        this.dropDown.show = false
                    } else {
                        this.dropDown.position.top = (scrollDiv.offsetTop + distance - scrollDiv.scrollTop)
                    }
                }
            })
            MiddleEvent.$on('M_SUBJECT_CLICK', (index, d) => {
                this.dropDown = {
                    index: index,
                    show: true,
                    position: {
                        top: d.offsetTop - this.scrollTop,
                        left: d.offsetLeft
                    }
                }
            })
            MiddleEvent.$on('DROPDOWN_CLICK', (item) => {
                this.items[this.dropDown.index].subject = item.subject
                this.items[this.dropDown.index].subjectName = item.name
                this.dropDown.index = ''
                this.dropDown.show = false
            })
            MiddleEvent.$on('DROPDOWN_BLUR', () => {
                this.dropDown.index = 0
                this.dropDown.show = false
            })
        },
        components: {
            Top,
            Middle,
            DropDown
        }
    }

    export default App
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 1000px;
  height: 480px;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #fff;
  border: 1px solid #cdcdcd;
  border-radius: 4px 4px;
}
</style>
