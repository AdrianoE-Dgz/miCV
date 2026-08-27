import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tools',
  styleUrl: './tools.css',
  templateUrl: './tools.html',
})
export class Tools {
  protected toolList = [
    {
      name: "HTML, CSS y JS",
      percentage: 90
    },
    {
      name: "Angular y Bootstrap",
      percentage: 75
    },
    {
      name: "Linux/Unix",
      percentage: 85
    },
    {
      name: "C, C++ y C#",
      percentage: 70
    },
  ]
}
