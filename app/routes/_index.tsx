import { Link } from "@remix-run/react"

function Index() {

const pageName: string = "Homepage"

return (
        <>
            <Link to="/">Home</Link>
            <br />

            <Link to="/about">About</Link>
            <br />

            <Link to="/autot">Autot</Link>
            <br />
            
              <Link to="/mopot">Mopot</Link>
            <br />

            <h1>{pageName}</h1>
        </>
    )
}

export default Index