import React, { useRef } from "react";

// import Img1 from "../../assets/images/0004.jpg";
// import Img2 from "../../assets/images/0003.jpg";
// import Img3 from "../../assets/images/0001.jpg";

import "./OurServices.scss";

const OurServices = () => {
  const tableHeader = useRef([
    { title: "Услуга", id: 1 },
    { title: "Стоимость", id: 2 },
    { title: "Дополнительные \n условия", id: 3 }
  ]);

  const services = useRef([
    {
      title: "Палатка",
      price: "Входит в базовую",
      extraTerms: "3х-местная"
    },
    {
      title: "Спальник",
      price: "Входит в базовую",
      extraTerms: "-"
    },
    {
      title: "Каремат",
      price: "Входит в базовую",
      extraTerms: "-"
    },
    {
      title: "Посуда",
      price: "Входит в базовую",
      extraTerms: "-"
    },
    {
      title: "Стульчик раскладной",
      price: "Входит в базовую",
      extraTerms: "-"
    },
    {
      title: "Стол",
      price: "Входит в базовую",
      extraTerms: "-"
    },
    {
      title: "Вода питьевая",
      price: "Входит в базовую",
      extraTerms: "-"
    },
    {
      title: "Воллейбол",
      price: "Входит в базовую",
      extraTerms: "-"
    },
    {
      title: "Бадминтон",
      price: "Входит в базовую",
      extraTerms: "-"
    },
    {
      title: "Фрисби",
      price: "Входит в базовую",
      extraTerms: "-"
    },
    {
      title: "Дрова",
      price: "Входит в базовую",
      extraTerms: "1 мешок"
    },
    {
      title: "ПВХ Лодка BARK-220",
      price: "300грн/день",
      extraTerms: "-"
    },
    {
      title: "ПВХ Лодка BARK-330",
      price: "450грн/день",
      extraTerms: "-"
    },
    {
      title: "Катание на моторной лодке",
      price: "от 1200грн/час",
      extraTerms: "-"
    },
    {
      title: "Катание на катере",
      price: "от 1500грн/час",
      extraTerms: "-"
    },
    {
      title: "Катание на вейкборде",
      price: "от 1500грн/час",
      extraTerms: "-"
    },
    {
      title: "Катание на плюшке",
      price: "от 1500грн/час",
      extraTerms: "-"
    },
    {
      title: "Катание на водных лыжах",
      price: "от 1500грн/час",
      extraTerms: "-"
    },
    {
      title: "Прокат SUP-борда",
      price: "500грн/день",
      extraTerms: "-"
    }
  ]);

  return (
    <main className="our-services">
      {/* <div className="our-services__bg">
        <div className="our-services__bg-div our-services__bg-div_top">
          <img src={Img1} alt="img" className="our-services__bg-img" />
        </div>
        <div className="our-services__bg-div our-services__bg-div_center">
          <img src={Img2} alt="img" className="our-services-bg-img" />
        </div>
        <div className="our-services__bg-div our-services__bg-div_bottom">
          <img src={Img3} alt="img" className="our-services-bg-img" />
        </div>
      </div> */}
      <section className="our-services__about-us">
        <h4 className="our-services__about-us-heading">О нас</h4>
        <p className="our-services__about-us-paragraph">
          Мы - группа энтузиастов, которые любят проводить активный летний отдых на природе. Кроме
          того, что мы сами любим отдыхать, мы еще и умеем организовать его для других. Поэтому
          приезжайте к нам, насладитесь природой и огромным разнообразием развлечений, которые у нас
          есть.
        </p>
      </section>
      <section className="our-services__advantage">
        <h4 className="our-services__advantage-heading">Почему мы?</h4>
        <p className="our-services__advantage-paragraph">
          С нами вам не надо думать о наличии снаряжения. Вам не надо ничего брать с собой. Все
          необходимое для первоклассного кемпинга у нас есть. Мы занимаемся не просто прокатом, а и
          обеспечением быта. Вам не надо будет строить палаточный лагерь, искать дрова и прочие
          мелочи. Это мы сделаем за вас.
        </p>
      </section>
      <section className="our-services__list">
        <h4 className="our-services__list-heading">Наши услуги</h4>
        <table className="our-services__table">
          <thead>
            <tr>
              {tableHeader.current.map((item) => (
                <th key={item.id}>
                  <div>{item.title}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {services.current.map((service) => (
              <tr key={service.title}>
                {tableHeader.current.map((item) => (
                  <td key={item.id}>
                    <div>
                      {item.id === 1
                        ? service.title
                        : item.id === 2
                        ? service.price
                        : service.extraTerms}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {/* <div>hello</div> */}
    </main>
  );
};

export default OurServices;
