import React from "react";
import { Avatar, Button, Input, Row } from "antd";
import { Layout } from "antd";

import { PlusOutlined, UserOutlined } from "@ant-design/icons";
import ListIklan from "../../components/ListIklan/ListIklan";
import AddIklan from "../../components/AddIklan/AddIklan";
import { Iklan } from "../../types";
import { init } from "../../components/ListIklan/Init";

const flexStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const { Header, Footer, Content } = Layout;
const { Search } = Input;

const Dashboard = () => {
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);

  const [listIklan, setListIklan] = React.useState<Iklan[]>(init);

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
          textAlign: "center",
          minHeight: "100vh",
        }}
      >
        <Row
          gutter={{ xs: 8, lg: 24 }}
          style={{
            marginBottom: "30px",
            padding: "0 50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Search
            placeholder="Search Product"
            enterButton
            style={{ width: "400px" }}
          />

          <AddIklan
            modalVisible={isModalVisible}
            toggleModal={setIsModalVisible}
            addIklan={setListIklan}
            iklans={listIklan}
          />

          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setIsModalVisible(true)}
          >
            Add Iklan
          </Button>
        </Row>

        <ListIklan iklans={listIklan} />
      </Content>
      <Footer
        style={{ textAlign: "center", color: "#fff", backgroundColor: "#000" }}
      >
        Powered by Indent Team
      </Footer>
    </Layout>
  );
};

export default Dashboard;
