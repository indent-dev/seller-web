import React from "react";
import { Button, Layout } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import ListIklan from "./components/ListIklan/ListIklan";

function App() {
  const { Header, Footer, Content } = Layout;

  return (
    <div>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1 style={{ margin: 0, color: "#fff" }}>Seller Web</h1>
          <Button type="primary" shape="round" icon={<PlusOutlined />}>
            Add Iklan
          </Button>
        </Header>
        <Content
          style={{
            padding: "50px",
            backgroundColor: "#fff",
            textAlign: "center",
          }}
        >
          <ListIklan />
        </Content>
        <Footer style={{ textAlign: "center" }}>Powered by Indent Team</Footer>
      </Layout>
    </div>
  );
}

export default App;
