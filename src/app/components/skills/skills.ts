import { Component } from '@angular/core';
import { TechnologyInterface } from '../../interfaces/technology-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})

export class Skills {
  public technologies:TechnologyInterface[] = [
    {
      id: 1,
      name: "Laravel",
      icon: "fa-brands fa-laravel fs-2"
    },
    {
      id: 2,
      name: "PHP",
      icon: "devicon-php-plain fs-2"
    },
    {
      id: 3,
      name: "MySQL",
      icon: "devicon-mysql-plain fs-4"
    },
    {
      id: 14,
      name: "PostgreSQL",
      icon: "devicon-postgresql-plain fs-3"
    },
    {
      id: 4,
      name: "Angular",
      icon: "devicon-angularjs-plain fs-4"
    },
    {
      id: 5,
      name: "TypeScript",
      icon: "devicon-typescript-plain fs-4"
    },
    {
      id: 6,
      name: "Vue",
      icon: "devicon-vuejs-plain fs-3"
    },
    {
      id: 7,
      name: "JQuery",
      icon: "devicon-jquery-plain fs-4"
    },
    {
      id: 8,
      name: "JavaScript",
      icon: "devicon-javascript-plain fs-4"
    },
    {
      id: 9,
      name: "Bootstrap",
      icon: "devicon-bootstrap-plain fs-2"
    },
    {
      id: 10,
      name: "CSS",
      icon: "devicon-css3-plain fs-4"
    },
    {
      id: 11,
      name: "HTML",
      icon: "devicon-html5-plain fs-4"
    },
    {
      id: 12,
      name: "Docker",
      icon: "fa-brands fa-docker fs-4"
    },
    {
      id: 13,
      name: "Git",
      icon: "devicon-git-plain fs-4"
    }
  ];
}
