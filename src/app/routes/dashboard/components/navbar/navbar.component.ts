import { Component } from '@angular/core';
import { MatFormField } from '@angular/material/form-field'
import { MatOption, MatSelect } from '@angular/material/select'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatFormField,
    MatSelect,
    MatOption
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
