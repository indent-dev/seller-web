import React from "react";
import { Card, Row, Col, Divider, Button, Popconfirm } from "antd";
import "./IklanItem.css";
import {
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Iklan } from "../../types";

type props = {
  item: Iklan;
  deleteItem: (id: string) => void;
};

const text = "Are you sure to delete this iklan?";

const IklanItem = (props: props) => {
  const item = props.item;
  return (
    <div>
      <Card hoverable style={{ width: 300, textAlign: "center" }}>
        <div style={{ textAlign: "left" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png"
            alt=""
            style={{ width: "100%", marginBottom: "15px" }}
          />
          <h2 style={{ fontWeight: "bold" }}>{item.product_name}</h2>
          <h2>Rp. {item.price}</h2>
          <h4>Category: {item.category.name}</h4>
          <Divider />
          <h5 style={{ color: "#999" }}>
            <CalendarOutlined style={{ marginRight: "5px" }} />
            {item.createdAt}
          </h5>
        </div>
      </Card>
      ,
    </div>
  );
};

export default IklanItem;
