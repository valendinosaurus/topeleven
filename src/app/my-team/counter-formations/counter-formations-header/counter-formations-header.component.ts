import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-formations-header',
  templateUrl: './counter-formations-header.component.html',
  styleUrls: ['./counter-formations-header.component.scss']
})
export class CounterFormationsHeaderComponent {

  @Input() mentality: 'offensive' | 'neutral' | 'defensive';

}
