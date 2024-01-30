import './SendFor.css';
import trash from './trash.png';
import A from './A.png';
import rpple from './rpple.png';
import galary from './galary.png';
import img2 from './img2.png';
import img3 from './img3.png';
import arwoo from './arwoo.png';
import closegray from './closegray.png';

export default function SendFor() {
    return (
        <section className='SendFor'>
            <div className='top'>
                <div className='top2'>
                <img src={rpple} alt="" />
                <img src={arwoo} alt="" />
                <div className='To-Cc-Bcc'>
                    <div className='To'> <span>to:</span> <p>Jared Black</p></div>
                    <div className='To'> <span>Cc:</span> <p>Someone Else</p></div>
                    <div className='To'> <span>Bcc:</span> <p>And Another Person </p></div>
                </div>
                </div>
                <img src={closegray} alt="" />
            </div>
            <div className='down'>
                <div className='down2'>
                    <button>Send</button>
                    <img src={A} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={galary} alt="" />
                </div>
                <div>
                    <img src={trash} alt="" />
                </div>
            </div>
        </section>
    )
}
