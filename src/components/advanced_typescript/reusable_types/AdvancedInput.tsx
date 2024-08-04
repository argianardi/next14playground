import { AdvancedInputTypes } from '@/types/InputTypes';

const AdvancedInput = ({
  label,
  placeholder,
  isRequired,
  maxLength,
}: AdvancedInputTypes) => {
  return (
    <div>
      <label>
        {label}
        <input
          type="text"
          placeholder={placeholder}
          required={isRequired}
          maxLength={maxLength}
          className="p-2 border rounded"
        />
      </label>
    </div>
  );
};

export default AdvancedInput;
