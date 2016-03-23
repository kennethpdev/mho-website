import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {JsonService} from '../../../services/JsonService';

@Component({
  selector: 'quests',
  templateUrl: 'app/components/content/quests/quests.html',
  styleUrls: ['app/components/content/quests/quests.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})

export class Quests {
    constructor(private jsonService: JsonService) {

    }

    ngOnInit() {

    }
}
