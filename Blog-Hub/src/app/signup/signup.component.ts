
import { Component,OnInit } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signupForm!:FormGroup;
  

  constructor(
    private fb: FormBuilder,
    private UserService: UsersService,
    private router: Router,
  ) {}




  ngOnInit(): void {
   this.signupForm=this.fb.group({
    name:[''],
    email:[],
    phone:[],
    password:[''],
    cnfpassword:[],

   });

  }

  onSubmit(): void {
    if(this.signupForm.valid) {
      const data={
        ...this.signupForm.value,
       

      };
      // const { name,  email,number, password, cnfpassword } = this.firstFormGroup.value;
      console.log('Sign-Up Data: ',  data );
      
      this.UserService.signup(data).subscribe(user => {
        console.log(user);
        this.router.navigate(['/signup']);
      });

    } else {
      console.log("Validation Failed")
    }
  }

// onSubmit(): void {
  
//     console.log('Sign-In successful!');
//     this.router.navigate(['/signin']);
  
// }

}
