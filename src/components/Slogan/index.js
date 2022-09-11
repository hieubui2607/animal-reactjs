import './Slogan.scss';

const Slogan = ({children}) => {
    return (
        <div className="Slogan pl-10">
            <h1 className="Slogan-title">Treat Animals As Friends And Love Them</h1>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Slogan