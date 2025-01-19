import { Link } from 'react-router-dom';

function Navbar() {



  return (

      <div className="flex flex-row justify-between mx-10 my-6">
        
        {/* Logo */}
        <div className="font-logo font-extralight text-deepgreen text-2xl" >
          VentureSpective
        </div>

        {/* Links */}
        <div className="flex justify-center items-center text-sm">
          <ul className="w-[500px] flex flex-row justify-evenly items-center text-center border rounded-lg border-deepgreen">
          <li className="flex-1 border-r border-deepgreen py-1">
              <Link to="/" className="hover:underline">
                Estimator
              </Link>
            </li>
            <li className="flex-1 border-r border-deepgreen py-1">
              <Link to="/dorahacks" className="hover:underline">
                DoraHacks Entry
              </Link>
            </li>
            <li className="flex-1 py-1">
              <Link to="/team" className="hover:underline">
                Team
              </Link>
            </li>
          </ul>
        </div>

      </div>
    
  )
}

export default Navbar;
