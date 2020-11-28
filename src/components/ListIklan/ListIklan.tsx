import React from "react";
import IklanItem from "../IklanItem/IklanItem";
import { Iklan } from "../../types";
import { message } from "antd";

type ListIklanProps = {
  iklans: Iklan[];
  setIklans: (iklan: Iklan[]) => void;
};

const ListIklan = (props: ListIklanProps) => {
  const deleteItem = (id: string) => {
    const newItems = props.iklans.filter((item) => item._id !== id);
    props.setIklans(newItems);
    message.info(`${id} deleted successfully!`);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
    >
      {props.iklans.map((item) => (
        <IklanItem
          key={item._id}
          item={item}
          deleteItem={() => deleteItem(item._id)}
        />
      ))}
    </div>
  );
};

export default ListIklan;
