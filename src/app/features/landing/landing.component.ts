import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  template: `
    <div class="landing-container">
      <header class="hero">
        <h1>API Management Platform</h1>
        <p class="subtitle">Design, Document, and Manage Your APIs with Ease</p>
        <div class="cta-buttons">
          <a mat-raised-button color="primary" routerLink="/auth/login">Login</a>
          <a mat-raised-button color="accent" routerLink="/auth/register">Sign Up</a>
        </div>
      </header>

      <section class="features">
        <h2>Key Features</h2>
        <div class="feature-grid">
          <mat-card class="feature-card">
            <mat-card-header>
              <mat-icon>design_services</mat-icon>
              <mat-card-title>API Design</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              Design APIs using OpenAPI/Swagger specifications with an intuitive interface
            </mat-card-content>
          </mat-card>

          <mat-card class="feature-card">
            <mat-card-header>
              <mat-icon>description</mat-icon>
              <mat-card-title>Documentation</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              Automatically generate comprehensive API documentation
            </mat-card-content>
          </mat-card>

          <mat-card class="feature-card">
            <mat-card-header>
              <mat-icon>history</mat-icon>
              <mat-card-title>Versioning</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              Manage API versions and ensure backward compatibility
            </mat-card-content>
          </mat-card>

          <mat-card class="feature-card">
            <mat-card-header>
              <mat-icon>publish</mat-icon>
              <mat-card-title>Deployment</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              Deploy APIs to different environments with ease
            </mat-card-content>
          </mat-card>
        </div>
      </section>

      <section class="how-it-works">
        <h2>How It Works</h2>
        <div class="steps">
          <div class="step">
            <mat-icon>edit</mat-icon>
            <h3>1. Design</h3>
            <p>Create your API specification using our intuitive editor</p>
          </div>
          <div class="step">
            <mat-icon>auto_stories</mat-icon>
            <h3>2. Document</h3>
            <p>Generate beautiful documentation automatically</p>
          </div>
          <div class="step">
            <mat-icon>rocket_launch</mat-icon>
            <h3>3. Deploy</h3>
            <p>Deploy your API to development, staging, or production</p>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .landing-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    .hero {
      text-align: center;
      padding: 4rem 0;
      background: linear-gradient(135deg, #3f51b5 0%, #2196f3 100%);
      color: white;
      border-radius: 8px;
      margin-bottom: 4rem;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .subtitle {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .cta-buttons {
      gap: 1rem;
      display: flex;
      justify-content: center;

      a {
        margin: 0 0.5rem;
      }
    }

    .features {
      margin-bottom: 4rem;

      h2 {
        text-align: center;
        margin-bottom: 2rem;
        color: #333;
      }
    }

    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .feature-card {
      height: 100%;
      
      mat-card-header {
        margin-bottom: 1rem;
        
        mat-icon {
          font-size: 2rem;
          height: 2rem;
          width: 2rem;
          color: #3f51b5;
          margin-right: 1rem;
        }
      }
    }

    .how-it-works {
      text-align: center;
      
      h2 {
        margin-bottom: 2rem;
        color: #333;
      }

      .steps {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
      }

      .step {
        padding: 2rem;
        
        mat-icon {
          font-size: 3rem;
          height: 3rem;
          width: 3rem;
          color: #3f51b5;
          margin-bottom: 1rem;
        }

        h3 {
          margin-bottom: 1rem;
          color: #333;
        }

        p {
          color: #666;
        }
      }
    }

    @media (max-width: 768px) {
      .hero {
        padding: 2rem;
      }

      h1 {
        font-size: 2rem;
      }

      .subtitle {
        font-size: 1.2rem;
      }

      .feature-grid {
        grid-template-columns: 1fr;
      }

      .steps {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class LandingComponent {}
