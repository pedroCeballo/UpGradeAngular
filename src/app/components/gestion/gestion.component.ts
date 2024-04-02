import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private productsService: ProductsService) {
    this.formulario = this.formBuilder.group({
      name: [''],
      price: [''],
      description: [''],
      image: [''],
      stars: [''] 
    });
  }

  name: string = 'Complete Santa Cruz 8.0'
  price: string = '100$'
  description: string = 'Complete Santa Cruz nuevo'
  image: string = 'https://monarksupply.com/16497-thickbox_default/skate-completo-8-marcas-skate-n17.jpg'
  stars: string = '5'

  async onSubmit() {
      await this.productsService.addItem(this.formulario.value);
      Swal.fire("Producto creado correctamente!");
      this.formulario.reset();
  }
}
