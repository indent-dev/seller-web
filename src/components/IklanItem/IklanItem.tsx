import React from "react";
import { Card, Row, Col, Divider, Button } from "antd";
import "./IklanItem.css";
import {
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

const IklanItem = (props: any) => {
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
                <h2>
                  <span style={{ color: "#999" }}>Rp. </span> {props.price}
                </h2>
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
                <Button
                  type="primary"
                  danger
                  shape="round"
                  className="btn"
                  icon={<DeleteOutlined />}
                >
                  Hapus
                </Button>
              </Col>
            </Row>
            <Row>
              <Divider style={{ margin: "10px 0" }} />
              <h5>
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
