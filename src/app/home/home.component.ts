import { Component, OnInit } from '@angular/core';
import { HomePageService } from 'src/app/service/homepage-service/homepage.service';
import { HomepageServiceResultsArrayModal } from 'src/app/common/modals/home-page-service-result-parameter-modal.ts/home.page.service.result.property.modal';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public homePageData : Array<HomepageServiceResultsArrayModal>

  constructor(private _homePageService : HomePageService){}
  
  ngOnInit(): void {
   this._homePageService.fetchHomePageService().subscribe((data)=>{
     this.homePageData = data.results;
     console.log(this.homePageData);
   })
  }

}
//  simple comment