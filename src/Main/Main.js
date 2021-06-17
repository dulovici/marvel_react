import '../Main/main.scss';
import { useEffect, useState } from 'react';
import { Card } from "../Card/Card";
import { Picked } from "../Picked/Picked";

export const Main = (props) => {
    const key = '57a4249a4879ba67cbdc852312c377d8';
    const [data, setData] = useState([]);
    const [myTeam, setMyTeam] = useState([]);


    useEffect(() => {
        fetch(`http://gateway.marvel.com/v1/public/characters?apikey=${key}`)
            .then(res => res.json())
            .then(dta => setData(dta.data.results))
    }, [])

    const addMember = (id) => {
        const hero = data.find(e => e.id === id);
        myTeam.includes(hero)
        ?setMyTeam([...myTeam])
        :setMyTeam([...myTeam,hero])
    }

    

    return (
        <div className='main-wr'>
            <div className='heroes'>
                {data.map(e => {
                    return <Card key={e.id} data={e} id={e.id} 
                    addMember={addMember}/>
                })}
            </div>

            <div className='picks'>
                <h2>- My team -</h2>
                {myTeam.map(e => {
                    return <Picked key={e.id} data={e}></Picked>
                })}
                
            </div>
        </div>
    )
}