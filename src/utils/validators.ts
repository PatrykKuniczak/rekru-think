import { IFormValues } from '../interfaces.ts';
import { DUMMY_HOURS } from '../constants.ts';

type Replace<O, N> = Omit<O, keyof N> & N;
type ValidatorType = { [key in keyof IFormValues]: (value: string) => boolean };

export const validator: Replace<ValidatorType, { photo: (value: File | null) => boolean }> = {
  firstName: (value: string) => value.length > 2 && value.length <= 50,
  lastName: (value: string) => value.length > 2 && value.length <= 50,
  email: (value: string) => !!value.match(/[\w-.]+@([\w-]+\.)+[\w-]{2,4}/),
  age: (value: string) => +value >= 8 && +value <= 100,
  photo: (value: File | null) => !!value && value.size > 0,
  date: (value: string) => new Date(value) > new Date(),
  time: (value: string) => DUMMY_HOURS.includes(value),
};
