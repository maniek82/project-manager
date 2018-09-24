import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLink from './SignedInLink';
import SignedOutLink from './SignedOutLink.js'



const Navbar = () => {
    return (

        <nav className="nav-wrapper orange lighten-1">
          <div className="container">
            <Link to="/" className="brand-logo">Project manager</Link>
            <SignedInLink/>
            <SignedOutLink/>
          </div>
        </nav>
    )
}

export default Navbar;