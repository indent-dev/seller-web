import React from "react";
import { Card, Row, Col, Divider, Button, Popconfirm, message } from "antd";
import "./IklanItem.css";
import {
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

type props = {
  id: number,
  title: string,
  image: string,
  description: string,
  price: number,
  date: string
}

const text = 'Are you sure to delete this iklan?';

const deleteIklan = (title: string) => {
  message.info(`${title} deleted successfully!`);
}


const IklanItem = (props: props) => {
  return (
    <div>
      <Card className="styleCard">
        <Row gutter={{ xs: 8, sm: 8, md: 24, lg: 32 }}>
          <Col xs={24} sm={24} md={3} lg={3}>
            <img
              style={{ width: "100%" }}
              alt={props.description}
              src={props.image}
            />
          </Col>
          <Col xs={24} sm={24} md={21} lg={21} style={{ textAlign: "left" }}>
            <Row gutter={{ xs: 8, sm: 8, md: 24, lg: 32 }}>
              <Col xs={24} sm={24} md={6} lg={6}>
                <h3>{props.title}</h3>
                <h2>Rp. {props.price}</h2>
              </Col>
              <Col xs={24} sm={24} md={11} lg={11}>
                <p>{props.description}</p>
              </Col>
              <Col
                xs={24}
                sm={24}
                lg={6}
                style={{
                  textAlign: "right",
                  margin: "10px",
                }}
              >
                <Button
                  type="primary"
                  shape="round"
                  className="btn"
                  icon={<EditOutlined />}
                >
                  Edit
                </Button>
                <Popconfirm placement="top" title={text} onConfirm={() => deleteIklan(props.title)} okText="Yes" cancelText="No">
                  <Button
                    type="primary"
                    danger
                    shape="round"
                    className="btn"
                    icon={<DeleteOutlined />}
                  >
                  Delete
                  </Button>
                </Popconfirm>
              </Col>
            </Row>
            <Row>
              <Divider style={{ margin: "10px 0" }} />
              <h5 style={{ color: "#999" }}>
                <CalendarOutlined style={{ marginRight: "5px" }} />
                {props.date}
              </h5>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default IklanItem;
