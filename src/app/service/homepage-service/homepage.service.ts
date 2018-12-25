import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLConfig } from 'src/app/common/url/url.config';
import { ArrayType } from '@angular/compiler/src/output/output_ast';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';
import { IHomePageService } from '../../common/interfaces/homepage/IHomePageService.interface';

@Injectable()
export class HomePageService extends URLConfig{
    constructor(private _http : HttpClient){super()}

    fetchHomePageService() : Observable<IHomePageService>{
        alert("Calling server");
        return this._http.get<IHomePageService>(this.getHomePageServiceURL())
    }
}