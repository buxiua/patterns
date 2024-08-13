import { IButton, WebButton, WindowsButton } from "./button";

export interface IDialog {
  createButton(): IButton;
}

export class WindowsDialog implements IDialog {
  createButton(): IButton {
    return new WindowsButton();
  }
}

export class WebDialog implements IDialog {
  createButton(): IButton {
    return new WebButton();
  }
}
