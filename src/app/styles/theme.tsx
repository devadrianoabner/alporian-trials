const theme = {
  colors: {
    background: "#0f0f0f",
    surface: "#1e1e1e",
    primary: "#ffb703",
    secondary: "#8ecae6",
    text: "#ffffff",
    danger: "#e63946",
    success: "#2a9d8f",
    gray: "#999999",
  },
  fonts: {
    heading: "Verdana, Geneva, sans-serif",
    body: "Arial, Helvetica, sans-serif",
  },
  borderRadius: "12px",
  spacing: (factor: number) => `${factor * 8}px`,
};

export default theme;
