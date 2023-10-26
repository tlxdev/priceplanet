import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const FormInputRating = ({ label, name }: { label: string; name: string }) => {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const { control } = useFormContext();

  const handleClick = (value: number) => {
    if (value === selectedNumber) {
      return setSelectedNumber(null);
    }
    setSelectedNumber(value);
  };

  return (
    <div className="flex flex-wrap mb-4">
      <label className="label flex-row">
        <span className="label-text text-xs md:text-sm">{label}</span>
      </label>
      <div className="flex space-x-2">
        {Array.from({ length: 11 }, (_, i) => i).map((value) => (
          <Controller
            key={value}
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <button
                key={value}
                className={`
                  py-1 px-2 md:py-2 md:px-4 rounded transition-all duration-200 ease-in-out 
                  font-medium text-xs md:text-sm 
                  ${value === selectedNumber ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}
                  hover:${value === selectedNumber ? 'bg-primary' : 'bg-gray-300'}
                `}
                onClick={(event) => {
                  event.preventDefault();
                  handleClick(value);
                  field.onChange(value); // this is where we inform react-hook-form of the change
                }}
              >
                {value}
              </button>
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default FormInputRating;
