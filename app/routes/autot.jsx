import { Link } from "@remix-run/react"
import { json } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import React, {useState} from "react";

// SERVER

export const action = async () => {
  // Palautetaan jotain JSON-dataa
  return json([
  {
    "id": 1,
    "brand": "Toyota",
    "model": "Corolla",
    "year": 2018,
    "color": "Silver",
    "mileage": 85000
  },
  {
    "id": 2,
    "brand": "Volkswagen",
    "model": "Golf",
    "year": 2020,
    "color": "Blue",
    "mileage": 42000
  },
  {
    "id": 3,
    "brand": "Ford",
    "model": "Focus",
    "year": 2017,
    "color": "Black",
    "mileage": 99000
  },
  {
    "id": 4,
    "brand": "BMW",
    "model": "3 Series",
    "year": 2021,
    "color": "White",
    "mileage": 25000
  },
  {
    "id": 5,
    "brand": "Honda",
    "model": "Civic",
    "year": 2019,
    "color": "Red",
    "mileage": 64000
  },
  {
    "id": 6,
    "brand": "Hyundai",
    "model": "i30",
    "year": 2020,
    "color": "Gray",
    "mileage": 37000
  }]
)};

// CLIENT

// fetcher.Form tapa hakea data

function Autot() {

  const [autot, setAutot] = useState([]);

    const fetcher = useFetcher();
    const handleClick = () => {
    fetcher.submit(null, { method: "post" });
  };

  // Jos dataa on tullut palvelimelta
  if (fetcher.data) {
   setAutot(fetcher.data);
  }

return(
        <>
            <Link to="/">Home</Link>
            <br />

            <Link to="/about">About</Link>
            <br />
            <Link to="/mopot">Mopot</Link>
            <br />

            <h2>Autot</h2>
            <br />


             <fetcher.Form method="post">
                <button type="submit">Hae JSON palvelimelta</button>
             </fetcher.Form>
            
            {autot && autot.map(auto => (
                <div key={auto.id}>
                    <h3>{auto.brand} {auto.model}</h3>
                    <p>Vuosi: {auto.year}</p>
                    <p>Väri: {auto.color}</p>
                    <p>Kilometrit: {auto.mileage}</p>
                </div>
            ))}

        </>
    )
}

export default Autot