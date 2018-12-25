import { HomepageServiceResultsArrayModal } from "src/app/common/modals/home-page-service-result-parameter-modal.ts/home.page.service.result.property.modal";

export interface IHomePageService{
    count : number;
    next : string;
    previous: string;
    results : Array<HomepageServiceResultsArrayModal>;
}