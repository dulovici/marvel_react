import '../Picked/picked.scss';

export const Picked = (props) => {
    const {data} = props;
    const {id} = props;
    const {removeMember} = props;

    console.log(id);

    return (
            <div className='pick'>
                <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt='img' />
                <h3>{data.name}</h3>
                    <div>
                        <p onClick={()=>removeMember(id)}>Remove from list</p>
                    </div>
            </div>
    )
}