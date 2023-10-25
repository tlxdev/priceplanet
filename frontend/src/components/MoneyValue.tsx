import Big from 'big.js';

const MoneyValue = ({ value }: { value: number }) => {
  if (!value) return 0;
  const valueConverted = new Big(value).div(100).toFixed(2);

  return valueConverted.replace('.00', '');
};

export default MoneyValue;
