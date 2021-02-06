import { Component, Input } from '@angular/core';
import { Formation } from 'src/app/shared/models/formation.interface';

@Component({
  selector: 'app-counter-formation-view',
  templateUrl: './counter-formation-view.component.html',
  styleUrls: ['./counter-formation-view.component.scss']
})
export class CounterFormationViewComponent {

  @Input() mentality: 'offensive' | 'neutral' | 'defensive';
  @Input() formation: Formation;

}
