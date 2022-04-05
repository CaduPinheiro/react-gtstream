import './Home.css';
import { Header } from '../Header'

export const Home: React.FC<{}> = (props) => {
    return (
        <div className='Home'>
            <h1>Tudo o que você quer assistir</h1>
            <h2>Por apenas R$ 29,99 por mês</h2>
            <div className='Home--btn'>
                <a>Assine já!</a>
            </div>
        </div>
    )}