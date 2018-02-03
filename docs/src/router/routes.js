import Index from '../views/Index.vue'
import Button from '../../../packages/button/docs/index.md'
import Label from '../../../packages/label/docs/index.md'

export default [
  {
    path: '/',
    component: Index,
    children: [
      {
        name: 'button',
        path: 'button',
        meta: {
          group: 'elements',
          title: 'Button'
        },
        component: Button
      },
      {
        name: 'label',
        path: 'label',
        meta: {
          group: 'elements',
          title: 'Label'
        },
        component: Label
      }
    ]
  }
]