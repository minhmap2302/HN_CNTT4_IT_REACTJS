// import React from 'react'

import { Button, Form, Input } from "antd";

export default function Login() {
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
      >
        <Form.Item
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Login</h1>
        </Form.Item>

        <Form.Item
          label="Your Email"
          name="youremail"
          rules={[{ required: false, message: "Please input your username!" }]}
        >
          <Input style={{ width: "250px" }} placeholder="name@gmail.com" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: false, message: "Please input your password!" }]}
        >
          <Input.Password style={{ width: "250px" }} placeholder="........." />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
