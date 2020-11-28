import React from "react";
import { Modal, InputNumber, Select } from "antd";
import { Form, Input } from "antd";
import { Iklan } from "../../types";
import "./AddIklan.css";
import { categorys } from "../ListIklan/Init";

type FormProps = {
  modalVisible: boolean;
  iklans: Iklan[];
  toggleModal: (isVisible: boolean) => void;
  addIklan: (iklans: Iklan[]) => void;
};

const { Option } = Select;

const layout = {
  labelCol: { span: 9 },
  wrapperCol: { span: 9 },
};
const tailLayout = {
  wrapperCol: { span: 15 },
};

const AddIklan = (props: FormProps) => {
  const [form] = Form.useForm();

  const handleCancel = () => {
    props.toggleModal(false);
  };

  const onFinish = (values: any) => {
    const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const uniqid = randLetter + Date.now();
    const newValues = {
      isDeleted: true,
      _id: uniqid,
      product_name: values.product_name,
      image: values.image,
      price: values.price,
      createdAt: new Date(),
      updatedAt: new Date(),
      category: {
        _id: uniqid,
        name: values.cat_id,
        createdAt: new Date(),
        updatedAt: new Date(),
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
        title="Add new Iklan"
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
            label="Product Category"
            labelAlign="left"
            name="cat_id"
            rules={[
              { required: true, message: "Please input prodcut category!" },
            ]}
          >
            <Select>
              {categorys.map((cat) => (
                <Option value={cat.name}>{cat.name}</Option>
              ))}
            </Select>
          </Form.Item>
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
