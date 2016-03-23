import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {JsonService} from '../../../services/JsonService';

@Component({
  selector: 'armors',
  templateUrl: 'app/components/content/armors/armors.html',
  styleUrls: ['app/components/content/armors/armors.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})

export class Armors {
    typeArray = [{
      "type": "(B)"
    }, {
      "type": "(G)"
    }];
    armors: Array<Object>;

    constructor(private jsonService: JsonService) {

    }

    ngOnInit() {
      this.jsonService.getJSON('armor')
      .subscribe((armors) => {
        this.armors = armors;
        console.log(this.armors);
      });
    }
}
