import { Reclamation } from "./reclamation";

export class Reponse{
  idReponse: number;
  sujet: string;
  description: string;
  dateReponse: Date;
  pieceJointe: string;
  reclamation: Reclamation;
}