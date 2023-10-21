

import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HeroComponent } from "./hero.component"
import { RouterTestingModule } from "@angular/router/testing";

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
})

