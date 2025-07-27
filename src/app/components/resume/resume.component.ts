import { Component } from '@angular/core';
import { EducationComponent } from "../education/education.component";
import { ExperienceComponent } from "../experience/experience.component";
import { CertificationsComponent } from "../certifications/certifications.component";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [EducationComponent, ExperienceComponent, CertificationsComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

}
