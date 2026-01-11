import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  imports: [],
  templateUrl: './productdetails.html',
  styleUrl: './productdetails.css',
})

export class ProductDetail implements OnInit {
    product: any;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            if (history.state && history.state.product) {
                this.product = history.state.product;
            }
        });
    }
  }
