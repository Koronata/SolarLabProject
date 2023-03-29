import { ICompany } from "./company";

export interface ICompanyResponse {
  code: number;
  status: string;
  data: ICompany[]
}
