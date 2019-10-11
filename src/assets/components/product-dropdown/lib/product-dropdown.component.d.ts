import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SurescriptsProduct } from './product.model';
export declare class ProductDropdownComponent implements OnInit {
    private http;
    ssoBaseUrl: string;
    constructor(http: HttpClient);
    products: Array<SurescriptsProduct>;
    ngOnInit(): void;
}
