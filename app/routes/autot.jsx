import { Link } from "@remix-run/react"
import { useFetcher } from "@remix-run/react";
import {useState, useEffect} from "react";
import { json } from "@remix-run/node";
import fs from "fs/promises";
import path from "path";

// SERVER

export const action = async () => {
  const filePath = path.join(process.cwd(), "app", "data", "autot.json");
  const data = await fs.readFile(filePath, "utf-8");
  return json(JSON.parse(data));
};

// CLIENT

// fetcher.Form tapa hakea data

function Autot() {

  const [autot, setAutot] = useState([]);
  const fetcher = useFetcher();

  useEffect(() => {
    if (fetcher.data) {
      setAutot(fetcher.data);
    }
  }, [fetcher.data]);

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


             <fetcher.Form method="post" action="/autot">
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