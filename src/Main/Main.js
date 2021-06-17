import '../Main/main.scss';
import { Card } from "../Card/Card";
import { Picked } from "../Picked/Picked";

export const Main = (props) => {
    const { data } = props;

    return (
        <div className='main-wr'>
            <div className='heroes'>
                {data.map(e => {
                    return <Card key={e.id} data={e} />
                })}

            </div>
            <div className='picks'>
                <h2>- My team -</h2>
                <Picked />
                <Picked />
                <Picked />
                <Picked />
            </div>
        </div>
    )
}