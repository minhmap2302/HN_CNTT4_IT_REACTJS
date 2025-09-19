import { useState } from "react";
import { Modal, Button } from "antd";
import { useDispatch } from "react-redux";
type prop={
    iddele:number
}
export default function Confirmdelete({iddele}:prop) {
  const [open, setOpen] = useState(false);
   const dispatch = useDispatch();
  return (
    <>
      <Button danger onClick={() => setOpen(true)}>
        Xóa
      </Button>

      <Modal
        title="Xác nhận"
        open={open}
        onCancel={() => setOpen(false)}
        footer={[
          <Button key="cancel" onClick={() => setOpen(false)}>
            Hủy
          </Button>,
          <Button key="delete" type="primary" danger onClick={() => {setOpen(false);dispatch({type:"DELETETASK",payload:{id:iddele}})}}>
            Xóa
          </Button>,
        ]}
      >
        <p>Bạn chắc chắn muốn xóa công việc này không?</p>
      </Modal>
    </>
  );
}
