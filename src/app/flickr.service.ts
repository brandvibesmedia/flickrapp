import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/add/observable/from";
import "rxjs/add/operator/map";

@Injectable()
export class FlickrService {
    constructor(private http: Http) {
    }

    getAllPhotos(): Observable<any[]> {
        return this.http.get('https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=24662369@N07&format=json&nojsoncallback=1')
            .map((res: Response) => res.json());
    }
}
