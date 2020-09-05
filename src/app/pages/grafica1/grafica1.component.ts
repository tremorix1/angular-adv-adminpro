import { Component } from '@angular/core';
import { DonaComponent } from '../../components/dona/dona.component';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
public labels1: string[] = ['Pan', 'Refrescos', 'Burritos'];
public data1 = [
  [10, 15, 40],
];
}
