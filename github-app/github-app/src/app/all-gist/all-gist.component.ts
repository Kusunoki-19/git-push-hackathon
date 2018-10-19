import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {GistService} from '../gist-single/gist.service';

import {GistItem} from'../gist-single/gist-item';

@Component({
    selector: 'app-all-gist',
    templateUrl: './all-gist.component.html',
    styleUrls: ['./all-gist.component.css']
})
export class AllGistComponent implements OnInit {

    gists : GistItem[];
    readLimit : number = 10;

    constructor(
        private apiService: ApiService,
        private gistService : GistService,
    ) {}

    ngOnInit() {
        this.gistService.getGistItems(this.readLimit);
        this.gists = this.gistService.getGists(); //connect gistService.gistItem -- this.gists
    }

    reloadGists() {
        this.gistService.getGistItems(this.readLimit);
        this.gists = this.gistService.getGists(); //connect gistService.gistItem -- this.gists
    }


}
