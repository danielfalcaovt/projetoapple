import { useEffect, useState } from "react";


export default function Footer() {
    const [copy, setCopy] = useState();
    const [seconds, setSeconds] = useState(0);
    
    function getCopyrightYear() {
        const completeDate = new Date();
        const year = completeDate.getFullYear();
        return year;
    };  
    
    function handleCopyright() {
        const year = getCopyrightYear();
        setCopy(`Copyright ${year} © All rights reserved.`);
    };

    useEffect(()=>{
        handleCopyright();
    },[]);

    return(
        <footer>
            <h1>{copy}</h1>
        </footer>
    );
};