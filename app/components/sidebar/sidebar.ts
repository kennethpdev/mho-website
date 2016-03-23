import {Component} from 'angular2/core';

declare var jQuery: any;

@Component({
  selector: 'sidebar',
  templateUrl: 'app/components/sidebar/sidebar.html',
  styleUrls: ['app/components/sidebar/sidebar.css'],
  providers: [],
  directives: [],
  pipes: []
})

export class Sidebar {

  links: Array<Object>;

  constructor() {
    this.links = [
      {link: 'faq', name: 'FAQ' },
      {link: 'armors', name: 'Armors' },
      {link: 'jewelry', name: 'Jewelry' },
      {link: 'weapons', name: 'Weapons' },
      {link: 'monsters', name: 'Monsters' },
      {link: 'quests', name: 'Quests' },
      {link: 'cats', name: 'Cats' },
      {link: 'gathering', name: 'Gathering' },
      {link: 'food', name: 'Food' },
      {link: 'vip', name: 'VIP' },
      {link: 'grouping', name: 'Grouping' },
      {link: 'crafting', name: 'Crafting' },
      {link: 'materials', name: 'Materials' },
      {link: 'translation', name: 'Translation' }
    ];
  }

  ngOnInit() {
      jQuery('.button-collapse').sideNav({
          menuWidth: 350
      });
      console.log(jQuery);
  }
}
