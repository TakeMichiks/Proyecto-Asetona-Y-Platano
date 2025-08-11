import React from "react"

function Navbar() {
    return (
        <nav style={{
        backgroundColor: "#000000ff",
        height: "40px",
        width: "auto",
        color: "white",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: "2rem",
        left: "2.5%",
        right: "2.5%",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        zIndex: "2",
        }}>
        <div className="nav-brand">
            <a href="#" style={{color: "white", textDecoration: "none", fontSize: "1.5rem"}}>
               Mi bilioteca  
            </a>
        </div>
           <ul className="nav-links" style={{ listStyle: "none" , margin: "3rem", display: "flex", gap: "2rem", fontSize:"20px" ,top: 0 , right: 0, position: "fixed"}}>
            <li><a href="#" style={{ color: "white", textDecoration: "none" }}> Inicio</a></li>
            <li><a href="#" style={{ color: "white", textDecoration: "none" }}> Bibilioteca</a></li>
            <li><a href="#" style={{ color: "white", textDecoration: "none" }}> Acerca de</a></li>

           </ul>
        </nav>
    );
}

export default Navbar;