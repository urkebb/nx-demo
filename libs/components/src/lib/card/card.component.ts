import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'viber-bot-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() className!: string;

  // constructor() { }

  ngOnInit(): void { }
}
