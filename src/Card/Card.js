import '../Card/card.scss'
import { Link } from 'react-router-dom';

export const Card = (props) => {
    const { data } = props;
    const { id } = props;


    return (
        <div className='card'>
            <h2>{data.name}</h2>
            <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt='img' />
            <div className='btns'>
                <Link to={`/single/${id}`}>
                    <button>Info</button>
                </Link>
                <button>Add</button>
            </div>
        </div>
    )
}