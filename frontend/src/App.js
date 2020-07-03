import { Table, Row, Col } from 'antd';
import React, { useEffect, useState } from 'react';
import { listUser } from './service/user';
import { FormInsert } from './component/Form';

function App() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetchListUser();
  }, [])

  const fetchListUser = async () => {
    const listUsers = await listUser();
    const userData = listUsers.data.user.map((user, idx) => ({ ...user, key: idx }));
    setUser(userData);
  }


  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }
  ]

  return (
    <Row>
      <Col span={24}>
        <Table pagination={{ pageSize: 5 }} columns={columns} dataSource={users} />
      </Col>
      <FormInsert fetchListUser={fetchListUser} />
    </Row>
  );
}

export default App;
