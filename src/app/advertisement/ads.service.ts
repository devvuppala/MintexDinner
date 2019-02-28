
import { Injectable } from "@angular/core";
import { Http } from "@angular/http"
import { Advertisement } from "./ads.model";

@Injectable()
export class AdsService {

    constructor(private http : Http) {

    }

    getAdds() {

       let ads: Advertisement[] = [{
        name:'Mac Book Pro',
        price: 1999.99,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJih-ngmBfaWonzeYKy1JBPkbn8_R6nbVp1bcSE0hgyfOBjoT'
       }, {
        name:'Tennis Shoe - Nike',
        price: 100.99,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ59IkhambYKmSjQaZCh8JtxHdnm6AGPQUt9z2m9zb3QWf2-Xus'
       }, {
        name:'Apple TV',
        price: 300.99,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThmUnsveWreS8l1WZisoPpx3HaCzL630BmL-oLv_unDbA876La'
       }, {
        name:'iPhone XS',
        price: 999.99,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPGb9P8zuqr1MLJdF7J_jvLYLeG7IkYS71SXK9txbrRs471pX'
       }];

       return ads;
    }
}