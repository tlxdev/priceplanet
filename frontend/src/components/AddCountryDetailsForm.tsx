import { AddCountryDetailsForm } from '@/constants/CostOfLiving';
import { COUNTRY_DETAILS, Country } from '@/constants/Country';
import { createCostOfLiving } from '@/services/CostOfLivingService';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormInput from './FormInput';
import FormInputMoney from './FormInputMoney';
import FormInputRating from './FormInputRating';

const AddCountryDetailsForm = ({ country }: { country: Country }) => {
  const methods = useForm<AddCountryDetailsForm>();

  const router = useRouter();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_KEY}`;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: AddCountryDetailsForm) => {
    try {
      (window as any).grecaptcha.ready(async () => {
        try {
          const token = await (window as any).grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_KEY, { action: 'submit' });

          // TODO: submit token to backend, and verify it in backend

          const submitData = {
            ...data,
            country,
          };
          await createCostOfLiving(submitData);

          // navigate to current page + /done
          router.push(`${router.asPath}/done`);

        } catch (innerError) {
          console.error('Error in reCAPTCHA execution:', innerError);
          // Handle or re-throw inner error
        }
      });
    } catch (error) {
      console.error('Error in onSubmit:', error);
      // Handle or re-throw error
    }
  };

  const onErrors = (errors: any) => {
    console.log(errors);
  };

  return (
    <FormProvider {...methods}>
      <h1 className="text-2xl font-semibold">Add country details for {country}</h1>
      <form onSubmit={handleSubmit(onSubmit, onErrors)} className="form form-bordered w-full mx-auto pb-16 pt-8">
        <FormInput required label="What city do you live in?" register={register('city', { required: true })} />
        <div className="divider" />
        <FormInputMoney
          label="Monthly rent"
          register={register('monthlyRent', { required: true, valueAsNumber: true })}
          currency={(COUNTRY_DETAILS as any)[country].currency}
        />

        <FormInputMoney
          label="Monthly groceries"
          register={register('monthlyGroceriesPrice', { required: true, valueAsNumber: true })}
          currency={(COUNTRY_DETAILS as any)[country].currency}
        />

        <FormInputMoney
          label="Lunch price, restaurant"
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
