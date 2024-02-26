// compound component parent
const CountrySelect = () => {
  return (
    <select>
      <option value="en">Finland (EUR)</option>
      <option value="en">Estonia (EUR)</option>
      <option value="en">Latvia (EUR)</option>
      <option value="en">Lithuania (EUR)</option>
      <option value="es">Norway (NOK)</option>
      <option value="es">Sweden (SEK)</option>
      <option value="es">Denmark (DKK)</option>
    </select>
  );
};

export default CountrySelect;

// compound component child
const Option = () => {};
