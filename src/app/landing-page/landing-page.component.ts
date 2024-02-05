import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeroSectionComponent, NavBarComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
