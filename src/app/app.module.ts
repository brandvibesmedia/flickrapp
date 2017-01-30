import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {FlickrAppComponent} from './app.component';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

@NgModule({
    declarations: [
        FlickrAppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        Ng2FilterPipeModule
    ],
    entryComponents: [],
    providers: [],
    bootstrap: [FlickrAppComponent]
})
export class MaterialAppModule {
}
