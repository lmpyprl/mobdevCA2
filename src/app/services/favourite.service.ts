import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { News } from 'src/app/news.interface';


const STORAGE_KEY = 'savedArticles';


@Injectable({
  providedIn: 'root'
})
export class FavouriteService {


  constructor(private storage: Storage) {
    this.storage.create();
   }


  getAllSavedArticles() : Promise<News[]>  {
    return this.storage.get(STORAGE_KEY);
  }


  isSaved(article : News) {
    return this.getAllSavedArticles().then(result => {
        return result && result.some(savedArticle => savedArticle.url === article.url);
    });
  }


  saveArticle(article : News) {
    return this.getAllSavedArticles().then(result => {
      if (result) {
        result.push(article);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [article]);
      }
    });
  }


  unsaveArticle(article : News) {
    return this.getAllSavedArticles().then(result => {
      if (result) {
        const index = result.findIndex(savedArticle => savedArticle.url === article.url);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
      return null;
    });
  }


}



