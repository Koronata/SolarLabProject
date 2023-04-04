import { IAdvertisement } from "./advertisement";

export interface IAdvertisementResponse {
  code: number;
  status: string;
  data: IAdvertisement[]
}
