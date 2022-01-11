import { Injectable } from '@angular/core';
import { Modal, ModalConfig, Mode } from '../models/modal.model';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modal: Modal;

  constructor() {
    this.modal = new Modal();
  }

  confirm(config?: ModalConfig): void {
    this.modal = new Modal({ isOpen: true, mode: Mode.Confirm, ...config });
  }

  ok(config?: ModalConfig): void {
    this.modal = new Modal({ isOpen: true, mode: Mode.Ok, ...config });
  }

  close() {
    this.modal.isOpen = false;
  }
}
