import "./GroupInput.scss"

const GroupInput = ({title, children}) => {
    return (
        <div className="group-input">
            <span className="group-input_title">{title}</span>
            {children}
        </div>
    )
}

export default GroupInput