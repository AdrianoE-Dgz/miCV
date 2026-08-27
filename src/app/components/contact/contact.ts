import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  protected contactList = [
    {
      link: null,
      icon: "assets/phone-volume-solid.svg",
      text: "(52) 449 552 1208"
    },
    {
      link: "mailto:areliedgz5005@gmail.com",
      icon: "assets/envelope-solid.svg",
      text: "areliedgz5005@gmail.com"
    },
    {
      link: "https://github.com/AdrianoE-Dgz",
      icon: "assets/github-brands-solid.svg",
      text: "AdrianoE-Dgz"
    },
  ]
}
