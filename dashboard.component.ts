// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { ApplicationService } from './application.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  applications: Application[] = [];
  selectedApplications: Application[] = [];

  constructor(private applicationService: ApplicationService) {}

  ngOnInit() {
    this.loadApplications();
  }

  loadApplications() {
    this.applicationService.getApplications().subscribe(apps => {
      this.applications = apps;
    });
  }

  addApplication(application: Application) {
    this.applicationService.addApplication(application).subscribe(() => {
      this.loadApplications();
    });
  }

  updateApplication(application: Application) {
    this.applicationService.updateApplication(application).subscribe(() => {
      this.loadApplications();
    });
  }

  deleteApplication(id: number) {
    this.applicationService.deleteApplication(id).subscribe(() => {
      this.loadApplications();
    });
  }

  downloadExcel() {
    this.applicationService.downloadExcel(this.selectedApplications).subscribe(response => {
      // Handle the Excel file download
    });
  }

  downloadPdf(id: number) {
    this.applicationService.downloadPdf(id).subscribe(response => {
      // Handle the PDF file download
    });
  }

  toggleSelectAll() {
    if (this.selectedApplications.length === this.applications.length) {
      this.selectedApplications = [];
    } else {
      this.selectedApplications = [...this.applications];
    }
  }
}
