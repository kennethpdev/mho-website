import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Sidebar} from './components/sidebar/sidebar';

import {Home} from './components/home/home';
import {Armors} from './components/content/armors/armors';
import {Jewelry} from './components/content/jewelry/jewelry';
import {Quests} from './components/content/quests/quests';
import {Cats} from './components/content/cats/cats';
import {Gathering} from './components/content/gathering/gathering';

@Component({
  selector: 'main-app',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES, Sidebar],
  templateUrl: 'app/main.html',
  styleUrls: ['app/main.css'],
})
@RouteConfig([
  { path: '/', component: Home, name: 'Home', useAsDefault: true },
  { path: '/armors', component: Armors, name: 'Armors' },
  { path: '/jewelry', component: Jewelry, name: 'Jewelry' },
  { path: '/quests', component: Quests, name: 'Quests' },
  { path: '/cats', component: Cats, name: 'Cats' },
  { path: '/gathering', component: Gathering, name: 'Gathering' },
  { path: '/**', redirectTo: ['Home'] }
])
export class MainApp {
  constructor() {}
}
