import React from 'react';
import { Link } from 'react-router-dom';
import './Errorpage.css';


export default function Errorpage() {
  return (
    <>
   {/*  <div className='errorpage'>
    <div id="notfound">
<div className="notfound">
<div className="notfound-404">
<h1>Oops!</h1>
<h2>404 - The Page can't be found</h2>
</div>
<Link to="/">Go TO Homepage</Link>
</div>
</div>
</div> 


<div className='errorpage mt-100'>
<div id="notfound">
<div className="notfound">
<div className="notfound-404">
<h1>404</h1>
<h2>Page not found</h2>
</div>
<Link to='/'>Homepage</Link>
</div>
</div>
</div>*/}

<div className='errorpage mt-100'>
<div id="notfound">
<div class="notfound">
<div class="notfound-404">
<h1>Oops!</h1>
</div>
<h2>404 - Page not found</h2>
<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
<Link to="/">Go To Homepage</Link>
</div>
</div>
</div>
    </>
  )
}