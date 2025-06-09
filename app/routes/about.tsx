import { Link } from "@remix-run/react"
import AlertMachine from "~/components/AlertMachine"


function About() {

return(
        <>
            <Link to="/">Home</Link>
            <br />

            <Link to="/autot">Autot</Link>
            <br />

            <Link to="/mopot">Mopot</Link>
            <br />


            <h2>About</h2>

            <h3>This my first REMIX app</h3>

            <AlertMachine />

        </>
    )
}

export default About