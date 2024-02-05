import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import {MatIconModule} from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-edit-page',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, MatIconModule],
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.css'
})
export class EditPageComponent {

}
