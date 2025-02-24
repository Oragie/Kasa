import { getLogements } from "./api";
import { getApropos } from "./api";

export async function fetchLogements() {
  const data = await getLogements();
  return data;
}

// Fonction pour charger les données depuis l'API
export async function fetchApropos() {
  const data = await getApropos();
  return data;
}
