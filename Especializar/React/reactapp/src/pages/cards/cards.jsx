import './style-cards.css'

export function Cards(props) {
    return (
        <div className='cards'>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}