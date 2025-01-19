import Button from "../components/Button.tsx";
import {useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import { Link, Element } from "react-scroll";

export const Results = ()=>{
    const superStyle ="align-super text-xs";
    const emphasis ="font-bold";
    const fiftyto75 = "text-yellow";


    const [showForm, setShowForm] = useState(false);
    const [confirmation, setConfirmation] = useState(false);

    const navitems = [
        {name: "Summary", href:"summary"},
        {name: "Demographics", href:"demographics"},
        {name: "Break-Even Analysis", href:"breakeven"},
        {name: "Competitors", href:"competitors"},
        {name: "Information you entered", href:"iue"},
        {name: "Rerun", href:"rerun"},
    ];


    const form = useRef("");
    function sendEmail(event: React.FormEvent){
        event.preventDefault();
        emailjs.sendForm("service_mfymiy9", 'REPORT', form.current,
                {publicKey: "Tbl6EK2tpx27fsbFP"}
            ).then(() => {
                console.log('SUCCESS!');
                setShowForm(false);
                setConfirmation(true)
                setTimeout(() =>setConfirmation(false),800);
                },
                (error) => {
                    console.log('FAILED...', error.name);
                },
            );
    }
    function rerun(){
        console.log("rerun button pressed");
    }

    const textboxstyle = "bg-transparent w-full mt-1 py-1 px-2 border border-camel";
    return(
        <div className={"flex flex-row gap-16 pr-16 border-t border-camel"}>
            {showForm ?
                <div className={"absolute rounded-xl fixed top-0 left-0 z-10 flex items-center justify-center backdrop-grayscale min-w-full min-h-screen"}>
                <form ref={form} onSubmit={sendEmail}
                      /*TODO make this a hidden form with the analytics filled in as the message*/
                      className={"bg-beige border border-camel p-8"}>
                    <div className="grid items-center min-w-full">
                        <div className={"grid grid-cols-2 gap-4"}>
                            <label>Name</label>
                            <input type="text" name="to_name" className={textboxstyle}/>
                        </div>
                        <div className={"grid grid-cols-2 gap-4"}>
                            <label>Email</label>
                            <input type="email" name="user_email" className={textboxstyle}/>
                        </div>
                        <div className={"grid grid-cols-2 gap-4"}>
                            <label>Message</label>
                            <textarea name="message" className={textboxstyle}/>
                        </div>
                        <Button type="submit">Send</Button>
                        <Button type="reset" onClick={()=>{setShowForm(false)}}>Close</Button>
                    </div>
                </form>
                </div>
                :
                // show nothing
                <></>}
            {confirmation ?
                <div className={"absolute rounded-md fixed top-0 left-0 z-10 grid items-center justify-center backdrop-grayscale min-w-full min-h-screen"}>
                <div className={"bg-beige border border-camel p-8"}>
                    <div className="grid items-center min-w-full">
                        <p>Sent Success!</p>
                    </div>
                </div>
                </div>
                :
                // show nothing
                <></>}


            {/*sidebar*/}
            <div className={"flex bg-beige max-w-[165px] h-screen sticky top-0 items-center"}>
                <ul className="flex flex-col gap-8 w-full">
                    {navitems.map((link) => (
                        <li key={link.name} >
                            <Link
                                to={link.href}
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="text-sm flex flex-col p-2 w-full hover:text-white hover:font-medium hover:bg-camel hover:cursor-pointer"
                                activeClass={""}
                            >{link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/*main content*/}
            <div className={"flex flex-col items-center"}>
                <div className={"min-w-[150px] max-w-[650px] py-14"}>
                <h1><span className={fiftyto75}>50%</span> Success Likelihood</h1>
                <p>Your Hot Pot Restaurant in Markham is 50% likely to break even in about 10 years given the majority Chinese population and 100-person daily foot traffic in the area.</p>
                </div>

                <div className={"bg-beige rounded-xl px-16 py-12 max-w-[1050px] text-left"}>
                    <Element id={"summary"} name={"summary"}><h2>Summary</h2></Element>
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

                    <Element id={"demographics"} name={"demographics"}><h2>Demographics</h2></Element>

                    <h3>Population</h3>
                    <p>There were 50,000 Markham residents as of the 2022 census<span className={superStyle}>[1]</span>.</p>

                    <h3>Ethnicity</h3>
                    {/*parse data and display*/}
                    <p>Table to be inserted.</p>
                    <p>Breakdown based on Toronto Opens Data [2].</p>

                    <h3>Age</h3>
                    <p>Table to be inserted.</p>
                    <p>Breakdown based on Toronto Opens Data [2].</p>

                    <Element id={"breakeven"} name={"breakeven"}><h2>Break-Even Analysis</h2></Element>
                    <p>Break-even point = Total fixed costs / (Sales price per unit - Variable cost per unit)

                        Say you rent an artisan coffee kiosk for $500 a month and pay yourself a monthly salary of $1500 ($2000 total fixed costs). You buy coffee beans and other supplies in bulk for an average of $1 per cup of coffee (variable costs per unit) and price each coffee at $5 (sales price per unit).

                        Your BEP would be:

                        500 = $2000 / ($5 - $1)

                        Using this formula, you'd have to sell 500 meals every month to break even. After that, you're turning a profit on each coffee you sell. Within this context, your restaurant should turn a profit in about 10 years.</p>

                    <Element id={"competitors"} name={"competitors"}><h2>Competitors in the Area</h2></Element>
                    <p>There are <span className={emphasis}>25</span> other Hot Pot restaurants in Markham, with <span className={emphasis}>Hot Pot King</span> holding the largest market share.</p>
                    <p>Table of competitors to be inserted.</p>

                    <p>form from Home page to be inserted with fields filled in</p>

                    <Element id={"rerun"} name={"rerun"}>
                    <form className={"flex flex-row gap-4 justify-center pt-14"}>
                        <Button onClick={rerun}>Rerun Analysis</Button>
                        <Button buttonVariant={"sec"} type={"reset"}>Clear</Button>
                    </form>
                    </Element>

                    <Button onClick={()=>{setShowForm(true); scrollTo(0,0)}}>Send Report to Your Email</Button>



                </div>
            </div>
        </div>
    )
};

export default Results;