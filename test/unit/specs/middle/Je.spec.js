import Vue from 'vue'
import Com from '@/components/middle/Je.vue'
describe('Je.vue', () => {
    it('has a props Object', () => {
        expect(Com.props).to.be.a('object')
            .that.to.have.all.keys(['name', 'initData', 'status', 'disable'])
        expect(Com.props.initData).to.be.a('object')
            .that.to.have.property('type')
        expect(Com.props.status).to.be.a('object')
            .that.to.have.keys(['type', 'required'])
        expect(Com.props.disable).to.be.a('object')
            .that.to.have.keys(['type', 'default'])
    })
    it('has a data Function', () => {
        expect(Com.data).to.be.a('function')
        expect(Com.data()).that.to.have.all.keys(['toggle', 'focus', 'd'])
        expect(Com.data().focus).to.be.ok
    })
    it('has a computed Function', () => {
        expect(Com.computed).to.be.a('object')
    })
    it('has a watch Function', () => {
        expect(Com.watch).to.be.a('object')
    })
    it('has a methods Function', () => {
        expect(Com.methods).to.be.a('object')
            .that.to.have.all.keys(['showEditor', 'focusout', 'change', 'keydown', 'ToDecimal2', 'PrefixInteger', 'handleJe'])
    })
    it('has a updated Function', () => {
        expect(Com.updated).to.be.a('function')
    })
    it('render correctly with different props', () => {
        let C = Vue.extend(Com)
        let props1 = {
            name: 'hello',
            initData: 100,
            status: false,
            disable: false
        }
        let Instance = new C({ propsData: props1 }).$mount()
        expect(Instance.name).to.be.equal(props1.name)
        expect(Instance.initData).to.be.equal(props1.initData)
        expect(Instance.status).to.not.be.ok
        expect(Instance.disable).to.not.be.ok
        expect(Instance.$el.querySelectorAll('.jeul li')[6].textContent).to.be.equal('1')
        Instance.showEditor()
        expect(Instance.toggle).to.be.ok
        expect(Instance.ToDecimal2(100)).to.be.equal('100.00')
        expect(Instance.PrefixInteger(10, 4)).to.be.equal('xx10')
        expect(Instance.handleJe(200)[6]).to.be.equal('2')
    })
})
