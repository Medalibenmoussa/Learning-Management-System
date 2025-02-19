Task 3: Authentication & Role-Based Access (Angular + .NET API)  
      Scenario: Develop an authentication system for an LMS (Learning Management System) 
where users can be:  
 Admins → Can view, add, and delete courses.  
 Trainers → Can only add courses.  
 Students → Can only view courses.  
 
   Core Requirements:  
Backend (API - .NET)  
 Implement JWT authentication.  
 Create role-based authorization for different users.  
 Set up API endpoints for managing courses based on roles.  
 
Frontend (Angular)  
 Implement user authentication (login/logout).  
 Use Angular AuthGuard to restrict routes based on roles.  
 Display different UI elements based on the user's role.  
o Admins can see Add/Delete buttons.  
o Trainers can only see Add Course.  
o Students can only view courses. 
