import React, { Component } from 'react'
import Parent from './components/PTIT_CNTT4_IT104_SS13_BaiTap5/Parent'
import ListPost from './components/PTIT_CNTT4_IT104_SS13_BaiTap6/ListPost'
// import Applemeomeo from './components/PTIT_CNTT4_IT104_SS13_BaiTap7/applemeomeo'
import Todolist from './components/PTIT_CNTT4_IT104_SS13_BaiTap8/Todolist'
import UpdateState from './components/PTIT_CNTT4_IT104_SS13_BaiTap9/UpdateState'
import Input from './components/PTIT_CNTT4_IT104_SS13_BaiTap10/Input'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* bt5*/}
        <Parent/>
        {/*bt6 */}
        <ListPost/>
        {/*bt7 */}
        {/* <Applemeomeo/>  npm run dev */}
        {/*bt8 */}
        <Todolist/>
        {/** bt9
         * 
         */}
         <UpdateState/>
         {/* bt10 */}
         <Input/>
      </div>
    )
  }
}
