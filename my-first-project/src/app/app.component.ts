import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './login/logout/logout.component';
import { SignupComponent } from './signup.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SampleComponent,HomeComponent,SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-project';
  private _name:string = 'Fowzaan';

  name():string{
    return this._name
  }

  public employees =['Jack','Jill'];

  employee ={
    name:'Jack',
    age:32,
    src:"https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?rs=1&pid=ImgDetMain",
    role:'SDE',
    alt:"Profile pic"
  }
  public clickSave():void{
    this._name="New Fowzaan"
  }
}
