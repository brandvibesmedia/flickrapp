import {Component, OnInit, Directive, ViewChild} from "@angular/core";
import {FlickrService} from "../flickr.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [FlickrService]
})

export class HomeComponent implements OnInit {
    title = 'app works!12';
    desc: string = 'Info';
    custId: string = '';
    map: any = {};
    responseText: string = '';

    confirmTrip() {
    }

    onNotify(message: {}): void {
    }

    calculateAndDisplayRoute() {
    }

    clickedMarker(label: string, index: number) {
        this.desc = label;
    }

    redrawMarkers() {
    }

    getPrivateMethod( myClass:any, methodName:string ) : any {
        return myClass[methodName];
    }

    constructor(private flickrService: FlickrService) {
    }
    getPostalCode(address_components: google.maps.GeocoderAddressComponent[]) : string {
        return '';
    }

    selectCustomer(custId: string): void {
        this.custId = custId;
    }

    ngOnInit() {
    }
}
export interface marker {
    lat: number;
    lng: number;
    iconUrl?: string,
    label?: string;
    draggable: boolean;
}