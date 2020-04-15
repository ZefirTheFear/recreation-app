import React, { useRef } from "react";
// import { useEffect} from "react";
// import { useDispatch } from "react-redux";

import { FaMapMarkerAlt, FaTelegramPlane, FaPhone } from "react-icons/fa";
// import { FaClock } from "react-icons/fa";

import Map from "../../components/Map/Map";

// import * as headerActions from "../../store/actions/headerActions";

import "./Contacts.scss";

const Contacts = (props) => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(headerActions.makeHeaderOpaque());
  // }, [dispatch]);

  // useEffect(() => {
  //   return () => {
  //     dispatch(headerActions.makeHeaderTransparent());
  //   };
  // }, [dispatch]);

  const contactItems = useRef([
    {
      title: "address",
      icon: <FaMapMarkerAlt />,
      desc: "Канев, Черкасская обл."
    },
    {
      title: "phone",
      icon: <FaPhone />,
      desc: "(055) 555-55-55"
    },
    {
      title: "telegram",
      icon: <FaTelegramPlane />,
      desc: "t.me/visyachka"
    }
    // {
    //   title: "schedule",
    //   icon: <FaClock />,
    //   desc: "Пн-Пт: 09-21, Сб-ВС: 10-20"
    // }
  ]);

  return (
    <main className="contacts">
      <Map />
      <div className="contacts__info">
        <div>
          {contactItems.current.map((item) => {
            // if (item.title === "telegram") {
            //   return (
            //     <div
            //       className="contacts__info-unit contacts__info-unit_telegram"
            //       key={item.title}
            //       onClick={clickUnit}
            //     >
            //       <span className="contacts__info-unit-icon">{item.icon}</span>
            //       <span key={item.title}>{item.desc}</span>
            //     </div>
            //   );
            // }
            return (
              <div className="contacts__info-unit" key={item.title}>
                <span className="contacts__info-unit-icon">{item.icon}</span>
                <span key={item.title}>{item.desc}</span>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Contacts;
