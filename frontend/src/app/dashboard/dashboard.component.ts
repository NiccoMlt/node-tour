import { Component, OnInit } from '@angular/core'
import { Hero } from '../hero'
import { HeroService } from '../hero.service'

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = []

    constructor(private heroService: HeroService) {}

    ngOnInit() {
        this.getHeroes()
    }

    getHeroes(): void {
        this.heroService
            .getHeroes()
            // return only four of the Top Heroes (2nd, 3rd, 4th, and 5th)
            .subscribe(heroes => (this.heroes = heroes.slice(1, 5)))
    }
}
