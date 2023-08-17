import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-etoile',
  templateUrl: './etoile.component.html',
  styleUrls: ['./etoile.component.css']
})
export class EtoileComponent implements OnInit {
 @Input() rate: any;
 @Output() notify:EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onChange()
  {
    this.notify.emit(this.rate);
  }

}
