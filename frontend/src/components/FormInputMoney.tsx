import { Currency } from '@/constants/Currency';

const FormInputMoney = ({
  required,
  label,
  currency,
  register,
  ...rest
}: {
  required?: boolean;
  label: string;
  currency: Currency;
  register: any;
}) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <div className="relative w-32">
        <input type="number" className="input input-bordered block w-full" {...register} {...rest} />
        <span className="absolute top-1/2 right-2.5 transform -translate-y-1/2">{currency}</span>
      </div>
    </div>
  );
};

export default FormInputMoney;
