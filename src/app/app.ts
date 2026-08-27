import { Component, signal } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from './components/footer/footer';
import { Description } from './components/description/description';
import { Experience } from './components/experience/experience';
import { Tools } from "./components/tools/tools";
import { Contact } from "./components/contact/contact";

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, Description, Experience, Tools, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('eli-curriculum');
}
