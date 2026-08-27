import { Component } from '@angular/core';
import { Task } from '../task/task';

@Component({
  imports: [Task],
  selector: 'app-experience',
  styleUrl: './experience.css',
  templateUrl: './experience.html',
})
export class Experience {
  protected experiencia1 = [
    {
      title: "Página de exámenes de Certificación",
      date: "2025",
      desc: `
        <p>Se realizó una página web destinada a ser usada para realizar exámenes de certificación en el lapso de una semana, principalmente se trabajó en el ámbito del frontend, y ligeramente en el backend.</p>
      `
    },
    {
      title: "Recreación de Asteroids",
      date: "2024",
      desc: `
        <p>Usando el lenguaje C++ se creó una versión del videojuego Asteroids, principalmente se realizó el movimiento del jugador y sus hitboxes.</p>
      `
    },
    {
      title: "Infraestructura de sistema de gestión de calidad",
      date: "Mayo 2026 - Presente",
      desc: `
        <p>Se trabajó en la infraestructura de gestión de calidad de una quesera, principalmente haciendo uso de herramientas como Jenkins, OWASP, y Grafana.</p>
      `
    }
  ]
}
