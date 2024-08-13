import { ShipFactory, TransporterFactory } from "./Factory";

const factory: TransporterFactory = new ShipFactory();
const transporter = factory.create();
transporter.run();
