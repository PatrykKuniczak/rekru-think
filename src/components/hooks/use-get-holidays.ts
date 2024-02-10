import { useEffect, useState } from 'react';

export interface IHolidaysResponse {
  country: string;
  iso: string;
  year: number;
  date: string;
  day: string;
  name: string;
  type: string;
}

const useGetHolidays = () => {
  const [holidays, setHolidays] = useState<IHolidaysResponse[]>([]);

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/holidays?' + new URLSearchParams({ country: 'PL', year: '2023' }), {
      headers: { 'X-Api-Key': import.meta.env.VITE_API_KEY },
    }).then(async response => {
      setHolidays(await response.json());
    });
  }, []);

  return holidays;
};

export default useGetHolidays;
