import './NewMessage.css'
import mins from './mins.png'
import max from './max.png'
import clos from './clos.png'
import closegray from './closegray.png'
import cercle from './cercleclose.png'
import A from './A.png'
import img2 from './img2.png'
import img3 from './img3.png'
import galary from './galary.png'
import trash from './trash.png'
export default function NewMessage() {
  return (
    <div className='is-newMessage'>
          <div className='newmeesge-bar'>
                <div>
                      <p>New Message</p>
                </div>
                <div>
                      <img src= {mins} alt="" />
                      <img src={max} alt="" />
                      <img src={clos} alt="" />
                </div>
          </div>
         <div className='is-perant'>
              <p className='to'>To</p>
                <div className="is-tosend">
                    <div className='names-send'>
                              <div className='name-send'>
                                    <span>Jared Black</span>
                                    <img src= {closegray} alt="" />
                              </div>
                      
                            <div className='name-send'>
                                <span>Troy Marsden</span>
                                <img src= {closegray} alt="" />
                            </div>
                      </div>
                      <div className='cercle-close'>
                          <img src={cercle} alt="" />
                      </div>

                </div>     
                
                <p className='to'>Cc</p>
                <span className='Recipients'>Recipients</span>
                <p className='to'>Bcc</p>
                <span className='Recipients'>Recipients</span>
                <span className='Subject'>Subject</span>
            </div>  

            <div className='content-messge'>  </div>
               
           <div className='is-tools'>
                 
                  <div className='imges'>
                       <button> send</button>
                        <img src={A} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={galary} alt="" />
                  </div>
                  <div>
                         <img src={trash} alt="" />
                  </div>
           </div>
    </div>
  )
}
