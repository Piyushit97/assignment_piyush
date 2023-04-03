import React, { useEffect, useState } from "react";
import "../styles/LoginPage.css";
import axios from "axios";
import { Table, Input } from "antd";
import { useNavigate, Link } from "react-router-dom";

function DataTable() {
  const [data, setData] = useState([]);
  const [filterTable, setFilterTable] = useState(null);

  const onSearch = (value) => {
    const filterData = data.filter((o) =>
      Object.keys(o).some((k) =>
        String(o[k]).toLowerCase().includes(value.toString().toLowerCase())
      )
    );
    setFilterTable(filterData);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Occupation",
      dataIndex: "occupation",
      key: "occupation",
    },
  ];

  const showTableData = () => {
    axios.get(`https://coralmango.com/api/react-test`).then(
      (response) => {
        setData(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  useEffect(() => {
    showTableData();
  }, []);

  return (
    <div className="mainTable">
      <div className="subTable">
        <Input.Search
          style={{ border: "3px solid red", margin: "0 0 10px 0" }}
          placeholder="Search by..."
          enterButton
          onSearch={onSearch}
        />
        <Table
          dataSource={filterTable == null ? data : filterTable}
          columns={columns}
          size="middle"
        />
      </div>
    </div>
  );
}

export default DataTable;
