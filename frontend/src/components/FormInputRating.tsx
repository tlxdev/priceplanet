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
    <div className="flex flex-wrap">
      <label className="label flex-row">
        <span className="label-text">{label}</span>
      </label>
      <div className="flex-row space-x-2">
        {Array.from({ length: 11 }, (_, i) => i).map((value) => (
          <Controller
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <div
                key={value}
                className={`btn ${value === selectedNumber ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => {
                  handleClick(value);
                  field.onChange(value); // this is where we inform react-hook-form of the change
                }}
              >
                {value}
              </div>
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default FormInputRating;
