import { useEffect, useState } from 'react';
import jobsData from '../data/jobs.json';

function Jobs() {
    const [jobs, setJobs] = useState([]);
    const [favorites, setFavorites] = useState([]);

    // Para cargar empleos y favoritos justo al iniciar
    useEffect(() => {
        setJobs(jobsData);
        const saved = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(saved);
    }, []);

    // Guardar o quitar favorito
    const toggleFavorite = (job) => {
        let updated;
        if (favorites.some((fav) => fav.id === job.id)) {
        updated = favorites.filter((fav) => fav.id !== job.id);
        } else {
        updated = [...favorites, job];
        }
        setFavorites(updated);
        localStorage.setItem('favorites', JSON.stringify(updated));
    };

    // Para simular la postulación
    const applyToJob = (job) => {
    const saved = JSON.parse(localStorage.getItem('applications')) || [];
    const alreadyApplied = saved.some((j) => j.id === job.id);

    if (!alreadyApplied) {
        const updated = [...saved, job];
        localStorage.setItem('applications', JSON.stringify(updated));
        alert(`¡Has postulado a "${job.title}" en ${job.company}!`);
    } else {
        alert(`Ya te has postulado a "${job.title}".`);
    }
};


    return (
        <div className="container">
        <h2 className="mb-4 text-primary">Ofertas de Empleo</h2>

        <div className="row">
            {jobs.map((job) => {
            const isFavorite = favorites.some((fav) => fav.id === job.id);

            return (
                <div key={job.id} className="col-md-6 mb-4">
                <div className="card shadow-sm border-0 h-100">
                    <div className="card-body">
                    <h5 className="card-title text-dark">{job.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{job.company}</h6>

                    <p className="mb-1"><strong>Ubicación:</strong> {job.location}</p>
                    <p className="mb-1"><strong>Tipo:</strong> {job.type}</p>
                    <p className="mb-1"><strong>Salario:</strong> {job.salary}</p>

                    <p className="card-text mt-2">{job.description}</p>

                    {/* estrellita */}
                    <button
                        className={`btn btn-sm me-2 ${isFavorite ? 'btn-secondary' : 'btn-outline-primary'}`}
                        onClick={() => toggleFavorite(job)}
                    >
                        {isFavorite ? '★ Guardado' : '☆ Guardar'}
                    </button>

                    {/* boton de postular */}
                    <button
                        className="btn btn-sm btn-primary"
                        onClick={() => applyToJob(job)}
                    >
                        Postularme
                    </button>
                    </div>
                </div>
                </div>
            );
            })}
        </div>
        </div>
    );
    }

export default Jobs;