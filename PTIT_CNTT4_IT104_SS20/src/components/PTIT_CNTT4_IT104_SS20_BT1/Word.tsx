import React, { useState } from 'react'

export default function Word() {
    const [mess,setMess] = useState<string>("")
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const length = e.target.value.length;
        if (length>5){
            setMess("Do dai qua 5")
        } else {
            setMess("")
        }
    }
  return (
    <div>
      <h2>Kiem tra do dai</h2>
      <input type="text" onChange={handleChange} />
      {mess && <p>{mess}</p>}
    </div>
  )
}
