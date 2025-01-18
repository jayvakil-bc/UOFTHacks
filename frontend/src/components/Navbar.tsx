import React from 'react'

function Navbar() {
  return (
    <div className="w-full h-[100px] border border-sky-500">

      <div className="flex flex-row justify-between p-10 ">
        
        {/* Logo */}
        <div>
          Venturespective
        </div>

        {/* Buttons */}
        <div>
          <ul className="flex flex-row">
            <li> Estimator</li>
            <li> DoraHacks Entry</li>
            <li> Team </li>
          </ul>
        </div>

      </div>
    

    </div>
  )
}

export default Navbar
