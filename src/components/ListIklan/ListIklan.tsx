import React from "react";
import IklanItem from "../IklanItem/IklanItem";

const ListIklan = () => {
  return (
    <div>
      <IklanItem
        image={"https://placeimg.com/640/480/tech"}
        title="Lenovo Legino 5"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae laboriosam harum ipsum. Deserunt quo expedita odio illum similique voluptatibus hic."
        date="Minggu, 25 Oktober 2020"
        price="14.500.000"
      />
      <IklanItem
        image={"https://placeimg.com/640/480/tech"}
        title="Lenovo Yoga Slim 7"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae laboriosam harum ipsum. Deserunt quo expedita odio illum similique voluptatibus hic."
        date="Senin, 13 Oktober 2020"
        price="14.999.000"
      />
      <IklanItem
        image={"https://placeimg.com/640/480/tech"}
        title="Lenovo Ideapad c340"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae laboriosam harum ipsum. Deserunt quo expedita odio illum similique voluptatibus hic."
        date="Rabu, 9 September 2020"
        price="10.999.000"
      />
      <IklanItem
        image={"https://placeimg.com/640/480/tech"}
        title="Lenovo Ideapad c340"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae laboriosam harum ipsum. Deserunt quo expedita odio illum similique voluptatibus hic."
        date="Rabu, 9 September 2020"
        price="10.999.000"
      />
      <IklanItem
        image={"https://placeimg.com/640/480/tech"}
        title="Lenovo Ideapad c340"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae laboriosam harum ipsum. Deserunt quo expedita odio illum similique voluptatibus hic."
        date="Rabu, 9 September 2020"
        price="10.999.000"
      />
    </div>
  );
};

export default ListIklan;
