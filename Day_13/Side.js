
import logo from './side.gif';

import lock from './lock.webp';
import drag from './drag.jpg';
import element from './elements.jpg';
import speed from './speed.jpg';
import ta from './ta.jpg';
import vali from './vali.jpg';



function Data(props){
    return(
        <>
        <h3>Learning Center</h3>
                <div>
                    <div><img src={require(`${props.y}`)} width={80} height={80} className='smallimg'/></div>
                    <div className='para2'>The Importance of Cybersecurity for Small Businesses</div>
                </div>
        </>
    );
}


function Side() {
    return (
        <>
            <div className="side">
                <h2>Support Us</h2>
                <img src={logo} alt="Description of the image" />

                <h2>Resources</h2>
                <p id='para'>
                Bespoke sites by DBWD <br/>
                clearwateragency.com.au <br/>
                Edge Marketing <br/>
                </p>

                <Data y="./lock.webp"/>
                <Data y="./lock.webp"/>
                <Data y="./lock.webp"/>
                <Data y="./lock.webp"/>
                <Data y="./lock.webp"/>

            </div>

        </>
    );

}

export default Side;