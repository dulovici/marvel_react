import '../Loader/loader.scss';
import gif from '../Loader/loader.gif';

export const Loader = () => {
    return <img src={gif} alt='loader' className='loader'></img>
}