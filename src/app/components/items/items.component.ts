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

    }
}