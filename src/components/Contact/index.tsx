import './Contact.css';
import { Header } from '../Header'

export const Contact: React.FC<{}> = (props) => {
    return (
        <div className='Contact'>
            <div className='Image'>
                oi
            </div>
            <div className='Info'>
                <div className='SegueAi'>
                    <h1>Quer saber mais?</h1>
                </div>
                <div className='Icons'>
                    <div className='Icons--facebook'>
                        { <img className='iconFacebook' src='https://openvisualfx.com/wp-content/uploads/2019/10/1509135364flat-facebook-logo-png-icon-circle.png' alt='imagem' />}
                        <a>Facebook: @GTStream</a>
                    </div>
                    <div className='Icons--instagram'>
                        { <img className='iconInstagram' src='http://blog.delupo.com.br/wp-content/uploads/2017/12/174590_5164106c214b4eb7bae96fd762fdc6af-mv2.png' alt='imagem' />}
                        <a>Instagram: @GTStream</a>
                    </div>
                    <div className='Icons--twitter'>
                        { <img className='iconTwitter' src='https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png' alt='imagem' />}
                        <a>Twitter: @GTStream</a>
                    </div>
                </div>
            </div>
        </div>
    )}