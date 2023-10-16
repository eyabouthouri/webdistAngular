export enum Evaluation {
  BASSE = "BASSE",
  MOYENNE = "MOYENNE",
  ELEVEE = "ELEVEE",
  TRES_ELEVEE = "TRES_ELEVEE",

}
export const FileTypeLabelMapping: Record<Evaluation, String> = {
  [Evaluation.BASSE]: "BASSE",
  [Evaluation.MOYENNE]: "MOYENNE",
  [Evaluation.ELEVEE]: "ELEVEE",
  [Evaluation.TRES_ELEVEE]: "TRES_ELEVEE",
};
