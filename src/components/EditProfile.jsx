import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EditProfile() {
    const [name, setName] = useState('Russo');
    const [bio, setBio] = useState('Frontend Developer | UI/UX Lover');
    const navigate = useNavigate();

    const handleSave = () => {
        // Aquí podrías guardar en localStorage o backend
        navigate('/');
    };

    return (
        <div className="container fade-in">
        <h2 className="mb-4 text-primary text-center">Editar Perfil</h2>

        <div className="card p-4 shadow-sm border-0">
            <label>Nombre:</label>
            <input
            type="text"
            className="form-control mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <label>Bio:</label>
            <input
            type="text"
            className="form-control mb-3"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            />

            <button className="btn btn-success" onClick={handleSave}>
            Guardar y volver
            </button>
        </div>
        </div>
    );
    }

export default EditProfile;