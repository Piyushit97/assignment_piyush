import React, { useEffect, useState } from "react";
import "../styles/LoginPage.css";
// import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Form, Input, Button } from "antd";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    // e.preventDefault();
    try {
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
          // expiresInMins: 60, // optional
        }),
      }).then((res) => {
        console.log("res", res);
        res.json();
      });
    } catch (error) {
      console.log(error, "err");
    }
  };

  return (
    <div>
      <div className="maindiv">
        <div
          style={{
            border: "2px solid black",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ textAlign: "center" }}>Login</div>

            <Form
              form={form}
              onFinish={handleSubmit}
              initialValues={{
                email: "demo@coralmango.com",
                password: "demo123",
              }}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input placeholder="Password" type="password" />
              </Form.Item>
              <Button type="primary" htmlType="submit">
                <Link to="/table">Login</Link>
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
