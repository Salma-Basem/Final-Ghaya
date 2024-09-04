import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Home/home.component';
import { AboutUsComponent } from './Components/AboutUs/about-us.component';
import { VisionComponent } from './Components/Vision/vision.component';
import { GoalsComponent } from './Components/Goals/goals.component';
import { ContactUsComponent } from './Components/ContactUs/contact-us.component';
import { FoundersComponent } from './Components/Founders/founders.component';
import { BoardmembersComponent } from './Components/BoardMembers/boardmembers.component';
import { PolicyComponent } from './Components/Policy/policy.component';
import { BooksComponent } from './Components/Books/books.component';
import { BooksCategoriesComponent } from './Components/books-categories/books-categories.component';
import { BookDetailsComponent } from './Components/BookDetails/book-details.component';
import { ShortstoryComponent } from './Components/ShortStory/shortstory.component';
import { AwardsComponent } from './Components/Awards/awards.component';
import { TeamComponent } from './Components/Team/team.component';
import { AwardsBriefComponent } from './Components/AwardsBrief/awards-brief.component';
import { PhotographyComponent } from './Components/photography/photography.component';
import { ContentcreationComponent } from './Components/ContentCreationAwards/contentcreation.component';
import { PublishingHouseComponent } from './Components/PublishingHouse/publishing-house.component';
import { ProductionComponent } from './Components/Production/production.component';
import { AcademyComponent } from './Components/Academy/academy.component';
import { AuthorsComponent } from './Components/Authors/authors.component';
import { MobileAppComponent } from './Components/MobileApp/mobile-app.component';
import { EventsComponent } from './Components/EventsProjects/events.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'ContactUs', component: ContactUsComponent },
  { path: 'FoundersAndBoardMembers', component: FoundersComponent },
  { path: 'BoardMembers', component: BoardmembersComponent },
  { path: 'Policy', component: PolicyComponent },
  { path: 'books', component: BooksCategoriesComponent },
  { path: 'books/:categoryId', component: BooksComponent },
  { path: 'page-details/:bookId', component: BookDetailsComponent },
  { path: 'Awards/Brief', component: AwardsBriefComponent },
  {path:'Awards/ShortStory',component:ShortstoryComponent},
  {path:'Awards/Photography',component:PhotographyComponent},
  {path:'Awards/ContentCreation',component:ContentcreationComponent},
  {path:'Projects/PublishingHouse',component:PublishingHouseComponent},
  {path:'Projects/Production',component:ProductionComponent},
  {path:'Projects/Academy',component:AcademyComponent},
  {path:'Projects/Events',component:EventsComponent},
  { path: 'AboutUs/AboutGhaya', component: AboutUsComponent },
  { path: 'AboutUs/BoardMembers', component: BoardmembersComponent },
  { path: 'AboutUs/PolicyAndGoals', component: PolicyComponent },
  { path: 'AboutUs/Team', component: TeamComponent },
  { path: 'AboutUs/Authors', component: AuthorsComponent },
  { path: 'GhayaApp', component: MobileAppComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }  // Redirect to Home on unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Enables scrolling to saved positions
    anchorScrolling: 'enabled' // Ensures that scrolling to anchors is handled
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
