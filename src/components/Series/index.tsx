import './Series.css';
import { Serie } from '../../shared/interfaces'

interface Props {
    list: Array<Serie>
}

export const Series: React.FC<Props> = (props) => {
    const tsxList: any[] = [];
    props.list.forEach(serie => {
        tsxList.push(<a className='allInfo' key={serie.title}> 
            <div className='series'>
                    <div className='series--info'>
                        <div className='series--black'></div>
                        <div className='series--title'>{serie.title}</div>
                    </div>
                    <div className='imagebackground'>
                        { <img className='imageserie' src={serie.image} alt='imagem' />}
                    </div>
            </div>
            <div className='series-all-btn'>
                <div className='series-btn'>
                    <a>Assistir</a>
                </div>
                <div className='series-btn-more'>
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