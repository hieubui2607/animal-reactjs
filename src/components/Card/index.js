import "./Card.scss"

const Card = () => {
    return (
        <div className="card">
            <div className="card-img">
                <img className="card-img__element" src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg" alt="img"/>
            </div>
            <div className="card-text">
                <div className="card-text__title">
                    <h5>Chó Alaska</h5>
                </div>
                <p className="card-text__description">Spot is an amazing dog </p>
            </div>
        </div>
    )
}

export default Card