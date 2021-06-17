import '../Single/single.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from '../Loader/Loader';

export const Single = (props) => {
    const key = '57a4249a4879ba67cbdc852312c377d8';
    const [singleData, setSingleData] = useState([]);

    const id = props.match.params.id;

    useEffect(() => {
        fetch(`http://gateway.marvel.com/v1/public/characters/${id}?apikey=${key}`)
            .then(res => res.json())
            .then(dta => setSingleData(dta.data.results[0]))
    }, [])

    console.log(singleData);

    return (
        singleData.length !== 0 
        ? 
        <div className='single-wr'>
            <div className='single-hdr'>
            <h2>{singleData.name}</h2>
                <Link to='/'>
                    <p>Homepage</p>
                </Link>
            </div>

            <div className='single-main'>

                <img src={`${singleData?.thumbnail.path}.${singleData?.thumbnail.extension}`} alt='img' />
                <h2>Description:</h2>

                {singleData?.description.length === 0 
                ?<h1>Sorry, no description :(</h1>
                :<p>{singleData.description}</p>}

            </div>
    </div>
    : <Loader />
    
    )
}