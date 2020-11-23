import React, { useState } from "react";
import { init } from "./Init";
import IklanItem from "../IklanItem/IklanItem";
import { message } from "antd";

interface IItem {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  date: string;
}

const ListIklan = () => {
  const [items, setItems] = useState<IItem[]>(init);

  const deleteItem = (id: number) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    message.info(`${id} deleted successfully!`);
  };

  return (
    <div>
      {items.map((item) => (
        <IklanItem
          key={item.id}
          item={item}
          deleteItem={() => deleteItem(item.id)}
        />
      ))}
    </div>
  );
};

export default ListIklan;
