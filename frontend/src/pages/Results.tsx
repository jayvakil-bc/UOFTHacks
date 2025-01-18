import Button from "../components/Button.tsx";
import {Link} from "react-router-dom";
import {useState} from "react";

export const Results = ()=>{
    const superStyle ="align-super text-xs";
    const emphasis ="font-bold";
    const zeroto49 = "text-red";
    const fiftyto75 = "text-yellow";
    const seventysixto100 = "text-deepgreen";

    const [showForm, setShowForm] = useState(false);
    const defaultEmailForm = {
        "fname": "", "lname": "", "email": "Enter Your Email"
    };

    const [emailForm, setEmailForm]
        = useState(defaultEmailForm);

    const navitems = [
        {name: "Summary", href:"#summary"},
        {name: "Demographics", href:"#demographics"},
        {name: "Break-Even Analysis", href:"#breakeven"},
        {name: "Competitors", href:"#competitors"},
        {name: "Information you entered", href:"#iue"},
        {name: "Rerun", href:"#rerun"},
    ];

    const columns = [
        { id: 1, header: 'Percentage', accessor: 'percentage' },
        { id: 2, header: 'Age', accessor: 'age' },
        { id: 3, header: 'Ethnicity', accessor: 'ethnicity' },
        { id: 3, header: 'Restaurant', accessor: 'restaurant' },
        { id: 4, header: 'Market Share', accessor: 'marketshare' },
        { id: 5, header: 'Location', accessor: 'location' },
    ];

    function sendEmail(){
        console.log("email sent to ", emailForm.email);
    }
    function rerun(){
        console.log("rerun button pressed");
    }
    return(
        <div className={"flex flex-row gap-16 pr-16"}>
            {showForm ?
                <form method={"get"}>
                    <form noValidate onSubmit={e => e.preventDefault()}>
                    <div className="grid items-center min-w-full">

                        {/*Account Section*/}
                        <p className={"text-3xl mb-6"}>Editing User</p>
                        <div className={"grid grid-cols-2 gap-4"}>
                            <label htmlFor={"email"}>Email Address</label>
                            <input value={emailForm.email} id={"email"} name={"email"} type={"email"}/>
                        </div>
                        <Button onClick={sendEmail}>Send Report to Your Email</Button>
                    </div>
                    </form>
                </form>

                :
                // show nothing
                <></>}
            {/*sidebar*/}
            <div className={"flex bg-beige max-w-[165px] h-screen sticky top-0 items-center"}>
                <ul className="flex flex-col gap-8 w-full">
                    {navitems.map((link) => (
                        <li key={link.name} >
                            <Link to={link.href} className="text-sm flex flex-col p-2 w-full hover:text-white hover:font-medium hover:bg-camel">
                                <p>{link.name}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/*main content*/}
            <div className={"flex flex-col items-center"}>
                <div className={"min-w-[150px] max-w-[650px] pb-14"}>
                <h1><span className={fiftyto75}>50%</span> Success Likelihood</h1>
                <p>Your Hot Pot Restaurant in Markham is 50% likely to break even in about 10 years given the majority Chinese population and 100-person daily foot traffic in the area.</p>
                </div>

                <div className={"bg-beige rounded-xl px-16 py-12 max-w-[1050px] text-left"}>
                    <h2 id={"summary"}>Summary</h2>
                    <p>Markham comprises a 30% Chinese population with a median household income of $55,000 a year. Since your Hot Pot restaurant is quite expensive, this would be an occasional treat for the population. More so, the foot traffic in Markham is relatively low so customers would mainly make planned visits that are not spontaneous.</p>

                    <h3>Restaurant Strengths</h3>
                    <ol className={"list-decimal"}>
                        <li>Based in a majority Chinese area</li>
                        <li>Booming delivery industry</li>
                        <li>Unsaturated industry</li>
                    </ol>

                    <h3>Restaurant Weaknesses</h3>
                    <ol className={"list-decimal"}>
                        <li>Expensive food</li>
                        <li>Low foot traffic in area</li>
                        <li>Expensive for median household income</li>
                    </ol>

                    <h2>Demographics</h2>

                    <h3>Population</h3>
                    <p>There were 50,000 Markham residents as of the 2022 census<span className={superStyle}>[1]</span>.</p>

                    <h3>Ethnicity</h3>
                    {/*parse data and display*/}
                    <p>Table to be inserted.</p>
                    <p>Breakdown based on Toronto Opens Data [2].</p>

                    <h3>Age</h3>
                    <p>Table to be inserted.</p>
                    <p>Breakdown based on Toronto Opens Data [2].</p>

                    <h2>Break-Even Analysis</h2>
                    <p>Break-even point = Total fixed costs / (Sales price per unit - Variable cost per unit)

                        Say you rent an artisan coffee kiosk for $500 a month and pay yourself a monthly salary of $1500 ($2000 total fixed costs). You buy coffee beans and other supplies in bulk for an average of $1 per cup of coffee (variable costs per unit) and price each coffee at $5 (sales price per unit).

                        Your BEP would be:

                        500 = $2000 / ($5 - $1)

                        Using this formula, you'd have to sell 500 meals every month to break even. After that, you're turning a profit on each coffee you sell. Within this context, your restaurant should turn a profit in about 10 years.</p>

                    <h2>Competitors in the Area</h2>
                    <p>There are <span className={emphasis}>25</span> other Hot Pot restaurants in Markham, with <span className={emphasis}>Hot Pot King</span> holding the largest market share.</p>
                    <p>Table of competitors to be inserted.</p>

                    <p>form from Home page to be inserted with fields filled in</p>
                    <form method={"get"} id={"rerun"} className={"flex flex-row gap-4 justify-center pt-14"}>
                        <Button onClick={rerun}>Rerun Analysis</Button>
                        <Button buttonVariant={"sec"} type={"reset"}>Clear</Button>
                    </form>






                </div>
            </div>
        </div>
    )
};

export default Results;