import './strred.css';
import Loading from './Loading.png'
import lifet from './ChevronLeft.png'
import right from './ChevronRight.png'
import star2 from './Email Star2.png'
import OneMessage from '../inpox/OneMessage/OneMessage';


export default function strred() {
     return (
          <section className='stared-is'>
               <div className='is-inboox'>
                    <div className='is-Select-All'>
                         <input type="checkbox" />
                         <span>Select All</span>
                         <span><img src={Loading} alt="" /></span>
                         <span>1-50 of 200</span>
                         <span> <img src={lifet} alt="" /></span>
                         <span> <img src={right} alt="" /></span>
                    </div>
                    <OneMessage
                        star = {star2}
                        sendedName = "Jared Black"
                    />
                    <OneMessage
                        star = {star2}
                        sendedName = "Jared Black"
                    />
                    <OneMessage
                        star = {star2}
                        sendedName = "Jared Black"
                    />


               </div>

          </section>
     )
}
