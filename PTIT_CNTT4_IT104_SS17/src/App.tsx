import { Component } from 'react'
import Name from './compoments/PTIT_CNTT4_TI104_SS17_BT1/Name'
import Product from './compoments/PTIT_CNTT4_TI104_SS17_BT2/Product'
import Color from './compoments/PTIT_CNTT4_TI104_SS17_BT3/Color'
import Toggle from './compoments/PTIT_CNTT4_TI104_SS17_BT4/Toggle'
import TodoApp from './compoments/PTIT_CNTT4_TI104_SS17_BT9/TodoApp'
import Form from './compoments/PTIT_CNTT4_TI104_SS17_BT5/Form'
import CounText from './compoments/PTIT_CNTT4_TI104_SS17_BT6/CounText'
import Select from './compoments/PTIT_CNTT4_TI104_SS17_BT7/Select'
import Checkbox from './compoments/PTIT_CNTT4_TI104_SS17_BT8/CheckBox'

export default class App extends Component {
  render() {
    return (
      <div>
        bt1
        <Name/>
        bt2
        <Product/>
        bt3
        <Color/>
        bt4
        <Toggle/>
        bt5
        <Form/>
        bt6
        <CounText/>
        bt7
        <Select/>
        bt8
        <Checkbox/>
        bt9
        <TodoApp/>

      </div>
    )
  }
}
