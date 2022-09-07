import { useEffect } from "react";

const Navbar = () => {
    
    useEffect(() => {
        console.log(`Navbar component did mount`);
    }, []);

    return (
        <header>
            <strong><em>React-Tube-App</em></strong>
        </header>
    );
}

export default Navbar;