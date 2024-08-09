import { Component } from '@angular/core';
import { ProductStateService } from '../../data-access/products-state.service';
import { inject } from '@angular/core';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers: [ProductStateService],

})
export default class ProductListComponent {
  productsState=inject(ProductStateService)

}
