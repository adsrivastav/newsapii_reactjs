import React from 'react'
import { Link } from 'react-router-dom';


const Navbar2=()=> {
  return (
    <>
    <div>
      <div id="navbar">
        <div className="img">
           <h3>NEWS APP</h3>
            </div>
        <ul>
        <li><Link to="/">Home</Link> </li>
            <li><Link to="/business">Business</Link> </li>
            <li><Link to="/health">Health</Link> </li>
            <li><Link to="/entertainment">Entertainment</Link> </li>
            <li><Link to="/general">General</Link> </li>
            <li><Link to="/science">Science</Link> </li>
            <li><Link to="/sports">Sports</Link> </li>
            <li><Link to="/technology">Technology</Link> </li>
        </ul>

    </div>
    </div>
    </>
  )
}

export default Navbar2
