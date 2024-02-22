import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";


function ToDo(props) {
  const navigate = useNavigate();
  const [form] = Form.useForm();
    const location=useLocation();
  const[data, setData]=useState(location.state);
  console.log(data);


  const handleViewAllPosts = () => {
    navigate("/Users", {});
  };

  const clearFields = () => {
    form.resetFields();
  };



  const onFinish = (value:any) => {
    console.log[value.data];

    axios
      .post("http://localhost:8000/Users", values, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then(function (response) {
        alert("Successfully added");
        clearFields();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <Form
        name="wrap"
        labelCol={{
          flex: "110px",
        }}
        labelAlign="left"
        labelWrap
        wrapperCol={{
          flex: 1,
        }}
        colon={false}
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="ID"
          name="id"
          initialValue={data.id}
          
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Title"
          name="title"
          initialValue={data.title}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Status"
          name="status"
          initialValue={data.status}
          rules={[
            {
              required: true,
            },
          ]}
        >
        
         <Input />
        </Form.Item>

        <Form.Item
          label="FirstName"
          name="firstname"
          initialValue={data.firstname}
          rules={[
            {
              required: true,
            },
          ]}
        >
     <Input />
        </Form.Item>

        <Form.Item
          label="Surname"
          name="surname"
          initialValue={data.surname}
          rules={[
            {
              required: true,
            },
          ]}
        >
  <Input />
        </Form.Item>

        <Form.Item
          label="SecondName"
          name="secondname"
          initialValue={data.secondname}
          rules={[
            {
              required: true,
            },
          ]}
        >
       
            <Input />
        </Form.Item>

        <Form.Item
          label="Salary"
          name="figures"
          initialValue={data.figures}
          rules={[
            {
              required: true,
            },
          ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
          label="Department"
          name="department"
          initialValue={data.department}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label=" ">
          <Button type="primary" htmlType="addcontact">
            AddContact
          </Button>
          

        </Form.Item>
        <Form.Item label=" ">
          <Button onClick={handleViewAllPosts}>
            ViewAllContacts
          </Button>
          </Form.Item>

      </Form>
    </div>
  );
}

export default ToDo;
