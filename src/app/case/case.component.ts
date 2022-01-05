import { Component, Input, OnInit } from '@angular/core';
import { State } from './case.model';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss'],
})
export class CaseComponent implements OnInit {
  @Input()
  public case: State;

  constructor() {}

  ngOnInit(): void {}
}
