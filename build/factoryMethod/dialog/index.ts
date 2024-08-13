import { IDialog, WindowsDialog } from "./dialog";

const dialog: IDialog = new WindowsDialog();

const button = dialog.createButton();

button.render();
