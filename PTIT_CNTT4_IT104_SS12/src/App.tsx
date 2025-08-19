import React from 'react'
import ListCourse from './components/PTIT_CNTT4_IT104_SS12_BT1/ListCourse'
import Calculation from './components/PTIT_CNTT4_IT104_SS12_BT2/Calculation'
import UserInfo from './components/PTIT_CNTT4_IT104_SS12_BT3/UserInfo'
import ColorBox from './components/PTIT_CNTT4_IT104_SS12_BT4/ColorBox'
import FormatName from './components/PTIT_CNTT4_IT104_SS12_BT5/FormatName'
import AdminIndex from './components/PTIT_CNTT4_IT104_SS12_BT6/AdminIndex'
import UserLayout from './components/PTIT_CNTT4_IT104_SS12_BT7/UserLayout'
import UserTable from './components/PTIT_CNTT4_IT104_SS12_BT8/UserTable'
import TodoListIndex from './components/PTIT_CNTT4_IT104_SS12_BT9/TodoListIndex'


export default function App() {
  return (
    <>
      {/* bt1 */}
      <ListCourse />
      
      {/* bt2 */}
      <Calculation />
      
      {/* bt3 */}
      <UserInfo />
      
      {/* bt4 */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <ColorBox color="red" />
        <ColorBox color="blue" />
        <ColorBox color="green" />
      </div>
      {/* bt5 */}
      <FormatName/>
      {/* bt6 */}
      <AdminIndex/>
      {/* bt7 */}
      <UserLayout/>
      {/*bt8*/}
      <UserTable/>
      {/* bt9 */}
      <TodoListIndex/>
    </>
  )
}
