import { useState, createContext } from "react";
// import { IStyle, TStyle } from "../utils/types";

// Si tiene "{}" quiere decir que es un objeto con propiedades el type.
type TStyle = "default" | "pride" | "halloween";

// tipado de los Valores por defecto del context.
type TStyleContext = {
  changeStyle: (actualStyle: TStyle) => void;
  style: "default" | "pride" | "halloween";
};

// Valores por defecto del context.
const styleContext = createContext<TStyleContext>({
  changeStyle: () => {},
  style: "default",
});

// Nombre para visualizar el context en el inspector.
styleContext.displayName = "Actual theme";

// Props de Children.
interface IStyleProps {
  children: JSX.Element | JSX.Element[];
}

// Provider del context de styles.
const StyleProvider = ({ children }: IStyleProps) => {
  const [style, setStyle] = useState<TStyle>("default");

  const changeStyle = (changeStyle: TStyle) => {
    setStyle(changeStyle);
  };
  // Value = la fn que cambia el estilo y el useState style NO el setStyle.
  return (
    <styleContext.Provider value={{ changeStyle, style }}>
      {children}
    </styleContext.Provider>
  );
};

export default StyleProvider;
