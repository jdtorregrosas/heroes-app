import { Component, Input, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'hero-overview',
    templateUrl: './heroOverview.component.html',
    styleUrls: ['./heroOverview.component.scss']
})
export class HeroOverviewComponent implements OnInit {
    @Input() hero;
    @Input() position;

    cardinal: string;

    constructor(
        @Inject(Router) private router: Router
    ){}

    ngOnInit() {

        switch(this.position){
            case 1: 
                this.cardinal = 'st';
                break;
            case 2:
                this.cardinal = 'nd';
                break;
            case 3:
                this.cardinal = 'rd';
                break;    
            default:
                this.cardinal = 'th'
        }
    }

    goToDetail(id){
        this.router.navigate(['hero/'+id]);
    }
}