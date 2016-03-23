import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {JsonService} from '../../../services/JsonService';

@Component({
  selector: 'cats',
  templateUrl: 'app/components/content/cats/cats.html',
  styleUrls: ['app/components/content/cats/cats.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})

export class Cats {
    constructor(private jsonService: JsonService) {

    }

    ngOnInit() {

    }
}
