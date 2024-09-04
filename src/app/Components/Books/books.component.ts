import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/Services/language.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  pageTitle: string = '';
  books: { id: string, name: string, image: string, categoryId: string }[] = [];
  filteredBooks: { id: string, name: string, image: string, categoryId: string }[] = [];
  searchTerm: string = '';
  language: string = 'en';

  @HostBinding('attr.dir') get dir() {
    return this.language === 'ar' ? 'rtl' : 'ltr';
  }

  constructor(
    private route: ActivatedRoute,
    private translateService: TranslateService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const categoryId = params['categoryId'];
      this.pageTitle = this.getCategoryTitle(categoryId);
      this.updateBooks(categoryId);
    });

    this.languageService.getLanguage().subscribe(language => {
      this.language = language;
      const categoryId = this.route.snapshot.params['categoryId'];
      this.pageTitle = this.getCategoryTitle(categoryId);
      this.updateBooks(categoryId);
    });
  }

  getCategoryTitle(categoryId: string): string {
    switch (categoryId) {
      case '1': return 'BOOKS.BOOKS_LIST.TITLES.NAME1';
      case '2': return 'BOOKS.BOOKS_LIST.TITLES.NAME2';
      // Add more cases as needed
      default: return '';
    }
  }

  updateBooks(categoryId: string): void {
    const bookTranslations = [
      'BOOKS.BOOKS_LIST.BOOKS.BOOK1',
      'BOOKS.BOOKS_LIST.BOOKS.BOOK2',
      'BOOKS.BOOKS_LIST.BOOKS.BOOK3',
      'BOOKS.BOOKS_LIST.BOOKS.BOOK4',
      'BOOKS.BOOKS_LIST.BOOKS.BOOK5',
      'BOOKS.BOOKS_LIST.BOOKS.BOOK6',
      'BOOKS.BOOKS_LIST.BOOKS.BOOK7',
      'BOOKS.BOOKS_LIST.BOOKS.BOOK8'
    ];

    this.translateService.get(bookTranslations).subscribe(translations => {
      this.books = [
        { id: '1', name: translations['BOOKS.BOOKS_LIST.BOOKS.BOOK1'], image: './assets/Images/book1.svg', categoryId: categoryId },
        { id: '2', name: translations['BOOKS.BOOKS_LIST.BOOKS.BOOK2'], image: './assets/Images/book1.svg', categoryId: categoryId },
        { id: '3', name: translations['BOOKS.BOOKS_LIST.BOOKS.BOOK3'], image: './assets/Images/book1.svg', categoryId: categoryId },
        { id: '4', name: translations['BOOKS.BOOKS_LIST.BOOKS.BOOK4'], image: './assets/Images/book1.svg', categoryId: categoryId },
        { id: '5', name: translations['BOOKS.BOOKS_LIST.BOOKS.BOOK5'], image: './assets/Images/book1.svg', categoryId: categoryId },
        { id: '6', name: translations['BOOKS.BOOKS_LIST.BOOKS.BOOK6'], image: './assets/Images/book1.svg', categoryId: categoryId },
        { id: '7', name: translations['BOOKS.BOOKS_LIST.BOOKS.BOOK7'], image: './assets/Images/book1.svg', categoryId: categoryId },
        { id: '8', name: translations['BOOKS.BOOKS_LIST.BOOKS.BOOK8'], image: './assets/Images/book1.svg', categoryId: categoryId }
      ];
      this.filteredBooks = this.books; // Initialize filteredBooks with all books
    });
  }

  filterBooks(): void {
    // Normalize the search term
    const normalizedSearchTerm = this.searchTerm.toLowerCase().replace(/\s+/g, '');

    if (!normalizedSearchTerm) {
      this.filteredBooks = this.books;
    } else {
      this.filteredBooks = this.books.filter(book => {
        // Normalize the book name
        const normalizedBookName = book.name.toLowerCase().replace(/\s+/g, '');
        return normalizedBookName.includes(normalizedSearchTerm);
      });
    }
  }

  changeLanguage(newLanguage: string): void {
    this.languageService.setLanguage(newLanguage);
  }
}
