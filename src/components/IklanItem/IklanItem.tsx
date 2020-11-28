import React from "react";
import { Card, Row, Col, Divider, Button, Popconfirm } from "antd";
import "./IklanItem.css";
import {
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Iklan } from "../../types";

type IklanProps = {
  item: Iklan;
  deleteItem: (id: string) => void;
};

const convertDate = (dates: Date) => {
  const date = new Date(dates); // had to remove the colon (:) after the T in order to make it work
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const myFormattedDate =
    day +
    "-" +
    (monthIndex + 1) +
    "-" +
    year +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;
  return myFormattedDate;
};

const text = "Are you sure to delete this iklan?";

const IklanItem = (props: IklanProps) => {
  const item = props.item;
  return (
    <div>
      <Card
        hoverable
        className="styleCard"
        cover={<img src={item.image} alt="" style={{ width: "100%" }} />}
      >
        <div style={{ textAlign: "left" }}>
          <h3 style={{ fontWeight: "bold" }}>{item.product_name}</h3>
          <h2>Rp. {item.price}</h2>
          <h5>Category: {item.category.name}</h5>
          <div
            style={{
              margin: "5px 0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
              onConfirm={() => props.deleteItem(item._id)}
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
          </div>
          <Divider style={{ margin: "10px 0" }} />
          <small style={{ color: "#999" }}>
            <CalendarOutlined style={{ marginRight: "5px" }} />
            {convertDate(item.createdAt)}
          </small>
        </div>
      </Card>
    </div>
  );
};

export default IklanItem;
