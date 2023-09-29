import { AddCountryDetailsForm } from '@/constants/CostOfLiving';
import { COUNTRY_DETAILS, Country } from '@/constants/Country';
import { FormProvider, useForm } from 'react-hook-form';
import FormInput from './FormInput';
import FormInputMoney from './FormInputMoney';
import FormInputRating from './FormInputRating';

const AddCountryDetailsForm = ({ country }: { country: Country }) => {
  const methods = useForm<AddCountryDetailsForm>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data: AddCountryDetailsForm) => {
    console.log(data);
  };

  const onErrors = (errors: any) => {
    console.log(errors);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit, onErrors)} className="form form-bordered w-full mx-auto pb-16 pt-8">
        <FormInput required label="What city do you live in?" register={register('city', { required: true })} />
        <div className="divider" />
        <FormInputMoney
          label="Monthly rent"
          register={register('monthlyRent', { required: true, valueAsNumber: true })}
          currency={(COUNTRY_DETAILS as any)[country].currency}
        />
        <FormInputMoney
          label="Lunch price"
          register={register('lunchPrice', { required: true, valueAsNumber: true })}
          currency={(COUNTRY_DETAILS as any)[country].currency}
        />
        <div className="divider" />
        <FormInputMoney
          label="Monthly salary (before tax)"
          register={register('monthlySalaryBeforeTax', { required: true, valueAsNumber: true })}
          currency={(COUNTRY_DETAILS as any)[country].currency}
        />
        <FormInputMoney
          label="Monthly salary (after tax)"
          register={register('monthlySalaryAfterTax', { required: true, valueAsNumber: true })}
          currency={(COUNTRY_DETAILS as any)[country].currency}
        />
        <div className="divider" />
        <FormInputRating label="On a scale of 0-10, how happy are you overall?" name="happinessIndex" />
        <FormInputRating label="On a scale of 0-10, how safe do you feel in your location?" name="safetyIndex" />
        <div className="divider" />
        <div className="form-control mt-6 w-64">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default AddCountryDetailsForm;
