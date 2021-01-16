export const revisarPresupueto = (presupueto, restante) => {
  let clase;
  if (presupueto / 4 > restante) {
    clase = "alert-danger";
  } else if (presupueto / 2 > restante) {
    clase = "alert-warning";
  } else {
    clase = "alert-success";
  }
  return clase;
};
