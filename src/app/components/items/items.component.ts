import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item'; //creamos import llamado Item
@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls:  ['./items.component.css']
})
export class ItemsComponent implements OnInit {

    items: Item []=[] ;
    constructor() { }
    ngOnInit(): void {
        this.items = [
            {
                id: 0,
                title: 'practicas',
                price: 10.5,
                quantity: 4,
                completed: false
            },
            {
                id: 1,
                title: 'practicas_profesionalisantes',
                price: 3.5,
                quantity: 8,
                completed: true
            }
        ];
    }
}