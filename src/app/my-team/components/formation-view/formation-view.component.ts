import { Component, Input } from '@angular/core';
import { Formation } from 'src/app/shared/models/formation.interface';

@Component({
  selector: 'app-formation-view',
  templateUrl: './formation-view.component.html',
  styleUrls: ['./formation-view.component.scss']
})
export class FormationViewComponent {

  @Input() formation: Formation;

}
