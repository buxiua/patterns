import { Ship, Transporter, Truck } from "./Product";

export interface TransporterFactory {
  create(): Transporter;
}

export class TruckFactory implements TransporterFactory {
  create(): Transporter {
    return new Truck();
  }
}

export class ShipFactory implements TransporterFactory {
  create(): Transporter {
    return new Ship();
  }
}
