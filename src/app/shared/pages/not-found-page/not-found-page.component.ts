import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.css'
})
export class NotFoundPageComponent {

  private route = inject(Router)

  goHome(){
    this.route.navigate(['/'])
  }
}
