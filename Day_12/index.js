import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import A from './03.jpg';

function Data(){
 return (
   <h1>Images with Audio</h1>
 )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div className='he'>
  <Data/>
  </div>
  <img src={A} width={300} height={200} className='img'/>
  <img src={A} width={300} height={200} className='img'/>
  <img src={A} width={300} height={200} className='img'/>
  <img src={A} width={300} height={200} className='img'/>

  <div className='aud'>
  <audio controls>
    <source src='ip.mp3' type='audio/mpeg'/>
  </audio>
  </div>

  <div className='aud'>
  <audio controls>
    <source src='ip.mp3' type='audio/mpeg'/>
  </audio>
  </div>

  <div className='aud'>
  <audio controls>
    <source src='ip.mp3' type='audio/mpeg'/>
  </audio>
  </div>

  <div className='aud'>
  <audio controls>
    <source src='ip.mp3' type='audio/mpeg'/>
  </audio>
  </div>



  <img src={A} width={300} height={200} className='img'/>
  <img src={A} width={300} height={200} className='img'/>
  <img src={A} width={300} height={200} className='img'/>
  <img src={A} width={300} height={200} className='img'/>

  <div className='aud'>
  <audio controls>
    <source src='ip.mp3' type='audio/mpeg'/>
  </audio>
  </div>

  <div className='aud'>
  <audio controls>
    <source src='ip.mp3' type='audio/mpeg'/>
  </audio>
  </div>

  <div className='aud'>
  <audio controls>
    <source src='ip.mp3' type='audio/mpeg'/>
  </audio>
  </div>

  <div className='aud'>
  <audio controls>
    <source src='ip.mp3' type='audio/mpeg'/>
  </audio>
  </div>
  
  
  </>
);

