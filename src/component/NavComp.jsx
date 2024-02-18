import React from 'react';
import { Link } from 'react-router-dom';
import './style/navcomp.css'

const NavComp = () => {
    return (
        <div className='container'>

            <nav class="navbar navbar-expand-lg">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse mt-3" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item" style={{paddingRight:'4vw',paddingLeft:'4vw'}}>
                            <Link to='/' >ALL</Link>
                        </li>
                        <li class="nav-item" style={{ paddingRight: '4vw', paddingLeft: '4vw' }}>
                            <Link to='/Fullstack' >FULL STACK DEVELEPMENT</Link> 
                        </li>
                        <li class="nav-item" style={{ paddingRight: '4vw', paddingLeft: '4vw' }}>
                            <Link to='/Datascience' >DATA SCIENCE</Link>
                        </li>
                        <li class="nav-item" style={{ paddingRight: '4vw', paddingLeft: '4vw' }}>
                            <Link to='/CyberSecurity'>CYBER SECURITY</Link>
                        </li>
                        <li class="nav-item" style={{ paddingRight: '4vw', paddingLeft: '4vw' }}>
                            <Link to='/Career'>CAREER</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavComp;