import {Component, inject} from '@angular/core';
import {CarService} from './car.service';
import {LowerCasePipe} from '@angular/common';
import {DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: '<p> {{ carService.getCars() }} </p>',
})
export class App {
  carService = inject(CarService);
}

@Component({
  selector: 'app-root',
  template: ` <p>Car Listing: {{ display }}</p> `,
})
export class App1 {
  carService = inject(CarService);

  display = this.carService.getCars().join(' ⭐️ ');
}


@Component({
  selector: 'app-root',
  template: ` {{ username | lowercase }} `,
  imports: [LowerCasePipe],
})
export class App22 {
  username = 'yOunGTECh';
}



@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li>Number with "decimal" {{ num | number: '3.2-2' }}</li>
      <li>Date with "date" {{ birthday | date: 'medium' }}</li>
      <li>Currency with "currency" {{ cost | currency }}</li>
    </ul>
  `,
  imports: [DecimalPipe, DatePipe, CurrencyPipe],
})
export class Appp {
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}
