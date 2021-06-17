import '../Single/single.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Single = (props) => {
    const key = '57a4249a4879ba67cbdc852312c377d8';
    const [singleData, setSingleData] = useState([]);

    useEffect(() => {
        fetch(`http://gateway.marvel.com/v1/public/characters/1010699?apikey=${key}`)
            .then(res => res.json())
            .then(dta => setSingleData(dta.data.results))
    }, [])

    console.log(singleData);

    return (
        <div className='single-wr'>
            <div className='single-hdr'>
            <h2>Marvel Heroes</h2>
                <Link to='/'>
                    <p>Homepage</p>
                </Link>
            </div>
        </div>
    )
}