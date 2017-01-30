import {Component} from "@angular/core";
import {FlickrService} from "./flickr.service";


@Component({
    selector: 'flickr-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    providers: [FlickrService]
})
export class FlickrAppComponent {
    title: string = "Flickr NASA App";
    errorText: string;
    photos: any[];
    nasaSearch: any;
    photosFilter: any = {
        details: {},
        farm: 1,
        id: "",
        isfamily: 0,
        isfriend: 0,
        ispublic: 1,
        owner: "",
        secret: "",
        server: "",
        title: ""
    };


    constructor(private flickrService: FlickrService) {
        this.flickrService.getAllPhotos().subscribe(response => {
            let _self = this;
            if (response.stat === "ok") {

                response.photos.photo.forEach(ph => {
                    ph.details = null;
                    ph.url = 'https://farm' + ph.farm + '.staticflickr.com/' + ph.server + '/' + ph.id + '_' + ph.secret + '.jpg';
                    this.flickrService.getPhoto(ph.id, ph.secret).subscribe(response => {
                        if (response.stat === "ok") {
                            ph.details = response.photo;
                        }
                    });
                });
                _self.photos = response.photos.photo;

            } else {
                _self.errorText = 'Could not load the photos, please try again';
            }
        });

    }
}