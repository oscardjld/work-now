import { useEffect, useState } from 'react';
import jobsData from '../data/jobs.json';

function Stats() {
    const [favoritesCount, setFavoritesCount] = useState(0);
    const [applicationsCount, setApplicationsCount] = useState(0);
    const totalJobs = jobsData.length;

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavoritesCount(savedFavorites.length);

        const savedApplications = JSON.parse(localStorage.getItem('applications')) || [];
        setApplicationsCount(savedApplications.length);
    }, []);

    // Para calcular los porcentajes
    const getPercentage = (count) => Math.round((count / totalJobs) * 100);

    return (
        <div className="container">
        <h2 className="mb-4 text-primary">Estadísticas</h2>

        <div className="row g-4">
            {/* Total de empleos */}
            <div className="col-md-4">
            <div className="card text-center shadow-sm border-0">
                <div className="card-body">
                <h5 className="card-title text-dark">Total de Empleos</h5>
                <p className="display-6 text-primary">{totalJobs}</p>
                </div>
            </div>
            </div>

            {/* Favoritos */}
            <div className="col-md-4">
            <div className="card shadow-sm border-0">
                <div className="card-body">
                <h5 className="card-title text-dark">Favoritos Guardados</h5>
                <p className="display-6 text-warning text-center">{favoritesCount}</p>
                <div className="progress">
                    <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: `${getPercentage(favoritesCount)}%` }}
                    aria-valuenow={favoritesCount}
                    aria-valuemin="0"
                    aria-valuemax={totalJobs}
                    >
                    {getPercentage(favoritesCount)}%
                    </div>
                </div>
                </div>
            </div>
            </div>

            {/* Postulaciones */}
            <div className="col-md-4">
            <div className="card shadow-sm border-0">
                <div className="card-body">
                <h5 className="card-title text-dark">Postulaciones</h5>
                <p className="display-6 text-success text-center">{applicationsCount}</p>
                <div className="progress">
                    <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: `${getPercentage(applicationsCount)}%` }}
                    aria-valuenow={applicationsCount}
                    aria-valuemin="0"
                    aria-valuemax={totalJobs}
                    >
                    {getPercentage(applicationsCount)}%
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    }

export default Stats;