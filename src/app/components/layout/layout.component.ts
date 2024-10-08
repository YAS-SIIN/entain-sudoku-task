import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { SudokuGameComponent } from "../sudoku-game/sudoku-game.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, NgIf, RouterOutlet, FooterComponent, SudokuGameComponent ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
