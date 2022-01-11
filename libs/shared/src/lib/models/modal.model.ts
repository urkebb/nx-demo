
export interface ModalConfig {
  message?: string;
  onConfirm?: any;
  onOverlayClicked?: any;
}

export enum Mode {
  Confirm = 'confirm',
  Ok = 'ok'
}

export class Modal {
  isOpen = false;
  mode = Mode.Ok;
  message = 'Are you sure';
  onConfirm = () => { };
  onOverlayClicked = () => { };
  constructor(config?: any) {
    if (config) {
      Object.assign(this, config)
    }
  }
}
