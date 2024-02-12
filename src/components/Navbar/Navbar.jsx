import React from 'react';

const Navbar = () => {
  return (
    <>
    <nav>
        <div className="container">
            <div className='flex'>
                <div>
                    <img src={Logo} alt='Logo' />
                    <a href='#'>Digital Agency</a>
                </div>

            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar;