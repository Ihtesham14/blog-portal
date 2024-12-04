import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { textSpanIntersectsWithTextSpan } from 'typescript';
import { BlogPageComponent } from './home/blog-page/blog-page.component';
import { MatStepperModule } from '@angular/material/stepper';
import { provideHttpClient } from '@angular/common/http';
import { PostblogComponent } from './postblog/postblog.component';
// import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    AppComponent,
    BlogPageComponent,
    PostblogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule,  MatButtonModule, MatIconModule,
    MatToolbarModule,MatCardModule,MatTableModule,MatListModule , 
    BrowserAnimationsModule, 
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule ,
    MatButtonModule,
    MatStepperModule,
    // Add this to use mat-option with mat-select
    
    // FlexLayoutModule
  ],
  
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
