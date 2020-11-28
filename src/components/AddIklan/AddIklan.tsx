import React from "react";
import { Modal, InputNumber } from "antd";
import { Form, Input, Button } from "antd";

import "./AddIklan.css";

type FormProps = {
  modalVisible: boolean;
  iklans: any[];
  toggleModal: (isVisible: boolean) => void;
  addIklan: (iklans: any[]) => void;
};

const AddIklan = (props: FormProps) => {
  const handleCancel = () => {
    props.toggleModal(false);
  };

  const onFinish = (values: any) => {
    props.addIklan([...props.iklans, values]);
    console.log("Success:", values);

    props.toggleModal(false);
  };

  return (
    <div>
      <Modal
        title="Add Your Advertisement"
        visible={props.modalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Product Name"
            name="product_name"
            rules={[
              { required: true, message: "Please input your Product Name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input your Price!" }]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit"> Submit </Button>
          </Form.Item>
        </Form>

        {/* <label>Brand</label>
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
        <br /> */}
      </Modal>
    </div>
  );
};

export default AddIklan;
