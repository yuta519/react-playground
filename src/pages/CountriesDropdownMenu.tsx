// Reference: https://www.youtube.com/watch?v=EirBuUUPbio
import { useState } from 'react';

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] }
];

type State = {
  name: string;
  value: string;
  cities: string[];
}

const initialState = {name: '', value: '', cities:[]} 

export default function CountriesDropdownMenu() {
  const [currentCountry, setCurrentCountry] = useState<State>(initialState);

  const handleChangeCountry = (event: any) => {
    const selectedCountry = countries.find((country)=> country.value === event.target.value);
    if (!selectedCountry) return setCurrentCountry(initialState);
    setCurrentCountry(selectedCountry);
  } 
  const handleChangeCity = (event: any) => {
    console.log(event.target.value);
  }

  return (
    <>
      <select onChange={handleChangeCountry}>
        <option key='' value=''>---</option>
        { countries.map((country) => (
          <option key={country.value} value={country.value}>{country.name}</option>
        ))}
      </select>

      {
        currentCountry !== initialState && (
          <select onChange={handleChangeCity}>
            <option key='' value=''>---</option>
            { currentCountry.cities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
        )
      }
    </>
  );
}