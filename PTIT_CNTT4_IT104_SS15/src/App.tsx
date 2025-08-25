import React, { Component } from 'react'
import Clock from './components/PTIT_CNTT4_IT104_SS15_BT7/Clock'
import Counter from './components/PTIT_CNTT4_IT104_SS15_BT8/Counter'
import Todolist from './components/PTIT_CNTT4_IT104_SS15_BT9/Todolist'
import StudentManagement from './components/PTIT_CNTT4_IT104_SS15_BT10/StudentManagement'

export default class App extends Component {
  render() {
    return (
      <div>
        <Clock/>
        <Counter/>
        <Todolist/>
        <StudentManagement/>

      </div>
    )
  }
}
