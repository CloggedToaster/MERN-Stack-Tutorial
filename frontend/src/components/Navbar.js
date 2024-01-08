import { Link } from 'react-router-dom'

const Navbar = () => {

    return(
        <header>
            <div className="container">
                <Link to="/">
                    <h1>FlexFitness</h1>
                </Link>
            </div>
        </header>
    )
}

//default export
export default Navbar