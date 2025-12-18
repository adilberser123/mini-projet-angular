import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="welcome-container">
      <h2>WELCOME TO MY ECOMMERCE APP</h2>

      <a routerLink="/catalog" class="catalog-link">
        Go to Catalog →
      </a>
    </div>
  `,
  styles: [`
    .welcome-container {
      height: calc(100vh - 80px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    h2 {
      font-size: 36px;
      margin-bottom: 20px;
    }

    .catalog-link {
      padding: 12px 28px;
      border-radius: 999px;
      text-decoration: none;
      font-size: 18px;
      font-weight: 500;
      color: white;
      background: linear-gradient(135deg, #6f63ff, #8b5cf6);
      box-shadow: 0 8px 20px rgba(111, 99, 255, 0.4);
      transition: all 0.3s ease;
    }

    .catalog-link:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 30px rgba(111, 99, 255, 0.6);
    }
  `]
})
export class HomeComponent {}
