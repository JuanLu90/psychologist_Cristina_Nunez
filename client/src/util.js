export const colors = {
  greenLight: "#d8e3cd",
  greenMedium: "#a5c4a5",
  greenDark: "#7a9f7a",
  brownDark: "#4C1D1E",
};

export const headerCategories = [
  {
    redirectTo: "/",
    name: "Inicio",
  },
  { redirectTo: "/quien-soy", name: "¿Quién soy?" },
  {
    redirectTo: "#",
    name: "Método de trabajo",
    subCategories: [
      { redirectTo: "/modelo-terapeutico", name: "Modelo terapéutico" },
      { redirectTo: "/terapia-online", name: "Terapia online" },
      { redirectTo: "/como-empezar", name: "¿Como puedo empezar?" },
    ],
  },
  { redirectTo: "/supervisiones", name: "Supervisiones" },
  { redirectTo: "/contacto", name: "Contacto" },
];
