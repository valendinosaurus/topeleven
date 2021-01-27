/* eslint-disable @typescript-eslint/naming-convention */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player } from 'src/app/shared/models/player.class';

@Component({
  selector: 'app-player-panel-header',
  templateUrl: './player-panel-header.component.html',
  styleUrls: ['./player-panel-header.component.scss']
})
export class PlayerPanelHeaderComponent {

  @Input() player: Player;
  @Input() editMode: boolean;

  @Output() playerNameCleared = new EventEmitter<void>();

  clearName(): void {
    this.player.name = '';
  }

  getBackgroundClass(): {[key: string]: boolean} {
    return {
      'player-panel-header__background-dark': !this.editMode,
      'player-panel-header__background-edit': this.editMode
    };
  }

}
