import { AddCountryDetailsForm, AddCountryDetailsFormDto } from '@/constants/CostOfLiving';
import { COUNTRY_DETAILS, Country } from '@/constants/Country';
import { createCostOfLiving } from '@/services/CostOfLivingService';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormInput from './FormInput';
import FormInputMoney from './FormInputMoney';
import FormInputRating from './FormInputRating';

const AddCountryDetailsForm = ({ country }: { country: Country }) => {
  const { t } = useTranslation(['country-details-form', 'common']);
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

          const submitData: AddCountryDetailsFormDto = {
            ...data,
            country,
            recaptchaToken: token,
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
      <h1 className="text-2xl font-semibold">{t('country-details-form:SubmitDetailsFor', { country: t(`common:Country.${country}`) })}</h1>
      <form onSubmit={handleSubmit(onSubmit, onErrors)} className="form form-bordered w-full mx-auto pb-16 pt-8">
        <FormInput required label={t('country-details-form:WhatCityDoYouLiveIn')} register={register('city', { required: true })} />
        <div className="divider" />
        <FormInputMoney label={t('country-details-form:MonthlyRentLabel')} name="monthlyRent" currency={(COUNTRY_DETAILS as any)[country].currency} />
        <FormInputMoney label={t('country-details-form:MonthlyGroceries')} name="monthlyGroceriesPrice" currency={(COUNTRY_DETAILS as any)[country].currency} />
        <FormInputMoney label={t('country-details-form:LunchPriceRestaurant')} name="lunchPrice" currency={(COUNTRY_DETAILS as any)[country].currency} />
        <div className="divider" />
        <FormInputMoney
          label={t('country-details-form:MonthlySalaryBeforeTax')}
          name="monthlySalaryBeforeTax"
          currency={(COUNTRY_DETAILS as any)[country].currency}
        />
        <FormInputMoney
          label={t('country-details-form:MonthlySalaryAfterTax')}
          name="monthlySalaryAfterTax"
          currency={(COUNTRY_DETAILS as any)[country].currency}
        />
        <div className="divider" />
        <FormInputRating label={t('country-details-form:HappinessScale')} name="happinessIndex" />
        <FormInputRating label={t('country-details-form:SafetyScale')} name="safetyIndex" />
        <div className="divider" />
        <div className="form-control mt-6 w-64">
          <button className="btn btn-primary" type="submit">
            {t('country-details-form:SubmitButton')}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default AddCountryDetailsForm;
