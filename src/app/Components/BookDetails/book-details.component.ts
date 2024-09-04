import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/Services/language.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  bookId: string = '';
  book: { name: string, image: string, description: string } = { name: '', image: '', description: '' };
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
      this.bookId = params['bookId'];
      this.loadBookDetails(this.bookId);
    });

    // Subscribe to language changes
    this.languageService.getLanguage().subscribe(language => {
      this.language = language;
      this.loadBookDetails(this.bookId); // Reload book details on language change
    });
  }

  loadBookDetails(bookId: string): void {
    // Define book details with translation keys
    const bookDetails = [
      { id: '1', nameKey: 'BOOKS.BOOKS_LIST.BOOK_DETAILS.BOOK1.TITLE', imageKey: 'BOOKS.BOOKS_LIST.BOOK_DETAILS.BOOK1.IMAGE', descriptionKey: 'BOOKS.BOOKS_LIST.BOOK_DETAILS.BOOK1.DESCRIPTION' },
      { id: '2', nameKey: 'BOOKS.BOOKS_LIST.BOOK_DETAILS.BOOK2.TITLE', imageKey: 'BOOKS.BOOKS_LIST.BOOK_DETAILS.BOOK2.IMAGE', descriptionKey: 'BOOKS.BOOKS_LIST.BOOK_DETAILS.BOOK2.DESCRIPTION' },
      { id: '3', nameKey: 'BOOKS.BOOKS_LIST.BOOK_DETAILS.BOOK3.TITLE', imageKey: 'BOOKS.BOOKS_LIST.BOOK_DETAILS.BOOK3.IMAGE', descriptionKey: 'BOOKS.BOOKS_LIST.BOOK_DETAILS.BOOK3.DESCRIPTION' },
      { id: '4', nameKey: 'BOOKS.BOOKS_LIST.BOOK_DETAILS.BOOK4.TITLE', imageKey: 'BOOKS.BOOKS_LIST.BOOK_DETAILS.BOOK4.IMAGE', descriptionKey: 'BOOKS.BOOKS_LIST.BOOK_DETAILS.BOOK4.DESCRIPTION' },
      { id: '5', nameKey: 'BOOKS.BOOKS_LIST.BOOK_DETAILS.BOOK5.TITLE', imageKey: 'BOOKS.BOOKS_LIST.BOOK_DETAILS.BOOK5.IMAGE', descriptionKey: 'BOOKS.BOOKS_LIST.BOOK_DETAILS.BOOK5.DESCRIPTION' },
      { id: '6', nameKey: 'BOOKS.BOOKS_LIST.BOOK_DETAILS.BOOK6.TITLE', imageKey: 'BOOKS.BOOKS_LIST.BOOK_DETAILS.BOOK6.IMAGE', descriptionKey: 'BOOKS.BOOKS_LIST.BOOK_DETAILS.BOOK6.DESCRIPTION' },
      { id: '7', nameKey: 'BOOKS.BOOKS_LIST.BOOK_DETAILS.BOOK7.TITLE', imageKey: 'BOOKS.BOOKS_LIST.BOOK_DETAILS.BOOK7.IMAGE', descriptionKey: 'BOOKS.BOOKS_LIST.BOOK_DETAILS.BOOK7.DESCRIPTION' },
      { id: '8', nameKey: 'BOOKS.BOOKS_LIST.BOOK_DETAILS.BOOK8.TITLE', imageKey: 'BOOKS.BOOKS_LIST.BOOK_DETAILS.BOOK8.IMAGE', descriptionKey: 'BOOKS.BOOKS_LIST.BOOK_DETAILS.BOOK8.DESCRIPTION' },
    ];

    // Find the book details by bookId
    const book = bookDetails.find(bk => bk.id === bookId);
    
    if (book) {
      // Fetch translations
      this.translateService.get([book.nameKey, book.imageKey, book.descriptionKey]).subscribe(translations => {
        this.book = {
          name: translations[book.nameKey],
          image: translations[book.imageKey], // Assuming images are also translated or consistent
          description: translations[book.descriptionKey]
        };
      });
    }
  }
}