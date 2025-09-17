import { Modal, Form, Input, Button } from "antd";
import { useState, useEffect } from "react";
import type { posts } from "./Modaladd";
import type { Article } from "../types/interface";

type prop = {
  id: number | null;
  data: Article[];
  repair: (id: number, value: posts) => void;
};

export default function ModalRepair({ id, data, repair }: prop) {
  const [open, setOpen] = useState(false);

  const getdate = (): string => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const [input, setInput] = useState<posts>({
    title: "",
    image: "",
    note: "",
    date: getdate(),
    status: false,
  });

  // ✅ chỉ chạy khi id hoặc data thay đổi
  useEffect(() => {
    if (id !== null) {
      const postrepair = data.find((e) => e.id === id);
      if (postrepair) {
        setInput({
          title: postrepair.title,
          image: postrepair.image,
          note: postrepair.note,
          date: postrepair.date,
          status: postrepair.status,
        });
      }
    }
  }, [id, data]);

  const change = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (id !== null) {
      repair(id, input);
      setOpen(false); // đóng modal sau khi sửa
    }
  };

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        sửa
      </Button>

      <Modal
        title="Cập nhật bài viết"
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

          <div className="text-end mt-3 flex gap-2 justify-end">
            <Button
              onClick={() =>
                setInput({ title: "", image: "", note: "", date: getdate(), status: false })
              }
            >
              Làm mới
            </Button>
            <Button type="primary" onClick={handleSubmit}>
              Cập nhật
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
}
