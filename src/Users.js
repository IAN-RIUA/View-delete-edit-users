import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Button } from "antd";
import { useNavigate } from "react-router-dom";

function Users() {
  const navigate = useNavigate();
  ///delete user

  const deleteHandler = (record) =>{
     axios.delete("http://localhost:8000/Users/"+record.id);
     window. location. reload();
  }; 


  const [dataSource, setDataSource] = useState([]);
  const columns = [
   
    {
        title: "id",
        dataIndex: "id",
        key: "id",
      },
  
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
      },
  
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
      },
      
      {
        title: "FirstName",
        dataIndex: "firstname",
        key: "firstName",
      },
      {
        title: "Surname",
        dataIndex: "surname",
        key: "surname",
      },
      {
        title: "Secondname",
        dataIndex: "secondname",
        key: "secondname",
      },
      {
        title: "Figures",
        dataIndex: "figures",
        key: "figures",
      },
      {
        title: "Department",
        dataIndex: "department",
        key: "department",
      },
      {
        title: 'Delete',
        key: 'key',
        dataIndex: 'key',
        render: (text, record) => (
         <button onClick={()=> deleteHandler(record)}>
           {"Delete"}
         </button>
        )
    },
    {
        title: 'Edit',
        key: 'key',
        dataIndex: 'key',
        render: (text, record) => (
         <button onClick={()=>editContact(record)}>
           {"Edit"}
         </button>
        )
    }
   
  ];

  useEffect(() => {
    axios.get("http://localhost:8000/users").then((e) => {
        console.log(e)
      setDataSource(e.data);
    });
  }, []);

  const goToToDoScreen = () => {
    navigate("/add-todo");
  };

  return (
    <div>
      <Button onClick={() => goToToDoScreen()}>Add ToDO</Button>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
}

export default Users;

