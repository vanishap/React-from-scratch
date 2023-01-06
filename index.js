import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reactlogo from './images/reactlogo.jpg';
import login from './images/login.png';


const Header = ()=>{
    return (
        <div className="app"> 
            <div >
                <img className='react-logo'src={reactlogo}  alt='React logo'/>    
            </div>
            <div>
                <input type='text'/>    
            </div>  
            <img className='login-logo'src={login} alt="login logo" />  
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);