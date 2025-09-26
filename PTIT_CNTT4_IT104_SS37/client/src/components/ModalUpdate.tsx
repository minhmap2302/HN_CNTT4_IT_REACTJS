import { useState } from 'react';
import {  Input, Modal } from 'antd';
import type { student } from '../types/interface';
import { EditOutlined } from '@ant-design/icons';
type prop={
   id:number,
   namestudent:string,
   grade:string,
   age:number,
   handleupdate:(newstudent:student)=>void
}

export default function ModalUpdate({id,namestudent,grade,age,handleupdate}:prop) {
     const [isModalOpen, setIsModalOpen] = useState(false);
     const [input,setInput]=useState<student>({id:id,name:namestudent,age:age,grade:grade});
     const [error,setError]=useState<boolean>(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if(!input.age || !input.grade || !input.name){
        setError(true);
        return
    }
    handleupdate(input);
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
      <EditOutlined key="edit" onClick={showModal}/>
       
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
