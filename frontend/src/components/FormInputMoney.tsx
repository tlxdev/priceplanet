import { Currency } from '@/constants/Currency';
import Big from 'big.js';
import { useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const FormInputMoney = ({
  required,
  label,
  currency,
  name,
  ...rest
}: {
  required?: boolean;
  label: string;
  currency: Currency;
  name: string;
}) => {
  const { control, setValue } = useFormContext();

  const [displayValue, setDisplayValue] = useState<string>('');

  useEffect(() => {
    if (!displayValue) return;
    const valueInCents = new Big(displayValue.replace(',', '.')).times(100).round(0, 0);
    setValue(name, valueInCents.toNumber());
  }, [displayValue, setValue, name]);

  const changeDisplayValue = (value: string) => {
    if (!value) return setDisplayValue('');
    const roundedValue = new Big(value.replace(',', '.')).round(2, 1).toString();
    setDisplayValue(roundedValue);
  };

  const formattedValue = displayValue.endsWith('.00') ? displayValue.slice(0, -3) : displayValue;

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <div className="relative w-32">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <input
              {...field}
              required={required}
              type="text"
              className="input input-bordered block w-full"
              value={formattedValue}
              onChange={(event) => {
                // Clear value if input contains non-numeric characters
                if (event.target.value.match(/[^0-9.,]/)) return setDisplayValue(event.target.value.replace(/[^0-9.,]/g, ''));
                setDisplayValue(event.target.value);
              }}
              onBlur={(event) => {
                changeDisplayValue(event.target.value);
              }}
              {...rest}
            />
          )}
        />
        <span className="absolute top-1/2 right-2.5 transform -translate-y-1/2">{currency}</span>
      </div>
    </div>
  );
};

export default FormInputMoney;
