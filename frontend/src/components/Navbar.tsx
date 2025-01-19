import {NavLink} from 'react-router-dom';

function Navbar() {
    const navLiStyle = "flex items-center justify-center w-full h-full py-1 px-1";
    const liStyle = "flex-1 rounded-lg";

    return (
        <div className="flex flex-row justify-between mx-10 my-6 overflow-hidden">

            {/* Logo */}
            <div className="font-logo font-extralight text-deepgreen text-2xl">
                VentureSpective
            </div>

            {/* Links */}
            <div className="flex justify-center items-center text-sm ">
                <ul className="w-[540px] flex flex-row justify-evenly items-center text-center border rounded-lg border-deepgreen overflow-hidden">
                    <li className={liStyle}>
                        <NavLink to="/" className={({ isActive}) =>
                            isActive ? `${navLiStyle} bg-camel text-white`
                                : `${navLiStyle}`}>
                            Estimator
                        </NavLink>
                    </li>
                    <li className="flex-1">
                        <NavLink to="/results" className={({ isActive}) =>
                            isActive ? `${navLiStyle} bg-camel text-white`
                                : `${navLiStyle}`}>
                            Last Results
                        </NavLink>
                    </li>
                    {/*<li className={liStyle}>*/}
                    {/*    <NavLink to="/dorahacks" className={({ isActive}) =>*/}
                    {/*        isActive ? `${navLiStyle} bg-camel text-white`*/}
                    {/*            : `${navLiStyle}`}>*/}
                    {/*        DoraHacks Entry*/}
                    {/*    </NavLink>*/}
                    {/*</li>*/}
                    {/*<li className="flex-1">*/}
                    {/*    <NavLink to="/team" className={({ isActive}) =>*/}
                    {/*        isActive ? `${navLiStyle} bg-camel text-white`*/}
                    {/*            : `${navLiStyle}`}>*/}
                    {/*        Team*/}
                    {/*    </NavLink>*/}
                    {/*</li>*/}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
