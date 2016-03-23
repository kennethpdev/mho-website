import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {JsonService} from '../../../services/JsonService';

declare var jQuery: any;

@Component({
  selector: 'gathering',
  templateUrl: 'app/components/content/gathering/gathering.html',
  styleUrls: ['app/components/content/gathering/gathering.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})

export class Gathering {

  gatheringName: string;
  gatheringImage: string;

  constructor(private jsonService: JsonService) {

  }

  ngOnInit() {
    jQuery('.image-modal-trigger').click((e) => {
        console.log(e);
        e.stopPropagation();
        e.preventDefault();

        let elem = jQuery(e.currentTarget).find('img');
        this.gatheringName = elem.data('name');
        this.gatheringImage = elem.attr('src');

        jQuery('#image-modal').openModal();
    });
  }
}
