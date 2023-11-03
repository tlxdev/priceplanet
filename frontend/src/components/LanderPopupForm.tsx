import { AddCountryDetailsForm, AddCountryDetailsFormFromLanderDto } from '@/constants/CostOfLiving';
import { COUNTRY_DETAILS, Country } from '@/constants/Country';
import { createCostOfLivingFromLander } from '@/services/CostOfLivingService';
import { useEffect, useState } from 'react'; // Add useEffect
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import FormInputMoney from './FormInputMoney';
import FormInputRating from './FormInputRating';

// Define field types and associated components
const fieldComponents = {
  monthlyRent: FormInputMoney,
  monthlySalaryBeforeTax: FormInputMoney,
  monthlySalaryAfterTax: FormInputMoney,
  monthlyGroceriesPrice: FormInputMoney,
  lunchPrice: FormInputMoney,
  happinessIndex: FormInputRating, // Replace with the correct component for ratings
  safetyIndex: FormInputRating, // Replace with the correct component for ratings
  // ... Add other fields and their respective components
};

export default function PopupForm({ setIsVisible, country }: { setIsVisible: (isVisible: boolean) => void; country: Country }) {
  const [email, setEmail] = useState('');

  const { t } = useTranslation(['common', 'country-details-form']);

  const methods = useForm<AddCountryDetailsForm>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  // Step 1: Create a list of the fields.
  const fields = [
    'monthlyRent',
    'monthlySalaryBeforeTax',
    'monthlySalaryAfterTax',
    'monthlyGroceriesPrice',
    'lunchPrice',
    'happinessIndex',
    'safetyIndex',
    //'nightWalkSafetyIndex',
    //'healthcareSatisfactionIndex',
    //'infrastructureSatisfactionIndex',
    //'environmentalQualityIndex',
  ];

  // State to store the random field
  const [randomField, setRandomField] = useState<string | null>(null);

  // Step 2: Randomly pick one field when the component is mounted.
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * fields.length);
    setRandomField(fields[randomIndex]);
  }, []);

  useEffect(() => {
    if (localStorage.getItem('formShown')) {
      setIsVisible(false);
    }
  }, [setIsVisible]);

  // Capitalize first letter of the field name
  const randomFieldI18nLabel = randomField ? randomField.charAt(0).toUpperCase() + randomField.slice(1) : '';

  // Helper to render the random field
  const renderRandomField = () => {
    if (!randomField) return null;

    // Get the component associated with the field
    const FieldComponent = fieldComponents[randomField];

    return (
      <div className="mb-4">
        <FieldComponent
          label={t(`country-details-form:${randomFieldI18nLabel}` as any)}
          name={randomField}
          // Add a condition to pass currency only if the field component is FormInputMoney
          {...(FieldComponent === FormInputMoney ? { currency: (COUNTRY_DETAILS as any)[country].currency } : {})}
        />
      </div>
    );
  };

  const onSubmit = async (data: AddCountryDetailsForm) => {
    try {
      console.log(data);

      const submitData: AddCountryDetailsFormFromLanderDto = {
        ...data,
        country,
      };
      await createCostOfLivingFromLander(submitData);

      localStorage.setItem('formShown', 'true');
      setIsVisible(false);
    } catch (error) {
      console.error('Error in onSubmit:', error);
      // Handle or re-throw error
    }
  };

  const onErrors = (errors: any) => {
    console.log(errors);
  };

  return (
    <div className="fixed inset-0 flex items-end justify-start z-50 bg-black bg-opacity-50 p-6">
      <div className="relative bg-white p-8 rounded-md shadow-xl min-w-96">
        <button onClick={() => setIsVisible(false)} className="absolute top-2 right-2 text-lg">
          &times;
        </button>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit, onErrors)}>
            <div className="text-2xl font-semibold mb-4">{t('country-details-form:LanderFormTitle')}</div>

            {/* Step 3: Render the chosen field */}
            {renderRandomField()}

            <div className="text-right">
              <button type="submit" className="btn btn-primary">
                {t('common:Submit')}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
