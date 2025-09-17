import { Modal, Form, Input, Button } from "antd";
import { useState } from "react";
export type posts = {
  title: string;
  image: string;
  date: string;
  note: string;
  status: boolean;
};
type prop = {
  addvalue: (e: posts) => void;
};
export default function Modaladd({ addvalue }: prop) {
  const [open, setOpen] = useState(false);
  const getdate = (): string => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };
  const [input, setInput] = useState<posts>({
    title: "",
    image: "",
    note: "",
    date: getdate(),
    status: false,
  });
  const change = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        + Thêm bài viết
      </Button>

      <Modal
        title="Thêm mới bài viết"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <Form layout="vertical">
          <Form.Item label="Tên bài viết">
            <Input
              placeholder="Nhập tên bài viết"
              onChange={change}
              name="title"
              value={input.title}
            />
          </Form.Item>

          <Form.Item label="Hình ảnh">
            <Input
              placeholder="Nhập link hình ảnh"
              onChange={change}
              name="image"
              value={input.image}
            />
          </Form.Item>

          <Form.Item label="Nội dung">
            <Input.TextArea
              rows={6}
              placeholder="Nhập nội dung"
              name="note"
              value={input.note}
              onChange={change}
            />
          </Form.Item>
          <div className="text-end mt-3">
            <Button key="reset">Làm mới</Button>
            <Button
              key="submit"
              type="primary"
              onClick={() => {
                addvalue(input);
                setInput({
                  title: "",
                  image: "",
                  note: "",
                  date: getdate(),
                  status: false,
                });setOpen(false);
              }}
            >
              Xuất bản
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
}
