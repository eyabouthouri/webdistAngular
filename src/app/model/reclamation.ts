import { Categorie } from "./categorie.enum";
import { Evaluation } from "./evaluation.enum";

export class Reclamation{
  idReclamation: number;
  nom: string;
  sujet: string;
  description: string;
  dateSoumission: Date;
  categorie: Categorie;
  evaluation: Evaluation;
  etat: boolean;
  pieceJointe: string;

}