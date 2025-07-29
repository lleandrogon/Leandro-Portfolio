import { Component } from '@angular/core';
import { ProjectInterface } from '../../interfaces/project-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})

export class Projects {
  public projects:ProjectInterface[] = [
    {
      id: 1,
      mainTechnology: "fa-brands fa-laravel",
      title: "Agenda Pessoal",
      description: "Sistema multiusuário para anotações de compromissos.",
      repositorie: "https://github.com/lleandrogon/Agenda-Pessoal",
      technologies: [
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
      ]
    },
    {
      id: 2,
      mainTechnology: "fa-brands fa-laravel",
      title: "Notas",
      description: "API para filtros de pesquisa de notas acadêmicas escolares.",
      repositorie: "https://github.com/lleandrogon/Notas",
      technologies: [
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
      ]
    },
    {
      id: 3,
      mainTechnology: "fa-brands fa-laravel",
      title: "YO Respostas",
      description: "Sistema multiusuário para perguntas e respostas gerais.",
      repositorie: "https://github.com/lleandrogon/YO-Respostas",
      technologies: [
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
      ]
    }
  ];
}
