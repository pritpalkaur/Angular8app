import { Component, OnInit, ViewChild } from '@angular/core';
import { first } from 'rxjs/operators';

import { product } from '@app/_models';
import { productService, AuthenticationService } from '@app/_services';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  loading = false;
  products: product[];
  clickMessage = '';
  displayedColumns: string[] = ['position', 'name', 'price', 'categoryId'];
  dataSource: product[];// =  ELEMENT_DATA;
  productObj:product;
  //form data related var 

  myForm: FormGroup;

  constructor(private productService: productService,public fb: FormBuilder) { }
 
  ngOnInit() {
      this.loading = true;
      this.productService.getAll().pipe(first()).subscribe(products => {
        this.loading = false;
        this.dataSource = products;
       this.products = products;
    });
    this.reactiveForm();
}

reactiveForm() {
  this.myForm = this.fb.group({
    description: [''],
    price: [''],
    categoryId:['']
  })
}
onClickMe() {
  var person = { 
    Name:"Tom", 
    Description:"Hanks" ,
    Price:111,
    CategoryId:1
 }; 
  this.productService.postProduct(person).pipe(first()).subscribe(products => {
    this.loading = false;
 
});
  console.log(this.myForm.value);
}


editField: string;
personList: Array<any> = [
  { id: 1, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
  { id: 2, name: 'Guerra Cortez', age: 45, companyName: 'Insectus', country: 'USA', city: 'San Francisco' },
  { id: 3, name: 'Guadalupe House', age: 26, companyName: 'Isotronic', country: 'Germany', city: 'Frankfurt am Main' },
  { id: 4, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
  { id: 5, name: 'Elisa Gallagher', age: 31, companyName: 'Portica', country: 'United Kingdom', city: 'London' },
];

awaitingPersonList: Array<any> = [
  { id: 6, name: 'George Vega', age: 28, companyName: 'Classical', country: 'Russia', city: 'Moscow' },
  { id: 7, name: 'Mike Low', age: 22, companyName: 'Lou', country: 'USA', city: 'Los Angeles' },
  { id: 8, name: 'John Derp', age: 36, companyName: 'Derping', country: 'USA', city: 'Chicago' },
  { id: 9, name: 'Anastasia John', age: 21, companyName: 'Ajo', country: 'Brazil', city: 'Rio' },
  { id: 10, name: 'John Maklowicz', age: 36, companyName: 'Mako', country: 'Poland', city: 'Bialystok' },
];

updateList(id: number, property: string, event: any) {
  console.log(id);
  const editField = event.target.textContent;
  this.personList[id][property] = editField;
}

remove(id: any) {
  console.log(id);
  this.awaitingPersonList.push(this.personList[id]);
  this.personList.splice(id, 1);
}

add() {
  if (this.awaitingPersonList.length > 0) {
    const person = this.awaitingPersonList[0];
    this.personList.push(person);
    this.awaitingPersonList.splice(0, 1);
  }
}

changeValue(id: number, property: string, event: any) {
  console.log(id);
  this.editField = event.target.textContent;
}


}