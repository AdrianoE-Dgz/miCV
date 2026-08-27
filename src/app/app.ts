import { Component, signal } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from './components/footer/footer';
import { Task } from "./components/task/task";

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, Task],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('eli-curriculum');

  protected experiencia1 = [
    {
      title: "Titulo",
      date: "",
      desc: `
        <p>Esto es parte de la descripción</p>
        <p>Puede ser más o menos texto</p>
      `
    },
    {
      title: "Titulo",
      date: "",
      desc: `
        <p>Esto es parte de la descripción</p>
        <p>Puede ser más o menos texto</p>
      `
    },
    {
      title: "Titulo",
      date: "",
      desc: `
        <p>Esto es parte de la descripción</p>
        <p>Puede ser más o menos texto</p>
      `
    },
    {
      title: "Titulo",
      date: "",
      desc: `
        <p>Esto es parte de la descripción</p>
        <p>Puede ser más o menos texto</p>
      `
    },
    {
      title: "Titulo",
      date: "",
      desc: `
        <p>Esto es parte de la descripción</p>
        <p>Puede ser más o menos texto</p>
      `
    },
    {
      title: "Titulo",
      date: "",
      desc: `
        <p>Esto es parte de la descripción</p>
        <p>Puede ser más o menos texto</p>
      `
    },
  ]

}
