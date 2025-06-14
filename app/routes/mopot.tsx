import { Link } from "@remix-run/react";

// CLIENT: Lähetetään pyyntö ja tulostetaan JSON konsoliin
export default function Mopot() {

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
      <h4>Ne on kivoja!</h4>
      
    </div>
  );
}
