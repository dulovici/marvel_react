import '../Picked/picked.scss';

export const Picked = (props) => {
    const {data} = props;

    return (
            <div className='pick'>
                <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt='img' />
                <h3>{data.name}</h3>
            </div>
    )
}