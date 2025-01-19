import { Link } from 'react-router-dom';

function Navbar() {



  return (

      <div className="flex flex-row justify-between m-10">
        
        {/* Logo */}
        <div className="font-logo font-extralight text-xl" >
          Venturespective
        </div>

        {/* Links */}
        <div className="flex justify-center items-center text-sm">
          <ul className="w-[500px] flex flex-row justify-evenly items-center text-center border rounded-lg border-camel">
          <li className="flex-1 border-r border-camel py-1">
              <Link to="/" className="hover:underline">
                Estimator
              </Link>
            </li>
            <li className="flex-1 border-r border-camel py-1">
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

export default Navbar
