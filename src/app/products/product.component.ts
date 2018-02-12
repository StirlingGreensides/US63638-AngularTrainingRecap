import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() id: number
  @Input() name: string;
  @Input() description: string;
  @Input() value: string;
  @Input() price: number;

  constructor() { }

  ngOnInit() {
  }

}
