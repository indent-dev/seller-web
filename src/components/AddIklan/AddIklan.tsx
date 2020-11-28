import React from "react";
import { Modal, InputNumber } from "antd";
import { Form, Input } from "antd";
import { Iklan } from "../../types";
import "./AddIklan.css";

type FormProps = {
  modalVisible: boolean;
  iklans: Iklan[];
  toggleModal: (isVisible: boolean) => void;
  addIklan: (iklans: Iklan[]) => void;
};

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 6 },
};
const tailLayout = {
  wrapperCol: { span: 18 },
};

const AddIklan = (props: FormProps) => {
  const [form] = Form.useForm();

  const handleCancel = () => {
    props.toggleModal(false);
  };

  const onFinish = (values: any) => {
    const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const uniqid = randLetter + Date.now();
    const datetime = new Date();
    const newValues: Iklan = {
      isDeleted: true,
      _id: uniqid,
      product_name: values.product_name,
      image: values.image,
      price: values.price,
      createdAt: "datetime",
      updatedAt: "datetime",
      category: {
        _id: uniqid,
        name: "ATK",
        createdAt: "datetime",
        updatedAt: "datetime",
        __v: 0,
      },
      __v: 0,
    };
    props.addIklan([...props.iklans, newValues]);
    console.log("Success:", newValues);
    props.toggleModal(false);
  };

  return (
    <div>
      <Modal
        title="Add Your Advertisement"
        visible={props.modalVisible}
        onCancel={handleCancel}
        okText="Submit"
        cancelText="Cancel"
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              onFinish(values);
              form.resetFields();
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        <Form {...layout} form={form} name="basic" id="formAddIklan">
          <Form.Item
            {...tailLayout}
            label="Product Name"
            labelAlign="left"
            name="product_name"
            rules={[{ required: true, message: "Please input prodcut name!" }]}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            {...tailLayout}
            label="Price"
            labelAlign="left"
            name="price"
            rules={[{ required: true, message: "Please input product price!" }]}
          >
            <InputNumber size="small" style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            {...tailLayout}
            label="Image URL"
            labelAlign="left"
            name="image"
            rules={[{ required: true, message: "Please input image URL!" }]}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddIklan;
