import React from "react";
import { Modal, Button, DatePicker } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./AddIklan.css";

const AddIklan = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
        Add Iklan
      </Button>
      <Modal
        title="Add Your Advertisement"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <label>Brand</label>
        <br />
        <input type="text" name="brand" placeholder="Brand" />
        <br /> <br />
        <label>Price</label>
        <br />
        <input type="text" name="price" placeholder="Rp. " />
        <br /> <br />
        <label>Date</label>
        <br />
        <DatePicker
          style={{
            width: "100%",
            border: "1px solid black",
            borderRadius: "5px",
          }}
        />
        <br /> <br />
        <label>Description</label>
        <br />
        <input type="" name="description" placeholder="Description" />
        <br />
      </Modal>
    </div>
  );
};

export default AddIklan;
