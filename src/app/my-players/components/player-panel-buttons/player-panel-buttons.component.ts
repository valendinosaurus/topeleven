import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-player-panel-buttons',
  templateUrl: './player-panel-buttons.component.html',
  styleUrls: ['./player-panel-buttons.component.scss']
})
export class PlayerPanelButtonsComponent {

  @Input() editMode: boolean;

  @Output() editClicked = new EventEmitter<void>();
  @Output() closeClicked = new EventEmitter<void>();
  @Output() deleteClicked = new EventEmitter<void>();
  @Output() saveClicked = new EventEmitter<void>();

  onClickEdit(): void {
    this.editClicked.emit();
  }

  onClickClose(): void {
    this.closeClicked.emit();
  }

  onClickDelete(): void {
    this.deleteClicked.emit();
  }

  onClickSave(): void {
    this.saveClicked.emit();
  }

  getIconClass(): { [key: string]: boolean } {
    return {
      'player-panel-buttons__icon-edit-mode': this.editMode,
      'player-panel-buttons__icon-normal-mode': !this.editMode
    };
  }

}
