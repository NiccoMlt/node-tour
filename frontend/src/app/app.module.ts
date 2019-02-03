import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms' // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './in-memory-data.service'

import { HeroesComponent } from './heroes/heroes.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { MessagesComponent } from './messages/messages.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { HeroSearchComponent } from './hero-search/hero-search.component'

@NgModule({
    // AppModule declares both application components, AppComponent and HeroesComponent
    declarations: [
        // Every component must be declared in exactly one NgModule
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent,
        DashboardComponent,
        HeroSearchComponent,
    ],
    imports: [BrowserModule, FormsModule, HttpClientModule, InMemoryWebApiModule.forRoot(InMemoryDataService), AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
