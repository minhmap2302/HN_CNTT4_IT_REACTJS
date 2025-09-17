import  { useState } from "react";
import { Button, Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";
type prop={
    togle:()=>void
    lock:boolean
}
export default function Modalwarn({togle,lock}:prop){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [islock,setIslock]=useState<boolean>(lock);
  const showModal = () => setIsModalOpen(true);
  const handleOk = () => {togle();setIsModalOpen(false);setIslock(!islock)};
  const handleCancel = () => setIsModalOpen(false);

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        style={{
          backgroundColor: "#facc15", 
          color: "#fff",
          padding: "6px 12px",
          borderRadius: "6px",
        }}
      >
        {islock?"lock":"unlock"}
      </Button>

      <Modal
        title="⚠️ Cảnh báo"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closeIcon={<CloseOutlined aria-label="Custom Close Button" />}
        okText="Đồng ý"
        cancelText="Hủy"
        style={{
          top: 100, 
        }}
        bodyStyle={{
          backgroundColor: "#fef3c7", 
          borderRadius: "12px",
          fontSize: "16px",
        }}
        okButtonProps={{
          style: {
            backgroundColor: "#f59e0b",
            borderColor: "#f59e0b",
            borderRadius: "6px",
          },
        }}
        cancelButtonProps={{
          style: {
            borderRadius: "6px",
          },
        }}
      >
        <p>Bạn có chắc chắn muốn chặn cái này không?</p>
      </Modal>
    </>
  );
}
