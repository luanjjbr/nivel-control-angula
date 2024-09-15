import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  isMenuOpen = signal(false); // Controla se o menu está aberto ou fechado
  toggleMenu() {
    this.isMenuOpen.update((isMenuOpen) => !isMenuOpen);
    console.log('ola');
  }
}
