import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, of, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { allFormations } from 'src/app/shared/const/formation-data.const';
import { Formation } from 'src/app/shared/models/formation.interface';

@Component({
  selector: 'app-counter-formations-list-view',
  templateUrl: './counter-formations-list-view.component.html',
  styleUrls: ['./counter-formations-list-view.component.scss']
})
export class CounterFormationsListViewComponent implements OnInit {

  allFormations$: Observable<Formation[]>;
  filteredFormations$: Observable<Formation[]>;

  filterArgument$ = new ReplaySubject<string>();

  constructor() { }

  ngOnInit(): void {
    this.filterArgument$.next('');

    this.allFormations$ = of(allFormations);

    this.filteredFormations$ = combineLatest([
      this.allFormations$,
      this.filterArgument$
    ]).pipe(
      map(
        ([formations, argument]: [Formation[], string]) =>
          formations.filter(
            (formation: Formation) => {
              const normalizedFormation = formation.formationName.replace(/\D/g, '');
              const normalizedArgument = argument.replace(/\D/g, '');

              return normalizedFormation.indexOf(normalizedArgument) > -1;
            }
          )
      )
    );
  }

  filter(filterArgument: string): void {
    this.filterArgument$.next(filterArgument);
  }

}
