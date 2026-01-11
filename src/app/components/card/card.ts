import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit{
  cards: any[]=[];
  //
  constructor(
    private api_service: Apiservice,
    private cdr: ChangeDetectorRef,
    private router : Router
  ){ }
  
  ngOnInit(){
    this.api_service.getProducts().subscribe((data:any)=>{
      this.cards=data
      this.cdr.detectChanges()
    })
  }
  viewProductDetail(product: any) {
    this.router.navigate(['/product', product.id], { state: { product } });
  }
}
