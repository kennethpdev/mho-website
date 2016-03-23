import {Injectable} from 'angular2/core';
import {Http, URLSearchParams} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonService {
	constructor(private http: Http) {}

	getJSON(type: string){
		return this.makeRequest(`json/${type}.json`);
	}

	private makeRequest(path: string){
		let url = `app/${ path }`;
		return this.http.get(url)
			.map((res) => res.json());
	}
}
