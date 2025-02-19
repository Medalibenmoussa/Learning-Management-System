import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { Router, RouterModule } from '@angular/router';
import { DatePickerModule } from 'primeng/datepicker';
import { coursesService } from '../../Services/course.service';
import { AuthService } from '../../Services/auth.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-addcourse',
  imports: [InputTextModule
    ,ButtonModule ,FormsModule,ToolbarModule,RouterModule,DatePickerModule,ToastModule
  ],
  providers: [MessageService],
  templateUrl: './addcourse.component.html',
  styleUrl: './addcourse.component.scss'
})
export class AddcourseComponent {

  course = {
    title: '',
    description: '',
    createdDate: ''
  };

  constructor(private route:Router,private coursesService :coursesService,private authService: AuthService ,private messageService: MessageService) {}

  savecourse() {
    this.coursesService.addcourse(this.course).subscribe(() => {
      this.messageService.add({ severity: 'success', summary: 'Course Added', detail: 'Course added successfully!' });
      this.route.navigate(['/home']);
      this.course ={ title: '',
        description: '',
        createdDate: ''}

    });
  }
  logout() {
    this.authService.logout();
    }

}
