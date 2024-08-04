export interface BasicInputTypes {
  label: string;
  placeholder: string;
}

export interface AdvancedInputTypes extends BasicInputTypes {
  isRequired?: boolean;
  maxLength?: number;
}
