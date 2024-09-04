import { Component, OnInit, HostBinding, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { LanguageService } from 'src/app/Services/language.service';

@Component({
  selector: 'app-books-categories',
  templateUrl: './books-categories.component.html',
  styleUrls: ['./books-categories.component.css']
})
export class BooksCategoriesComponent {

  customOptions: OwlOptions = {
    loop: true,
    rtl: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
  categoryTitle: string = '';
  allCategories: { categoryId: string, nameKey: string, image: string }[] = [];
  language: string = 'en';

  constructor(
    private route: ActivatedRoute,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const categoryId = params['categoryId'];
      this.updateCategoryData(categoryId);
    });

    this.translateService.onLangChange.subscribe(() => {
      const categoryId = this.route.snapshot.params['categoryId'];
      this.updateCategoryData(categoryId);
    });
  }

  private updateCategoryData(categoryId: string) {
    this.allCategories = [
      { categoryId: '1', nameKey: 'BOOKS.BOOKS_LIST.TITLES.NAME1', image: './assets/Images/book1.svg' },
      { categoryId: '2', nameKey: 'BOOKS.BOOKS_LIST.TITLES.NAME2', image: './assets/Images/book1.svg' },
      { categoryId: '3', nameKey: 'BOOKS.BOOKS_LIST.TITLES.NAME3', image: './assets/Images/book1.svg' },
      { categoryId: '4', nameKey: 'BOOKS.BOOKS_LIST.TITLES.NAME4', image: './assets/Images/book1.svg' },
      { categoryId: '5', nameKey: 'BOOKS.BOOKS_LIST.TITLES.NAME5', image: './assets/Images/book1.svg' },
    ];

    const category = this.allCategories.find(cat => cat.categoryId === categoryId);
    if (category) {
      this.translateService.get(category.nameKey).subscribe((translatedTitle: string) => {
        this.categoryTitle = translatedTitle;
      });
    }
  }
}