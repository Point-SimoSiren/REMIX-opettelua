import { Link } from "@remix-run/react"

export default function Notes() {

return(
        <>
            <Link to="/">Home</Link>
            <br />

            <Link to="/autot">Autot</Link>
            <br />

            <Link to="/mopot">Mopot</Link>
            <br />


            <h2>Notes</h2>            

        </>
    )
}