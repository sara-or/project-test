import React from 'react'
import {
    BrowserRouter as Router,
    Link
}
from 'react-router-dom';
export default function MenuProject() {
    return (
        <>
<nav class="nav nav-pills nav-justified navMenu" >
<a class="nav-item nav-link" href="#"><Link to="/page1"> page1</Link></a>
  <a class="nav-item nav-link" href="#"> <Link to="/page2">page2</Link></a>
  <a class="nav-item nav-link" href="#">   <Link to="/page3">page3</Link></a>
  <a class="nav-item nav-link" href="#">   <Link to="/try">trypage1</Link></a>
  
</nav>
</>
    )
}
