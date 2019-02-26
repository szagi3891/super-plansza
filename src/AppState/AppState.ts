import { observable, action } from 'mobx';

export type PageType = 'home' | 'news' | 'contact' | 'cennik' | 'lokalizacje' | 'wypozyczalnia';

export class AppState {
    @observable page: PageType = 'home';

    @action setPage(newPage: PageType) {
        this.page = newPage; 
    }
}