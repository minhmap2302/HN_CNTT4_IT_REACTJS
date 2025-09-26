import { useState } from 'react';
import { Button, Input, Modal } from 'antd';
import type { student } from '../types/interface';
type prop={
    onadd:(value:student)=>void
}

export default function ModalAdd({onadd}:prop) {
     const [isModalOpen, setIsModalOpen] = useState(false);
     const [input,setInput]=useState<student>({id:Math.ceil(Math.random()*1000),name:"",age:0,grade:""});
     const [error,setError]=useState<boolean>(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if(!input.age || !input.grade || !input.name){
        setError(true);
        return
    }
    onadd(input);
    setInput({id:Math.ceil(Math.random()*1000),name:"",age:0,grade:""})
    setError(false);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handlechange=(e:React.ChangeEvent<HTMLInputElement>)=>{
     const {name,value}=e.target
     setError(false);
     setInput({...input,[name]:value})
  }
  return (
    <>
      <Button type="primary" onClick={showModal}>
        ADD STUDENT
      </Button>
      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
       <div className='mb-3'>
        <Input type="text" placeholder='User Name' value={input.name} name='name' onChange={handlechange}  style={{borderColor:error? "red":""}}/>
        {error? <div className='text-red-500'>Name Khong dc bo trong</div>:<></>}
       </div>
       <div className='mb-3'>
        <Input type="text" placeholder='Age' value={input.age == 0 ? "":input.age} name="age" onChange={handlechange} style={{borderColor:error? "red":""}}/>
        {error ? <div className='text-red-500'>Name Khong dc bo trong</div>:<></>}
        {input.age<0 ? <div className='text-red-500'>tuoi khong dc am</div>:<></>}
       </div>
       <div>
        <Input type="text" placeholder='Grade' value={input.grade} name='grade' onChange={handlechange} style={{borderColor:error? "red":""}}/>
        {error ? <div className='text-red-500'>grade Khong dc bo trong</div>:<></>}
       </div>
      </Modal>
    </>
  );
}
