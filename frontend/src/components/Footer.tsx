import React from 'react';

const Footer: React.FC = () =>{
    return(
        <footer className={"p-10 flex flex-row gap-4 justify-center border-t border-t-camel"}>
            <div className={"flex-1"}>
                <p>© VentureSpective 2024</p>
            </div>
            <div className={"flex-1 flex flex-col gap-1"}>
                <p className={"hover:text-camel hover:font-bold"}>FAQs</p>
                <p className={"hover:text-camel hover:font-bold"}><a href={"/contact"}>Contact us</a></p>
            </div>
            <div className={"flex-1 flex flex-col gap-1"}>
                <p className={"hover:text-camel hover:font-bold"}>Terms of Service</p>
                <p className={"hover:text-camel hover:font-bold"}>Privacy Policy</p>
            </div>
        </footer>
    );
};

export default Footer;