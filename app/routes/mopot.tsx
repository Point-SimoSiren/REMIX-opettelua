import { Link } from "@remix-run/react";
import { json } from "@remix-run/node";

// SERVER: Palautetaan 10 auton lista
export const action = async () => {
  const cars = [
    { id: 1, brand: "Toyota", model: "Corolla", year: 2018, color: "Silver", mileage: 85000 },
    { id: 2, brand: "Volkswagen", model: "Golf", year: 2020, color: "Blue", mileage: 42000 },
    { id: 3, brand: "Ford", model: "Focus", year: 2017, color: "Black", mileage: 99000 },
    { id: 4, brand: "BMW", model: "3 Series", year: 2021, color: "White", mileage: 25000 },
    { id: 5, brand: "Honda", model: "Civic", year: 2019, color: "Red", mileage: 64000 },
    { id: 6, brand: "Hyundai", model: "i30", year: 2020, color: "Gray", mileage: 37000 },
    { id: 7, brand: "Mercedes-Benz", model: "C-Class", year: 2018, color: "Black", mileage: 73000 },
    { id: 8, brand: "Skoda", model: "Octavia", year: 2016, color: "Green", mileage: 105000 },
    { id: 9, brand: "Audi", model: "A4", year: 2019, color: "Blue", mileage: 54000 },
    { id: 10, brand: "Kia", model: "Ceed", year: 2022, color: "White", mileage: 15000 }
  ];

  return json({ cars });
};

// CLIENT: Lähetetään pyyntö ja tulostetaan JSON konsoliin
export default function Mopot() {
  const handleClick = async () => {
    const response = await fetch("/mopot", {
      method: "POST",
      headers: {
        "Accept": "application/json"
      }
    });

    const data = await response.json();
    console.log("Palvelimen palauttamat autot:", data.cars);
    alert(`Autot haettu (${data.cars.length} kpl). Katso selaimen konsoli.`);
  };

  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/autot">Autot</Link>
      <br />

      <h2>Mopot</h2>
      <br />

      <button onClick={handleClick}>Hae autot JSON:na palvelimelta</button>
    </div>
  );
}
