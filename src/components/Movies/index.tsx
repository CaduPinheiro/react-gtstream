import './Movies.css';
import { Movie } from '../../shared/interfaces'

interface Props {
    list: Array<Movie>
}

export const Movies: React.FC<Props> = (props) => {
    const tsxList: any[] = [];
    props.list.forEach(movie => {
        tsxList.push(<a className='allInfo' key={movie.title}> 
            <div className='movies'>
                    <div className='movies--info'>
                        <div className='movies--black'></div>
                        <div className='movies--title'>{movie.title}</div>
                    </div>
                    <div className='imagebackground'>
                        { <img className='imagemovie' src={movie.image} alt='imagem' />}
                    </div>
            </div>
            <div className='movies-all-btn'>
                <div className='movies-btn'>
                    <a>Assistir</a>
                </div>
                <div className='movies-btn-more'>
                    <a>Saiba mais</a>
                </div>
            </div>
        </a>)
    });
    return <>
    <ul>
        {tsxList}
    </ul>
    </>
}