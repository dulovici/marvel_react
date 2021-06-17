import '../Card/card.scss'

export const Card = (props) => {

    const { data } = props;

    return (
        <div className='card'>
            <h2>{data.name}</h2>
            <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt='img' />
            <div className='btns'>
                <button>Info</button>
                <button>Add</button>
            </div>

        </div>
    )
}