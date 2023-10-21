

import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HeroComponent } from "./hero.component"
import { RouterTestingModule } from "@angular/router/testing";
import { By } from "@angular/platform-browser";

describe('HeroComponent (shallow tests)', () => {
    let fixture: ComponentFixture<HeroComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            imports: [RouterTestingModule],
            // schemas: [NO_ERRORS_SCHEMA]
        })
        fixture = TestBed.createComponent(HeroComponent);
    });

    it('should have the correct hero', () => {
        fixture.detectChanges();
        fixture.componentInstance.hero = {
            id: 1,
            name: 'Dude',
            strength: 3
        };

        expect(fixture.componentInstance.hero.name).toEqual('Dude');
    })

    it('should render the hero name in an anchor tag', () => {
        fixture.componentInstance.hero = {
            id: 1,
            name: 'SuperDude',
            strength: 4
        };
        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('a').textContent)
            .toContain('SuperDude');
    })

    it('should render the hero name in an anchor tag 2', () => {
        fixture.componentInstance.hero = {
            id: 1,
            name: 'SuperDude',
            strength: 4
        };
        fixture.detectChanges();

        let de = fixture.debugElement.query(By.css('a'));
        expect(de.nativeElement.textContent).toContain('SuperDude');
    })
})

