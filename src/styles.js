// styles.js
export const styles = {
  borderGradientStyle: {
    border: "4px solid",
    borderRadius: "8px",
    borderImageSlice: 1,
    borderImageSource: "linear-gradient(45deg, #bd6823, #000)",
    backgroundColor: "transparent",
    padding: "2px", // Añade espacio para que el borde sea visible
    position: "relative", // Asegura que el borde se aplique correctamente
    overflow: "hidden", // Asegura que el borde no se salga del contenedor
  },

  buttonGradientStyle: {
    background: "linear-gradient(45deg, #b26835, #dba06b)", // Degradado de fondo
    color: "#ffffff", // Color del texto
    borderRadius: "50px",
    border: "none", // Elimina cualquier borde predeterminado
    fontWeight: "bold",
    fontFamily: "Graphik",
    fontSize: "xl",
    padding: "12px 24px", // Ajusta el padding si es necesario
    cursor: "pointer", // Cambia el cursor para indicar que es clickeable
    textAlign: "center",
  },

  colorTitulos: {
    color: "#bd671f",
    fontFamily: "Graphik",
  },
  colorTitulos2: {
    color: "#bd671f",
    fontFamily: "Times",
  },
  borderButtonGradientStyle: {
    borderRadius: "50px", // Mantén el borde redondeado
    padding: "2px", // Añade espacio para que el borde degradado sea visible
    backgroundImage:
      "linear-gradient(black, black), linear-gradient(45deg, #bd6823, #ffffff)", // Fondo negro y borde con degradado
    backgroundOrigin: "padding-box, border-box", // Controla cómo se aplica el fondo
    backgroundClip: "content-box, border-box", // Mantiene el degradado visible en el borde
  },

  gradientNegroStyle: {
    background: "linear-gradient(to top, black, transparent)", // Degradado de negro a transparente
    // Si necesitas bordes redondeados, ajusta según sea necesario
    padding: "10px", // Ajusta el padding según sea necesario
  },
};
