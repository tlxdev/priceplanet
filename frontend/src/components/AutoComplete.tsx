import React, { useState, useEffect, useRef } from 'react';

export interface AutoCompleteOption {
  value: string;
  label: string;
}

const AutoComplete = ({
  values,
  placeholder,
  name,
  selectedValue,
  onValueChange,
}: {
  values: AutoCompleteOption[];
  placeholder: string | null;
  name: string;
  selectedValue: string | null;
  onValueChange: (value: string | null) => void;
}) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredValues, setFilteredValues] = useState<AutoCompleteOption[]>([]);

  const [focusIndex, setFocusIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  // Debounce user input
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!inputValue) {
        setFilteredValues([]);
        onValueChange(null);
        return;
      }
      if (inputValue.length < 3) return setFilteredValues([]);
      setFilteredValues(values.filter((v) => v.label.toLowerCase().includes(inputValue.toLowerCase())));
    }, 30);

    return () => clearTimeout(timeout);
  }, [inputValue]);

  // Reset focus index when filtered values change
  useEffect(() => {
    setFocusIndex(-1);
  }, [filteredValues]);

  // Handle option click
  const handleOptionClick = (option: AutoCompleteOption) => {
    onValueChange(option.value);
    setInputValue(option.label);
    setFilteredValues([]);
  };

  // Handle key press in input
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        setFocusIndex((prev) => (prev + 1) % filteredValues.length);
        e.preventDefault();
        break;
      case 'ArrowUp':
        setFocusIndex((prev) => (prev - 1 + filteredValues.length) % filteredValues.length);
        e.preventDefault();
        break;
      case 'Enter':
        if (focusIndex !== -1) {
          handleOptionClick(filteredValues[focusIndex]);
        }
        e.preventDefault();
        break;
      case 'Escape':
        setFilteredValues([]);
        if (inputRef.current) {
          inputRef.current.blur();
        }
        e.preventDefault();
        break;
      default:
        break;
    }
  };

  // Scroll to focused item
  useEffect(() => {
    if (focusIndex !== -1 && itemRefs.current[focusIndex]) {
      itemRefs.current[focusIndex].scrollIntoView({ block: 'nearest' });
    }
  }, [focusIndex]);

  return (
    <div className="relative" role="combobox" aria-expanded="false" aria-owns="autocomplete-list" aria-haspopup="listbox">
      <input
        className="input input-bordered input-primary w-full max-w-xs"
        type="text"
        aria-autocomplete="list"
        aria-controls="autocomplete-list"
        placeholder={placeholder || ''}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
        ref={inputRef}
        name={name}
      />
      {!selectedValue && filteredValues.length > 0 && (
        <ul className="absolute w-full mt-1 bg-gray-800 border border-gray-300 overflow-auto max-h-60" role="listbox">
          {filteredValues.map((value, index) => (
            <li
              key={value.value}
              className={`px-3 py-2 hover:bg-gray-100 cursor-default select-none relative ${index === focusIndex ? 'bg-gray-100' : ''}`}
              role="option"
              onClick={() => handleOptionClick(value)}
              aria-selected={index === focusIndex}
              ref={(ref) => (itemRefs.current[index] = ref)}
            >
              <span className="block truncate">{value.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
