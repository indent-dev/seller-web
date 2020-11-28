import React from "react";
import { Card, Row, Col, Divider, Button, Popconfirm } from "antd";
import "./IklanItem.css";
import {
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

interface IItem {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  date: string;
}

type props = {
  item: IItem;
  deleteItem: Function;
};

const text = "Are you sure to delete this iklan?";

const IklanItem = (props: props) => {
  const item = props.item;
  return (
    <div>
      <Card className="styleCard">
        <Row gutter={{ xs: 8, sm: 8, md: 24, lg: 32 }}>
          <Col sm={24} md={3}>
            <img style={{ width: "100%" }} alt={item.image} src={item.image} />
          </Col>
          <Col sm={24} md={21} style={{ textAlign: "left" }}>
            <Row gutter={{ sm: 8, md: 24 }}>
              <Col sm={24} md={6}>
                <h3>{item.title}</h3>
                <h2>Rp. {item.price}</h2>
              </Col>
              <Col sm={24} md={11}>
                <p>{item.description}</p>
              </Col>
              <Col
                sm={24}
                md={6}
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
                <Popconfirm
                  placement="top"
                  title={text}
                  onConfirm={() => props.deleteItem(item.id)}
                  okText="Yes"
                  cancelText="No"
                >
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
                {item.date}
              </h5>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default IklanItem;
