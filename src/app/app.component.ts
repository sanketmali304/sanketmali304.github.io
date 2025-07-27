import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { EducationComponent } from "./components/education/education.component";
import { SkillsComponent } from './components/skills/skills.component';
import * as AOS from 'aos';
import { ExperienceComponent } from './components/experience/experience.component';
import { ResumeComponent } from './components/resume/resume.component';
import { CertificationsComponent } from './components/certifications/certifications.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, AboutMeComponent, ResumeComponent, EducationComponent, 
            ExperienceComponent,CertificationsComponent ,SkillsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  //  personName!: string;

      ngOnInit(): void {
    AOS.init();
  }
}
