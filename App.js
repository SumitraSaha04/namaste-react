import ReactDOM from "react-dom/client";
const Header=()=>{
    return (
        <div className="header-container">
            <div className="logo-container">
                <img alt="Restro Food Logo" className="logo" src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent.png"/>
            </div>
            <div className="nav-links">
                <ul>
                    <li>
                        Home
                    </li>
                     <li>
                        Famous Restro Food
                    </li>
                     <li>
                        About 
                    </li>
                     <li>
                        Contact Us
                    </li>
                     <li>
                        Cart
                    </li>
                </ul>

            </div>


        </div>

    );
}



const  AppLayout=()=>{
    return (
Header()

    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
