import React, { Component } from 'react'
import Login from './components/PTIT_CNTT4_IT104_BT8/Login'
import Product from './components/PTIT_CNTT4_IT104_BT5/Product'
import GenderForm from './components/PTIT_CNTT4_IT104_BT6/GenderForm'
import RegisterForm from './components/PTIT_CNTT4_IT104_BT7/Regester'
import TodoApp from './components/PTIT_CNTT4_IT104_BT9/Todolist'
import Todolistx2 from './components/PTIT_CNTT4_IT104_BT10/Todolistx2'

export default class App extends Component {
  render() {
    return (
      <div>
        {/** bt5 */}
        <Product/>
        {/** bt6 */}
        <GenderForm></GenderForm>
        {/** bt7 */}
        <RegisterForm/>
        {/** bt8 */}
        <Login/>
        {/** bt9 */}
        <TodoApp/>
        {/* bt10 */}
        <Todolistx2/>
      </div>
    )
  }
}
