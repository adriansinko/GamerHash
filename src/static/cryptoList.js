import { getImagesIconPath } from "@/core/helpers/assets";

const cryptoList = [
  {
    id: 1,
    image: getImagesIconPath("crypto", "btc-icon.svg"),
    text: "bitcoin (BTC)",
    value: "0.48 BTC",
    price: "3 925.36 USD",
  },
  {
    id: 2,
    image: getImagesIconPath("crypto", "etc-icon.svg"),
    text: "GUSD",
    value: "0.48 BTC",
    price: "3 925.36 USD",
  },
  {
    id: 3,
    image: getImagesIconPath("crypto", "ltc-icon.svg"),
    text: "litecoin (LTC)",
    value: "0.48 BTC",
    price: "3 925.36 USD",
  },
];

export default cryptoList;
