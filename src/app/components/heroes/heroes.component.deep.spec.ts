import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HeroesComponent } from "./heroes.component";
import { HeroService } from "src/app/services/hero.service";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { Hero } from "src/app/models/hero";
import { of } from "rxjs";
import { By } from "@angular/platform-browser";
import { HeroComponent } from "../hero/hero.component";

describe('HeroesComponent (shallow tests)', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService: any;
    let HEROES: Hero[];

    beforeEach(() => {
        HEROES = [
          {id: 1, name: 'SpiderDude', strength: 8},
          {id: 2, name: 'WonderFull', strength: 24},
          {id: 3, name: 'SuperDude', strength: 55},
        ];
        mockHeroService = jasmine.createSpyObj([
            'getHeroes',
            'addHero',
            'deleteHero'
        ]);

        TestBed.configureTestingModule({
            declarations: [
                HeroesComponent,
                HeroComponent
            ],
            providers: [
                {provide: HeroService, useValue: mockHeroService}
            ],
            schemas: [NO_ERRORS_SCHEMA]
        })

        fixture = TestBed.createComponent(HeroesComponent);
    })

    it('should render each hero as a HeroComponent', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        
        fixture.detectChanges();

        const heroComponentDEs = fixture.debugElement.queryAll(
            By.directive(HeroComponent)
        );
        expect(heroComponentDEs.length).toBe(3);
        for (let i = 0; i < heroComponentDEs.length; i++) {
            expect(
                heroComponentDEs[i].componentInstance.hero.name
            ).toEqual(
                HEROES[i].name
            )
        }

    })
})

