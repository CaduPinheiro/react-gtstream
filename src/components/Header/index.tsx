import { Link } from 'react-router-dom'
import './Header.css';

interface Props {
    page: string
}

export const Header: React.FC<Props> = (props) => {
    return (
        <div className='Header'>
            <div className='Header--titles'>
                <div className='Header'>
                    <div className='Logo' >
                        <a><Link to="/">GTStream</Link></a>
                    </div>
                    <div className='Links'>
                        <a><Link to="/">Home</Link></a>
                        <a><Link to="/movies">Filmes</Link></a>
                        <a><Link to="/series">Séries</Link></a>
                        <a><Link to="/contact">Contato</Link></a>
                    </div>
                </div>
            </div>
        </div>
    )
}