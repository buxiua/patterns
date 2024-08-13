export interface IButton {
  render(): void;
}

export class WindowsButton implements IButton {
  render(): void {
    console.log("this is WindowsButton");
  }
}

export class WebButton implements IButton {
  render(): void {
    console.log("this is WebButton");
  }
}
