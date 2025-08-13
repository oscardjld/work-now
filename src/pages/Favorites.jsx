import { useEffect, useState } from 'react';

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    // Cargar favoritos
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(saved);
    }, []);

    // Eliminar favorito
    const removeFavorite = (id) => {
        const updated = favorites.filter((job) => job.id !== id);
        setFavorites(updated);
        localStorage.setItem('favorites', JSON.stringify(updated));
    };

    return (
        <div className="container">
        <h2 className="mb-4 text-primary">Mis Favoritos</h2>

        {favorites.length === 0 ? (
            <p className="text-muted">Aún no has guardado ninguna oferta.</p>
        ) : (
            <div className="row">
            {favorites.map((job) => (
                <div key={job.id} className="col-md-6 mb-4">
                <div className="card shadow-sm border-0 h-100">
                    <div className="card-body">
                    <h5 className="card-title text-dark">{job.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{job.company}</h6>

                    <p className="mb-1"><strong>Ubicación:</strong> {job.location}</p>
                    <p className="mb-1"><strong>Tipo:</strong> {job.type}</p>
                    <p className="mb-1"><strong>Salario:</strong> {job.salary}</p>

                    <p className="card-text mt-2">{job.description}</p>

                    {/* botonsito para eliminar */}
                    <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => removeFavorite(job.id)}
                    >
                        Quitar de Favoritos
                    </button>
                    </div>
                </div>
                </div>
            ))}
            </div>
        )}
        </div>
    );
    }

export default Favorites;