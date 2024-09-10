import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { SlideMainComponent } from "./components/slide-main/slide-main.component";
import { WorkComponent } from "./components/work/work.component";
import { SlideSecondComponent } from "./components/slide-second/slide-second.component";
import { ContactComponent } from "./components/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, AboutComponent, SlideMainComponent, WorkComponent, SlideSecondComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apolo';
}
