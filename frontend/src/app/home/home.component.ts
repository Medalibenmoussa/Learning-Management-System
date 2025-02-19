import { Component } from '@angular/core';
import { Router, } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { coursesService } from '../Services/course.service';
import { AuthService } from '../Services/auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [
    ToolbarModule,
    ButtonModule,
    TableModule,
    FormsModule,
    RouterModule,
    CommonModule
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  courses :any = [];
  userRole: string | undefined;
    constructor(private router: Router,private coursesService :coursesService,private authService: AuthService) {}
    loadcoruses()
    {
      this.coursesService.getAll().subscribe(
        (data) => {
          this.courses = data;

        },
        (error) => {
          console.error('Error loading employees:', error);
        }
      );
    }
    ngOnInit() {
      this.userRole = this.authService.getUserRole()?.toString();
      console.log(this.userRole);
    }
    deletecourse(coruse: any) {
      if (confirm("Are you sure you want to delete this employee?")) {
      if (coruse) {
        this.coursesService.deletecourse(coruse.id).subscribe(
          () => {
            this.loadcoruses();
            },
          (error) => {
            console.error('Error deleting course:', error);
          }
        );
      }
    }}
    logout() {
      this.authService.logout();
      }


}
