import { Component } from '@angular/core';

@Component({
  selector: 'app-about-manual-view',
  templateUrl: './about-manual-view.component.html',
  styleUrls: ['./about-manual-view.component.scss']
})
export class AboutManualViewComponent {

  sectionsToggled = [
    true,
    true,
    true,
    true,
    true,
    true,
    true
  ];

  toggleSection(section: number): void {
    this.sectionsToggled[section] = !this.sectionsToggled[section];
  }
}
