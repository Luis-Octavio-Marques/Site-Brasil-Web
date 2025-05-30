import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import flag1 from "../assets/img/Australia-flag.png";
import flag2 from "../assets/img/Brazil-flag.png";
import flag3 from "../assets/img/Egypt-flag.png";
import flag4 from "../assets/img/France-flag.png";
import flag5 from "../assets/img/Japan-flag.png";
import "../App.css";
import "../pages/CountryPage.module.css";

const Carousel = () => {
  const { t, i18n } = useTranslation();
  const carouselRef = useRef();
  const listRef = useRef();
  const [detail, setDetail] = useState(false);
  const [disableClick, setDisableClick] = useState(false);

  const items = [
    {
      image: flag5,
      title: t("countries.japan"),
      description: t("descriptions.japan"),
      link: "./japan",
    },
    {
      image: flag1,
      title: t("countries.australia"),
      description: t("descriptions.australia"),
      link: "./australia",
    },
    {
      image: flag2,
      title: t("countries.brazil"),
      description: t("descriptions.brazil"),
      link: "./brazil",
    },
    {
      image: flag3,
      title: t("countries.egypt"),
      description: t("descriptions.egypt"),
      link: "./egypt",
    },
    {
      image: flag4,
      title: t("countries.france"),
      description: t("descriptions.france"),
      link: "./france",
    },
  ];

  const languages = [
    { code: "pt", label: "PT" },
    { code: "en", label: "EN" },
    { code: "jp", label: "JP" },
    { code: "fr", label: "FR" },
    { code: "ar", label: "AR" },
  ];

  const handleSlider = (type) => {
    if (disableClick) return;
    setDisableClick(true);
    carouselRef.current.classList.remove("next", "prev");

    const itemsDom = listRef.current.children;
    if (type === "next") {
      listRef.current.appendChild(itemsDom[0]);
      carouselRef.current.classList.add("next");
    } else {
      listRef.current.prepend(itemsDom[itemsDom.length - 1]);
      carouselRef.current.classList.add("prev");
    }

    setTimeout(() => {
      setDisableClick(false);
    }, 1000);
  };

  const showDetail = () => {
    setDetail(true);
    carouselRef.current.classList.add("showDetail");
  };

  const hideDetail = () => {
    setDetail(false);
    carouselRef.current.classList.remove("showDetail");
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="list" ref={listRef}>
        {items.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="introduce">
              <div className="title">{t("carousel.chooseCountry")}</div>
              <h2 className="topic">{item.title}</h2>
              <div className="des">{item.description}</div>
              <a href={item.link}>
                <button className="seeMore" onClick={showDetail}>
                  {t("carousel.seeMore")} &#8599;
                </button>
              </a>
            </div>
            <div className="detail">
              <div className="title">{item.title}</div>
              <div className="des">{item.description}</div>
              <div className="checkout">
                <a href={item.link}>
                  <button>{t("carousel.accessPage")}</button>
                </a>
                <button onClick={hideDetail}>{t("carousel.back")}</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button
          id="prev"
          onClick={() => handleSlider("prev")}
          disabled={disableClick}
        >
          &lt;
        </button>
        <motion.div
          style={{
            margin: "15px",
            display: "flex",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          {languages.map((lang, index) => (
            <motion.button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
              style={{
                padding: "5px 10px",
                margin: "0 5px",
                backgroundColor:
                  i18n.language === lang.code ? "white" : "transparent",
                borderRadius: "10px",
                border: "2px solid white",
                cursor: i18n.language === lang.code ? "default" : "pointer",
                color: i18n.language === lang.code ? "black" : "white",
                fontWeight: 700,
                opacity: i18n.language === lang.code ? 1 : 0.7,
                transition: "background-color 0.3s, color 0.3s, opacity 0.3s",
              }}
            >
              {lang.label}
            </motion.button>
          ))}
        </motion.div>

        <button
          id="next"
          onClick={() => handleSlider("next")}
          disabled={disableClick}
        >
          &gt;
        </button>
        <button
          id="back"
          onClick={hideDetail}
          style={{
            opacity: detail ? 1 : 0,
            pointerEvents: detail ? "auto" : "none",
          }}
        >
          {t("carousel.seeAll")} &#8599;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
