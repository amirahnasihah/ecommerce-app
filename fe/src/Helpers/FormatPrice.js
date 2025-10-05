const FormatPrice = ({ price }) =>
  new Intl.NumberFormat("en-MY", {
    style: "currency",
    currency: "MYR",
    maximumFractionDigits: 2,
  }).format(price);

export default FormatPrice;
