import "./Card.scss"

const Card = ({name, desrcription, specie}) => {
    console.log(specie)
    return (
        <div className="card">
            <div className="card-img">
                <img className="card-img__element" src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg" alt="img"/>
            </div>
            <div className="card-text">
                <div className="card-text__title">
                    <h5>{name + " " + specie.toLowerCase()}</h5>
                </div>
                <p className="card-text__description">{desrcription}</p>
            </div>
        </div>
    )
}

export default Card