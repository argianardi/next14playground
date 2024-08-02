import AdvancedInput from '@/components/advanced_typescript/reusable_types/AdvancedInput';
import BasicInput from '@/components/advanced_typescript/reusable_types/BasicInput';
import React from 'react';

const FormPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Form</h1>
      <BasicInput label="Basic Input" placeholder="Enter your mind" />
      <AdvancedInput
        label="Advanced Input"
        placeholder="Enter your mind"
        isRequired
        maxLength={10}
      />
    </div>
  );
};

export default FormPage;
