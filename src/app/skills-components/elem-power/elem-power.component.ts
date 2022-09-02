import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elem-power',
  templateUrl: './elem-power.component.html',
  styleUrls: ['./elem-power.component.scss']
})
export class ElemPowerComponent implements OnInit {

  @Input() powerComp: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
