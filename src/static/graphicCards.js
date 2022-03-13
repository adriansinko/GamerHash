import { getImagesPath } from "@/core/helpers/assets";

const graphicCards = [
  {
    text: "low-end",
    image: getImagesPath("calculator", "low-end.svg"),
    price: "$9,004.21",
  },
  {
    text: "mid-shelf",
    image: getImagesPath("calculator", "mid-shelf.svg"),
    price: "$9,004.21",
  },
  {
    text: "high-end",
    image: getImagesPath("calculator", "high-end.svg"),
    price: "$9,004.21",
  },
  {
    text: "7x GPU",
    image: getImagesPath("calculator", "7xGPU.svg"),
    price: "$9,004.21",
  },
];

export default graphicCards;
