import { Link, NavLink } from 'react-router-dom';
import logoworknow from '../assets/logoworknow.png'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light border-bottom shadow-sm px-4">
        <div className="container-fluid">
            {/*  Logo  */}
            <Link className="navbar-brand d-flex align-items-center" to="/">
                <img
                    src={logoworknow}
                    alt="WorkNow"
                    style={{ height: '40px', marginRight: '10px' }}
                />
            
            </Link>

            {/* Boton para moviles */}
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            {/* Primera pagina */}
            <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className="nav-link" to="/jobs">
                    Empleos
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/favorites">
                    Favoritos
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/stats">
                    Estadísticas
                </NavLink>
                </li>
                <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                    <i className="bi bi-person-circle" style={{ fontSize: '1.2rem' }}></i>
                </Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
    }

export default Navbar;