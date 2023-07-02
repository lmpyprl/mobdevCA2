import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../../news.interface';
import { FavouriteService } from './../../services/favourite.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
})
export class TeamDetailsPage implements OnInit {

  article: News | undefined;
  isSaved : boolean = false;

  constructor(private route: ActivatedRoute, private favouriteService: FavouriteService) {}

  ngOnInit() {
    this.article = history.state.article;

    if (this.article) {
      this.favouriteService.isSaved(this.article).then(isFav => {
        this.isSaved = isFav;
      });
    }
  }

  openURL() {
    if (this.article && this.article.url) {
      window.open(this.article.url);
    }

  
  }
  saveArticle() {
    if (this.article) {
      this.favouriteService.saveArticle(this.article).then(() => {
        this.isSaved = true;
      });
    }
  }

  unsaveArticle() {
    if (this.article) {
      this.favouriteService.unsaveArticle(this.article).then(() => {
        this.isSaved = false;
      });
    }
  }

}
