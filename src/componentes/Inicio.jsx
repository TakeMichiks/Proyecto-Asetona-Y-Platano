import React, { useState, useEffect } from "react";
import bannerImage from "./imagenes/Banner.png";

function Inicio() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Limpia el event listener cuando el componente se desmonte
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define el punto de quiebre para el diseño responsivo
  const breakpoint = 768;
  const isMobile = windowWidth <= breakpoint;

  // Estilos base para el contenedor principal
  const containerStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "20px",
    minHeight: "450px",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    margin: "15px",
    borderRadius: "15px",
    zIndex: "1",
  };

  // Estilos para el contenedor de texto
  const textContainerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: isMobile ? "center" : "flex-start",
    textAlign: isMobile ? "center" : "left",
    maxWidth: isMobile ? "90%" : "50%",
    marginTop: isMobile ? "90px" : "0",
  };

  // Estilos para la imagen
  const imageStyle = {
    maxWidth: isMobile ? "90%" : "40%",
    height: "auto",
    borderRadius: "15px",
    marginTop: isMobile ? "20px" : "0",
  };

  return (
    <div style={containerStyle}>
      <div style={textContainerStyle}>
        <h1 style={{ fontSize: "3rem", margin: "0 0 10px 0" }}>
          El baul de vintage
        </h1>
        <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>
          Ropa única, asequible y con historia. Explora prendas seleccionadas
          con amor para cada estilo y generación.
          <br />
          <br />
          Envíos a toda Venezuela. ¡Compra directo o escríbenos por WhatsApp!
        </p>
      </div>
      <img src={bannerImage} alt="imgan vintage" style={imageStyle} />
    </div>
  );
}

export default Inicio;