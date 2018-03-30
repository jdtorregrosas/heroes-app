import { Component, Input } from '@angular/core';

@Component({
    selector: 'hero-overview',
    templateUrl: './heroOverview.component.html',
    styleUrls: ['./heroOverview.component.scss']
})
export class heroOverviewComponent{
    @Input() hero;
    @Input() position;

    name: string;
    height: number;
    nickname: string;
    image: string;
    cardinal: string;

    constructor(){}

    ngOnInit() {
        this.name = this.hero._name;
        this.height = this.hero._height;
        this.nickname = this.hero._nickname;
        this.image = this.hero._picture;

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