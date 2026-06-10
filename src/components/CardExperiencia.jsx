function CardExperiencia({ cargo, empresa, periodo, descricao }) {
    return (
        <div className="card-experiencia">
            <h3>{cargo}</h3>

            <p>
                <strong>{empresa}</strong>
            </p>

            <span>{periodo}</span>

            <p>{descricao}</p>
        </div>
    )
}

export default CardExperiencia