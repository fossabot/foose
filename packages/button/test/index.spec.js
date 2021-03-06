import { shallow } from '@vue/test-utils'
import Button from '../src/Button.vue'
import ButtonGroup from '../src/ButtonGroup.vue'

describe('Button', () => {

  const createCmp = propsData => shallow(Button, { propsData })
  let wrapper

  it('type', () => {
    wrapper = createCmp({ type: 'primary' })

    expect(wrapper.classes()).toContain('btn-primary')
  })

  it('button slot', () => {
    const wrapper = shallow(Button, {
      slots: {
        default: 'hello'
      }
    })

    expect(wrapper.text()).toContain('hello')
  })

  it('size', () => {
    wrapper = createCmp({ size: 'sm' })

    expect(wrapper.classes()).toContain('btn-sm')
  })

  it('state', () => {
    wrapper = createCmp({ loading: true })

    expect(wrapper.classes()).toContain('loading')
  })

  it('block', () => {
    wrapper = createCmp({ block: true })

    expect(wrapper.classes()).toContain('btn-block')
  })

  it('button group default', () => {
    const wrapper = shallow(ButtonGroup)

    expect(wrapper.classes()).toContain('btn-group')
  })

  it('button group block', () => {
    const wrapper = shallow(ButtonGroup, {
      propsData: { block: true }
    })

    expect(wrapper.classes()).toContain('btn-group-block')
  })

  it('button group slot', () => {
    const wrapper = shallow(ButtonGroup, {
      slots: {
        default: ['<button></button>', '<button></button>']
      }
    })
    
    expect(wrapper.findAll('button').length).toEqual(2)
  })
})