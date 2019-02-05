import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

import { HeroService } from '../hero.service'
import { Hero } from '../hero'

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.sass'],
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero

    constructor(
        private route: ActivatedRoute, // The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent
        private heroService: HeroService, // The HeroService gets hero data from the remote server
        private location: Location // The location is an Angular service for interacting with the browser
    ) {}

    ngOnInit() {
        this.getHero()
    }

    getHero(): void {
        const id = +this.route.snapshot.paramMap.get('id')
        this.heroService.getHero(id).subscribe(hero => (this.hero = hero))
    }

    goBack() {
        this.location.back()
    }

    save() {
        this.heroService.updateHero(this.hero).subscribe(() => this.goBack())
    }
}
