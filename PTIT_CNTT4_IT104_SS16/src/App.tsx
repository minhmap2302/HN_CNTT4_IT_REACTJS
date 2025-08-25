import { Component } from 'react'
import SubjectList from './compoments/PTIT_CNTT4_IT104_SS16_BT1/SubjectList'
import LoginStatus from './compoments/PTIT_CNTT4_IT104_SS16_BT2/LoginStatus'
import Colorback from './compoments/PTIT_CNTT4_IT104_SS16_BT3/Colorback'
import ClickCounter from './compoments/PTIT_CNTT4_IT104_SS16_BT4/ClickCounter'
import UserForm from './compoments/PTIT_CNTT4_IT104_SS16_BT5/UserForm'
import ThemeSwitcher from './compoments/PTIT_CNTT4_IT104_SS16_BT6/ThemeSwitcher'
import Shopping from './compoments/PTIT_CNTT4_IT104_SS16_BT7/Shopping'
import Shopping2 from './compoments/PTIT_CNTT4_IT104_SS16_BT8/Shopping2'

export default class App extends Component {
  render() {
    return (
      <div>
        bai1
        <SubjectList/> <br />
        <hr />
        <br />
        bai2
        <LoginStatus/><br />
        <hr />
        <br />
        bai3
        <Colorback/>
      <br /><hr /><br />
        bai4
        <ClickCounter/>
        <br />
        <hr />
        <br />
        bai5
        <UserForm/>
        <br /><hr /><br />
        bai6
        <ThemeSwitcher/>
        <br /><hr /><br />
        bai7
        <Shopping/>
        <br /><hr /><br />
        bai8
        <Shopping2/>
      </div>
    )
  }
}
