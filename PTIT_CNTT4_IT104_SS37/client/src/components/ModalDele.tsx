import  { useState } from 'react';
import {  Modal } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
type prop={
    id:number,
    namestudent:string,
    handledele:(id:number)=>void
}
export default function ModalDele({namestudent,id,handledele}:prop) {
     const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    handledele(id)
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <><DeleteOutlined key="delete" onClick={showModal}>
        Open Modal
      </DeleteOutlined>
      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Ban co muon xoa sinh vien {namestudent} nay khong</p>
      </Modal>
    </>
  )
}
