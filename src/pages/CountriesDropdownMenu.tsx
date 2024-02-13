import { useState } from 'react';

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] }
];

export default function CountriesDropdownMenu() {
  const [currentCountry, setCurrentCountry] = useState({name: 'Nothing'});

  const handleChange = (event: any) => {
    const selectedCountry = countries.find((country)=> country.value === event.target.value);
    setCurrentCountry(selectedCountry ?? {name: '', value: '', cities:[]} );
  } 

  return (
    <>
      <select onChange={handleChange}>
        { countries.map((country) => (
          <option key={country.value} value={country.value}>{country.name}</option>
        ))}
      </select>
      <div>{currentCountry.name ?? ''}</div>
    </>
  );
}