import { HTMLInputTypeAttribute } from 'react';

export type ValueOf<T> = T[keyof T];

export interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  photo: FileList | null;
  date: string;
  time: string;
}

export interface ILabeledInput {
  formValues?: IFormValues;
  children: string;
  showValidationError: boolean;
  inputName: keyof IFormValues;
  changeFormValue: (prop: keyof IFormValues, value: ValueOf<IFormValues>) => void;
  errorName: string;
  inputType?: HTMLInputTypeAttribute;
}
