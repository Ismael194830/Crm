import './Inpox.css';
import Loading from './Loading.png'
import lifet from './ChevronLeft.png'
import right from './ChevronRight.png'
import OneMessage from './OneMessage/OneMessage';
import star from './Email Star.png'

export default function Inpox() {
      return (
            <section className='is-parant'>
                  <div className="is-inbox">
                        <div className='is-SelectAll'>
                              <input type="checkbox" />
                              <span>Select All</span>
                              <span><img src={Loading} alt="" /></span>
                              <span>1-50 of 200</span>
                              <span> <img src={lifet} alt="" /></span>
                              <span> <img src={right} alt="" /></span>
                        </div>
                        <OneMessage 
                        unreade= {true}
                        sendedName = "Jared Black"
                        star = {star}
                        />
                        <OneMessage
                        star = {star}
                        sendedName = "Jared Black"
                        />
                        <OneMessage
                        star = {star}
                        sendedName = "Jared Black"
                        />
                        <OneMessage
                        star = {star}
                        sendedName = "Jared Black"
                        />

                  </div>



                  <div className="is-Preview-Emailt">
                        <p>Preview Email</p>
                  </div>
            </section>

      )
}
