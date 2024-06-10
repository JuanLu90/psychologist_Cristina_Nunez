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
    redirectTo: "/#",
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

// "#d2a363"

// Color Principal: #d8e3cd (un tono suave de verde)
// Color Secundario: #a5c4a5 (un verde más oscuro, para contraste)
// Color de Énfasis: #7a9f7a (un verde aún más oscuro, para resaltar elementos importantes)
// Color Complementario: #cddee3 (un azul muy claro, que complementa el verde principal)
// Color de Fondo: #f7f9f7 (un blanco casi puro, para un fondo limpio)
// Color de Texto: #4d4d4d (un gris oscuro, para textos principales)
// Color de Enlace: #6094a5 (un azul medio, para enlaces y llamadas a la acción)
