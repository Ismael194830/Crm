import './Covreg.css';
import logo from './Icon prefix ↓.png'
export default function Covreg() {
  return (
    <section className='covreg'>
  <div className='parant' >
            <div className="is-lift">
                  <div>
                      <h2>Signing Information</h2>
                      <p>Completed Voice Signature:</p>
                      <span>Hannah Wells</span>
                  </div>
                  <div>
                      <h2>Coverage Preferences</h2>
                      <p>Coverage Interests:</p>
                      <span>No coverage, needs help covering burial costs.</span>
                  </div>  
                  <div>
                      <h2>Health Questions</h2>
                      <p>Tobacco/nicotine in the past 12 months?</p>
                      <span>NO</span>
                  </div>
            </div>


            <div className="is-scond">
                  <div>
                        <p>Contract Signed:</p>
                        <span>June 23, 2023</span>
                  </div>
                  <div>
                        <p>Remains will be:</p>
                        <span>Cremated</span>
                  </div>
                  <div>
                        <p>Height: <span>5” 10’</span></p>
                  
                  </div>
            </div>


            <div className="is-thred">
                  <div>
                        <p>Agent:</p>
                        <span>Hannah Wells</span>
                  </div>
                  <div>
                        <p>Desired Coverage Amount:</p>
                        <span>$15,000</span>
                  </div>
                  <div>
                        <p>Weight: </p>
                        <span>180 lbs.</span>
                  
                  </div>
            </div>
  </div>

                  <div className='is-textaria'>
                      <p>Medical history</p>  
                       <textarea placeholder='None'></textarea >
                       <p>Has medical concerns:</p> 
                  </div>
                           
                  
                  <div className="is-buottn">
                        <button id='is-btn1'><span><img src={logo} alt="" /></span>Delet</button>
                        <button id='is-btn2'>Begin Signing</button>
                  </div>
               
    </section>
  )
}
