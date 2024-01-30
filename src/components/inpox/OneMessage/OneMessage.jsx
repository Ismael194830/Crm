
import pointe from './../pointe.png'
import Attach from './../Email Star2.png'


export default function OneMessage({unreade , sendedName , Attach ,star}) {

    return (
        <div className='is-messge'>
            <div className='unreade'>
                {unreade && <img src={pointe} alt="" />}
            </div>
            <div>
                <div className='is-name'>
                    <input type="checkbox" />
                    <p>{sendedName}</p>
                    <span id='date'>06/21 @ 10:07 AM</span>
                </div>
                <div className='is-pointe'>
                    <p>Re: New Insurance Policy</p>
                </div>

                <div className='is-star'>
                    <span>This is the beginning of the email with is  so that user can...</span>
                    <img src={star} alt="" />
                </div>
                {Attach && <div className='download'>
                    <img src={Attach} alt="" />
                    <span>FileName.jpg</span>
                </div>}
            </div>

        </div>
    )
}
