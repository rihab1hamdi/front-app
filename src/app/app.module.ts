import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './commun/header/header.component';
import { FooterComponent } from './commun/footer/footer.component';
import { ListComponent } from './pages/list/list.component';
import { SidebarComponent } from './commun/sidebar/sidebar.component';
import { NewResumeComponent } from './pages/new-resume/new-resume.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowComponent } from './pages/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    SidebarComponent,
    NewResumeComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     BrowserModule,
      FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
