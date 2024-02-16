import React from 'react'
import  FaUserCircle from "react-icons/bi";

const ResponsiveMenu = ({ showMenu }) => {
    return (
        <div 
        className={`${
            showMenu ? "left-0" : "left-[-100%]"
         } fixed bottom-0 top-0 w-[75%] transition-all
         duration-300`}
         >
            <div className="card">
                {/* user section */}
                <div className='flex items-center justify-start gap-3'>
                   <FaUserCircle size={50} />
                   <div>
                    <h1>Hello User</h1>
                    <h1 className='text-sm text-slate-500'>Premium Users
                    </h1>
                    </div>
                   </div>
                </div>
             </div>
    );
}

export default ResponsiveMenu;