import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
    return (
        <div className="home-container">

        {/* Hero Section */}
        <section className="hero-section text-center fade-in">
            <h1 className="display-4">Encuentra el trabajo ideal con <span className="text-primary">Work Now</span></h1>
            <p className="lead">Una plataforma inteligente que conecta talento con oportunidades reales</p>
            <Link to="/jobs" className="btn btn-primary mt-3">Explorar ofertas</Link>
        </section>

        {/* Como funciona */}
        <section className="steps-section container mt-5 fade-in-delay">
            <h2 className="mb-4 text-center">¿Cómo funciona?</h2>
            <div className="row text-center">
            <div className="col-md-4 mb-4">
                <i className="bi bi-person-plus display-6 text-primary"></i>
                <h5 className="mt-2">Crea tu perfil</h5>
                <p>Agrega tus habilidades y preferencias laborales</p>
            </div>
            <div className="col-md-4 mb-4">
                <i className="bi bi-search display-6 text-primary"></i>
                <h5 className="mt-2">Explora ofertas</h5>
                <p>Filtra por ubicación, tipo de contrato y más</p>
            </div>
            <div className="col-md-4 mb-4">
                <i className="bi bi-check-circle display-6 text-primary"></i>
                <h5 className="mt-2">Aplica fácilmente</h5>
                <p>Envía tu perfil con un solo clic</p>
            </div>
            </div>
        </section>

        {/* Beneficios */}
        <section className="benefits-section container mt-5 fade-in-delay">
            <h2 className="mb-4 text-center">¿Por qué usar WorkNow?</h2>
            <div className="row text-center">
            <div className="col-md-4 mb-4">
                <i className="bi bi-stars display-6 text-success"></i>
                <h5 className="mt-2">Match inteligente</h5>
                <p>Algoritmo que sugiere empleos según tu perfil</p>
            </div>
            <div className="col-md-4 mb-4">
                <i className="bi bi-clock display-6 text-success"></i>
                <h5 className="mt-2">Ahorro de tiempo</h5>
                <p>Aplicaciones rápidas y sin formularios eternos</p>
            </div>
            <div className="col-md-4 mb-4">
                <i className="bi bi-phone display-6 text-success"></i>
                <h5 className="mt-2">Diseño responsive</h5>
                <p>Funciona perfecto en móvil y escritorio</p>
            </div>
            </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section text-center mt-5 mb-5 fade-in">
            <h3>¿Listo para encontrar tu próximo trabajo?</h3>
            <Link to="/register" className="btn btn-outline-primary mt-3">Crear cuenta</Link>
        </section>

        </div>
    );
};

export default Home;