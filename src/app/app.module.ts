import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 

// Components
import { MenuComponent } from './components/menu/menu.component';

// Pages
import { AppComponent } from './app.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

// Other packages
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './components/card/card.component';
import { FilterComponent } from './components/filter/filter.component';
import { ArrayFilterPipe } from './filters/array-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SearchPageComponent,
    CardComponent,
    FilterComponent,
    ArrayFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
