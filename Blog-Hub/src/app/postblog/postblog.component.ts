import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

interface category {
  value: string;
  
}

@Component({
  selector: 'app-postblog',
  templateUrl: './postblog.component.html',
  styleUrl: './postblog.component.css'
})
export class PostblogComponent implements OnInit{
  blog!:FormGroup;
  selectedValue: string | undefined;
  ctgry:category[]= [
    {value: 'Food', },
    {value: 'Technology',},
    {value: 'Education', },
    {value: 'Adventure', },

  ];
  constructor(
    private fb: FormBuilder,
    private UserService: UsersService,
    private router: Router,
    
  ) {}

  ngOnInit(): void{
    this.blog = this.fb.group({
     title: ['', [Validators.required, ]],
     category: ['', [Validators.required]],
     blogbody: ['', [Validators.required]],
     image:['',Validators.required]

    });
  }
  
  onSubmit(): void {
    if(this.blog.valid) {
      const data={
        ...this.blog.value,
       

      };

      console.log('Blog data: ',  data );
      
      this.UserService.postBlog(data).subscribe(user => {
        console.log(user);
        this.router.navigate(['/home']);
      });

    } else {
      console.log("blog not posted")
    }
  }

}
