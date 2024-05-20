import React from 'react'
import { Link } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons';
import "./index.scss"
function Header() {
  return (
    <div className='header'> 
    <div className="header__logo">
       <img src="https://tse4.mm.bing.net/th?id=OIP.VB6sxpSCRbUIkUykxqj_ZwHaEc&pid=Api&P=0&h=180  " alt=""
       width={100} /> 
       
       </div>
        <div className="header__nav">
        <ul>

            <li><Link to="/">Home</Link></li>
            <li><Link to="/Pet">Movie</Link></li>
            <li><SearchOutlined /></li>
        </ul>
        
        </div>   
        
        </div>
  )
}

export default Header
