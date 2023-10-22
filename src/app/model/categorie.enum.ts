export enum Categorie {
  PROBLEME_TECHNIQUE = "PROBLEME_TECHNIQUE",
  FACTURATION = "FACTURATION",
  SERVICE_CLIENT = "SERVICE_CLIENT",
}
export const FileTypeLabelMapping: Record<Categorie, String> = {
  [Categorie.PROBLEME_TECHNIQUE]: "PROBLEME_TECHNIQUE",
  [Categorie.FACTURATION]: "FACTURATION",
  [Categorie.SERVICE_CLIENT]: "SERVICE_CLIENT",
};
