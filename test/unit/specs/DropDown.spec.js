import DropDown from '@/components/DropDown.vue'

describe('DropDown.vue', () => {
    it('has a name String', () => {
        expect(DropDown.name).to.be.a('string')
    })
    it('has a created hook', () => {
        expect(DropDown.created).to.be.a('function')
    })
    it('has a updated hook', () => {
        expect(DropDown.updated).to.be.a('function')
    })
    it('has a methods Object', () => {
        expect(DropDown.methods).to.be.a('object')
    })
    it('has a computed Object', () => {
        expect(DropDown.computed).to.be.a('object')
    })
    it('has a data Object', () => {
        expect(DropDown.data).to.be.a('function')
    })
    it('sets the correct default data', () => {
        const defaultData = DropDown.data()
        expect(defaultData).to.have.all.keys(['items', 'filter', 'liCurrent'])
        expect(defaultData.items).to.be.a('array')
        expect(defaultData.items).to.be.empty
        expect(defaultData.filter).to.equal('')
        expect(defaultData.liCurrent).to.equal(0)
    })
    it('has a props Array', () => {
        expect(DropDown.props).to.be.a('array').that.to.include('initData').that.to.lengthOf(1)
    })
})
