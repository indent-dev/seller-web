import React from "react";
import IklanItem from "../IklanItem/IklanItem";

const ListIklan = () => {
  return (
    <div>
      <IklanItem
        id= {1}
        image ={"https://placeimg.com/640/480/tech"}
        title="Lenovo Legino 5"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae laboriosam harum ipsum. Deserunt quo expedita odio illum similique voluptatibus hic."
        date="Sunday, 25 Oktober 2020"
        price= {14500000}
        />
      <IklanItem
        id= {2}
        image={"https://placeimg.com/640/480/tech"}
        title="Lenovo Yoga Slim 7"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae laboriosam harum ipsum. Deserunt quo expedita odio illum similique voluptatibus hic."
        date="Friday, 13 Oktober 2020"
        price= {14999000}
        />
      <IklanItem
        id= {3}
        image={"https://placeimg.com/640/480/tech"}
        title="Lenovo Ideapad c340"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae laboriosam harum ipsum. Deserunt quo expedita odio illum similique voluptatibus hic."
        date="Saturday, 9 September 2020"
        price={10999000}
        />
      <IklanItem
        id= {4}
        image={"https://placeimg.com/640/480/tech"}
        title="Lenovo Ideapad c340"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae laboriosam harum ipsum. Deserunt quo expedita odio illum similique voluptatibus hic."
        date="Sunday, 9 September 2020"
        price={10999000}
        />
      <IklanItem
        id= {5}
        image={"https://placeimg.com/640/480/tech"}
        title="Lenovo Ideapad c340"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae laboriosam harum ipsum. Deserunt quo expedita odio illum similique voluptatibus hic."
        date="Monday, 9 September 2020"
        price={10999000}
      />
    </div>
  );
};

export default ListIklan;
