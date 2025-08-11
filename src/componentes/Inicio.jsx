import React, { useState, useEffect } from "react";
import bannerImage from "./imagenes/Banner.png";
import image2 from "./imagenes/image2.jpg";
import image1 from "./imagenes/image1.jpg";

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
    // Nuevo estilo para el segundo contenedor
  const textContainer2Style = {
    backgroundColor: "#333", // Un color diferente para distinguirlo
    color: "white",
    padding: "20px",
    margin: "15px",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: isMobile ? "center" : "center",
    textAlign: isMobile ? "center" : "center",
    maxWidth: isMobile ? "90%" : "100%",
    marginTop: isMobile ? "90px" : "0",
  };
  const contenedor2 = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    margin: "20px 0",
  };

  const imageAndTextStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  const image2Style = {
    maxWidth: isMobile ? "90%" : "100%",
    width: "400px", 
    height: "250px", 
    objectFit: "cover",
    borderRadius: "15px",
  };

  return (
    <>
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
      <div style={contenedor2}>
        <div style={imageAndTextStyle}>
          <img src={image2} alt="imagen2" style={image2Style} />
          <p>Esta es una descripción para la primera imagen.</p>
        </div>
        <div style={imageAndTextStyle}>
          <img src={image1} alt="imagen1" style={image2Style} />
          <p>Esta es una descripción para la segunda imagen.</p>
        </div>
      </div>
    </>
  );
}

export default Inicio;