import { Component, OnInit } from '@angular/core';
import { News } from '../../news.interface';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FavouriteService } from './../../services/favourite.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {
  savedArticles: News[] = [];
  constructor(private router: Router, private http: HttpClient, private favouriteService: FavouriteService) {}

  ngOnInit() {
    this.getSavedArticles();
  }

  showNewsArticle(article: News) {
    this.router.navigateByUrl('/tabs/players/preview', { state: { article } });
  }

  getSavedArticles(){
    this.favouriteService.getAllSavedArticles().then((articles) => {
      this.savedArticles = articles;
    });
  }

}
