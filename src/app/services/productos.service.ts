import { Products } from "../interfaces/producto.interface";

export class ProductsService {
    
    productos: Products[] = []

    addItem(addItem: Products) {
        this.productos.push(addItem)
    }
}

