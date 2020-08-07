import Huejutla from "../images/places/huejutla.jpg";
import Tantoyuca from "../images/places/tantoyuca.jpg";
import SanMartin from "../images/places/san_martin_chalchicuautla.jpg";
import moment from "moment";
export const getPlaces = () => {
  let places = [
    {
      slug: "huejutla",
      name: "Huejutla de Reyes",
      state: "Hidalgo",
      image: Huejutla,
    },
    {
      slug: "tantoyuca",
      name: "Tantoyuca",
      state: "Veracruz",
      image: Tantoyuca,
    },
    {
      slug: "san-martin-chalchicuautla",
      name: "San Martin Chalchicuautla",
      state: "San Luis Potosí",
      image: SanMartin,
    },
  ];
  return places;
};

export const getRelevantDates = () => {
  let relevantDates = [
    {
      date: moment("20200929"),
      title: "San Miguel",
      detail: "Se realiza la primer ofrenda y bajada de máscaras",
    },
    {
      date: moment("20201018"),
      title: "San Lucas",
      detail: "Segunda ofrenda",
    },
    {
      date: moment("20201031"),
      title: "Día de los niños ó angelitos",
      detail: "Ofrenda para recibir a nuestros difuntos chiquitos o angelitos",
    },
    {
      date: moment("20201101"),
      title: "Día de los adultos",
      detail: "Ofrenda para recibir a nuestros difuntos adultos",
    },
    {
      date: moment("20201102"),
      title: "Día de todos los santos",
      detail: "Ofrenda para recibir a todos los fieles difuntos",
    },
    {
      date: moment("20201103"),
      title: "Día de la bendición",
      detail: "Día de la despedida",
    },
  ];
  return relevantDates;
};
