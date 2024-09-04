import { Component, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LanguageService } from 'src/app/Services/language.service';
declare var bootstrap: any; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  

  constructor(
    private languageService: LanguageService,
    private sanitizer: DomSanitizer,
    private el: ElementRef, private renderer: Renderer2
  ) { }

  language: string = 'en';

  @HostBinding('attr.dir') get dir() {
    return this.language === 'ar' ? 'rtl' : 'ltr';
  }



  ngOnInit() {
    this.isLoading=true;
    // Subscribe to language changes
    this.languageService.getLanguage().subscribe(language => {
      this.isLoading=false;
      this.language = language;
     
    });

  
  
  }

  changeLanguage(newLanguage: string) {
    this.languageService.setLanguage(newLanguage);
  }

  showScrollToTopButton = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.showScrollToTopButton = window.scrollY > 700; // Adjust as needed
  }

  getTitle(): SafeHtml {
    let titleHtml: string;
    if (this.language === 'ar') {
      titleHtml = 'مؤسسة<span class="fw-bolder">غايا</span> للابداع';
    } else {
      titleHtml = '<span class="fw-semibold ">Ghaya</span> Foundation for Creativity';
    }
    return this.sanitizer.bypassSecurityTrustHtml(titleHtml);
  }

  switchLanguage(language: string) {
    this.languageService.setLanguage(language);
  }

  isLoading:boolean=false
}