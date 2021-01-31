import { Injectable } from '@angular/core';
import { Notyf } from 'notyf';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  private notyf: Notyf;

  constructor() {
    this.notyf = new Notyf({
      position: {
        x: 'right',
        y: 'top'
      }
    });
  }

  success(message: string): void {
    this.notyf.success(message);
  }

  info(message: string): void {
    this.notyf.success(message);
  }

  warning(message: string): void {
    this.notyf.error(message);
  }

  error(message: string): void {
    this.notyf.error(message);
  }
}
