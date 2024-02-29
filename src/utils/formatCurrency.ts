const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "EUR",
  style: "currency",
});

function formatCurrency(number: number | undefined | null) {
  if (number === undefined || number === null) {
    return "";
  }
  return CURRENCY_FORMATTER.format(number);
}

export default formatCurrency;
