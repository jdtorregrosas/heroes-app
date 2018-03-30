import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'hero-overview',
    templateUrl: './heroOverview.component.html',
    styleUrls: ['./heroOverview.component.scss']
})
export class HeroOverviewComponent implements OnInit {
    @Input() hero;
    @Input() position;

    cardinal: string;

    constructor(){}

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
}