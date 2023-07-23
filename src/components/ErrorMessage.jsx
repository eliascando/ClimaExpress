export const ErrorMessage = () => {
    return (
        <div className='error-message'>
            <h3>No se pudo obtener la ubicación</h3>
            <p>Por favor habilite la ubicación en su navegador.</p>
            <i className="bi bi-geo-alt-fill"></i>
        </div>
    )
}