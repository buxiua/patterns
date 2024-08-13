export interface Transporter {
  run():void;
}

export class Truck implements Transporter {
  run() {
    console.log(Truck.name + " is running");
  }
}

export class Ship implements Transporter {
  run() {
    console.log(Ship.name + " is running");
  }
}
