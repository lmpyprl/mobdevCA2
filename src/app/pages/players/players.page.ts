import { Component, OnInit } from '@angular/core';
import { News } from '../../news.interface';
import { Router } from '@angular/router';
import { FavouriteService } from './../../services/favourite.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {
  savedArticles: News[] = [];
  constructor(private router: Router, private favouriteService: FavouriteService) {}

  ngOnInit() {
    this.getSavedArticles();
  }

  ionViewWillEnter() {
    // Call the API again when the page is about to enter
    this.getSavedArticles();
  }

  showNewsArticle(article: News) {
    this.router.navigateByUrl('/tabs/Saved/preview', { state: { article } });
  }

  getSavedArticles(){
    this.favouriteService.getAllSavedArticles().then((articles) => {
      this.savedArticles = articles;
    });
  }

}
