import { Product } from './../../../product/product.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  title: string = 'Novo produto';
  btnColor: string = 'primary';
  strAction: string = 'Salvar';
  strCancel: string = 'Cancelar';
  disabled: boolean = false;

  @Input() data: Product;

  @Output() create = new EventEmitter();
  @Output() update = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() cancel = new EventEmitter();

  private executeUpdate: boolean;
  private executeDelete: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.executeUpdate = false;
    this.executeDelete = false;

    if (this.update.observers.length > 0) {
      this.title = 'Alterar produto';
      this.btnColor = 'accent';
      this.strAction = 'Alterar';
      this.executeUpdate = true;
    }
    else if (this.delete.observers.length > 0) {
      this.title = 'Excluir produto';
      this.btnColor = 'warn';
      this.strAction = 'Excluir';
      this.executeDelete = true;
      this.disabled = true;
    }
  }

  onAction() {
    if (this.executeUpdate) {
      this.update.emit();
    }
    else if (this.executeDelete) {
      this.delete.emit();
    }
    else {
      this.create.emit();
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
