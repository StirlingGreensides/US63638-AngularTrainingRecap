import { Component, Input } from '@angular/core';

@Component({
  selector: '[app-product]',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() id: number
  @Input() name: string;
  @Input() description: string;
  @Input() value: string;
  @Input() price: number;

  constructor() { }
}
