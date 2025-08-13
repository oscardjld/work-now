import { Link } from "react-router-dom";
import fotodeperfil from '../assets/fotodeperfil.png';

function Dashboard() {
    return (
        <div className="container fade-in">
        <h2 className="mb-4 text-primary text-center">Mi Perfil</h2>

        <div className="card shadow-sm border-0 p-4">
            {/* aqui va la foto de perfil OJO*/}
            <div className="text-center mb-3">
            <img
                src={fotodeperfil}
                alt="Foto de perfil"
                style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    boxShadow: '0 0 5px rgba(0,0,0,0.2)'
                }}
            />

            </div>

            {/* datos del perfil */}
            <h5 className="text-dark text-center">Russo</h5>
            <p className="text-muted text-center">Frontend Developer | UI/UX Lover</p>

            <hr />

            <ul className="list-unstyled fade-in">
            <li><strong>Proyectos:</strong> RussoTasks, YeahShirts, WorkNow, Amsterdam Studio</li>
            <li><strong>Skills:</strong> React, Vite, Bootstrap, Git, Netlify</li>
            <li><strong>Objetivo:</strong> Aprender cada dia, un poco mas</li>
            <li>
                <strong>GitHub:</strong>{' '}
                <a
                href="https://github.com/oscardjld"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover text-primary"
                >
                github.com/oscardjld
                </a>
            </li>
            </ul>

            <Link to="/edit" className="btn btn-outline-primary mt-3">
            Editar Perfil
            </Link>
        </div>
        </div>
    );
    }

export default Dashboard;