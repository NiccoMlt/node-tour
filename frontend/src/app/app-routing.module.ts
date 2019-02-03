import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { HeroesComponent } from './heroes/heroes.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // This route redirects a URL that fully matches the empty path
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent }, // The colon in the path indicates that :id is a placeholder
    { path: 'heroes', component: HeroesComponent },
]

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
    // You generally don't declare components in a routing module
    // declarations: []
})
export class AppRoutingModule {}
