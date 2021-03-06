import React from 'react';
import frame from '../../images/header.png';

const HeaderMain = () => {
    return (
    <main style = {{height : '800px'}} className = 'row d-flex align-items-center'>
        <div className="col-md-5 offset-md-1">
            <h1 style = {{color: '#0D052E' , fontSize: '120px' , fontWeight: '800' , fontFamily: 'Merriweather serif'}}>Florence<br/>agency</h1>
            <p className = 'text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, voluptatum.<br/>Lorem ipsum dolor sit amet consectetur adipisicing <br/> elit. Quod non in, odit error corrupti illo!</p>
            <button style ={{backgroundColor: '#1BD5BE' , color: "white" , border: 'none' , borderRadius: '30px 0px 30px 0px' , padding: '20px 30px 20px 30px' , fontWeight: 800}} className = 'btn btn-primary'>See Pricing</button>
        </div>
        <div className="col-md-6">
            <img className = 'img-fluid' src={frame} alt="frame"/>
        </div>
    </main>
    );
};

export default HeaderMain;