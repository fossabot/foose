import Table from './src/Table.vue'
import TableColumn from './src/TableColumn.js'

export default {
  Table,
  TableColumn,
  install(Vue) {
    Vue.component(Table.name, Table)
    Vue.component(TableColumn.name, TableColumn)
  }
}

export { Table, TableColumn }
