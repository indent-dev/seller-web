import React from "react";
import { Avatar, Button, Input, Row } from "antd";
import { Layout } from "antd";

import { PlusOutlined, UserOutlined } from "@ant-design/icons";
import ListIklan from "../../components/ListIklan/ListIklan";
import AddIklan from "../../components/AddIklan/AddIklan";

const flexStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const { Header, Footer, Content } = Layout;
const { Search } = Input;

const Dashboard = () => {
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);

  const [listIklan, setListIklan] = React.useState([
    {
      id: 1,
      image: "https://placeimg.com/640/480/tech",
      title: "Lenovo Legino 5",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae laboriosam harum ipsum. Deserunt quo expedita odio illum similique voluptatibus hic.",
      date: "Sunday, 25 Oktober 2020",
      price: 14500000,
    },
  ]);

  return (
    <Layout>
      <Header style={flexStyle}>
        <h1 style={{ margin: "0", color: "#fff", fontWeight: "bold" }}>
          Seller Web
        </h1>
        <div style={flexStyle}>
          <h3 style={{ margin: "0 10px", color: "#fff" }}>Username</h3>
          <Avatar size="large" icon={<UserOutlined />} />
        </div>
      </Header>
      <Content
        style={{
          padding: "50px",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <Row
          gutter={{ xs: 8, sm: 8, md: 24, lg: 24 }}
          style={{
            marginBottom: "50px",
            padding: "0 50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Search
            placeholder="input search text"
            enterButton
            style={{ width: "400px" }}
          />

          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setIsModalVisible(true)}
          >
            Add Iklan
          </Button>

          <AddIklan
            modalVisible={isModalVisible}
            toggleModal={setIsModalVisible}
            addIklan={setListIklan}
            iklans={listIklan}
          />
        </Row>

        <ListIklan iklans={listIklan} />
      </Content>
      <Footer style={{ textAlign: "center" }}>Powered by Indent Team</Footer>
    </Layout>
  );
};

export default Dashboard;
