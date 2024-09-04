import { Component, HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/Services/language.service';

@Component({
  selector: 'app-founders',
  templateUrl: './founders.component.html',
  styleUrls: ['./founders.component.css'],
  
})
export class FoundersComponent {
 
  language: string = 'en';

  @HostBinding('attr.dir') get dir() {
    return this.language === 'ar' ? 'rtl' : 'ltr';
  }

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    // Subscribe to language changes
    this.languageService.getLanguage().subscribe(language => {
      this.language = language;
    });
  }

  changeLanguage(newLanguage: string) {
    this.languageService.setLanguage(newLanguage);
  }

  showMoreFounder = false;
  showMoreViceCEO = false;

  toggleFounderVisibility(): void {
    this.showMoreFounder = !this.showMoreFounder;
  }

  toggleViceCEOVVisibility(): void {
    this.showMoreViceCEO = !this.showMoreViceCEO;
  }

  
}
