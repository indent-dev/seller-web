import React from "react";

import { Layout, Input, Row, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import ListIklan from "./components/ListIklan/ListIklan";
import AddIklan from "./components/AddIklan/AddIklan";

const flexStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const { Search } = Input;
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div>
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
            <AddIklan />
          </Row>

          <ListIklan />
        </Content>
        <Footer style={{ textAlign: "center" }}>Powered by Indent Team</Footer>
      </Layout>
    </div>
  );
}

export default App;
