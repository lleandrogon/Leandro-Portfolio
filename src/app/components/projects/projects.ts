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
    },
    {
      id: 2,
      mainTechnology: "fa-brands fa-laravel",
      title: "Notas",
      description: "API para filtros de pesquisa de notas acadêmicas escolares.",
      repositorie: "https://github.com/lleandrogon/Notas",
    },
    {
      id: 3,
      mainTechnology: "fa-brands fa-laravel",
      title: "YO Respostas",
      description: "Sistema multiusuário para perguntas e respostas gerais.",
      repositorie: "https://github.com/lleandrogon/YO-Respostas",
    },
    {
      id: 4,
      mainTechnology: "fa-brands fa-laravel",
      title: "Super Receitas",
      description: "Projeto multiusuário para o compartilhamento de culinárias.",
      repositorie: "https://github.com/lleandrogon/Super-Receitas",
    },
    {
      id: 5,
      mainTechnology: "devicon-vuejs-plain",
      title: "Colégio Modelo",
      description: "Sistema para um colégio para convencer matrículas.",
      repositorie: "https://github.com/lleandrogon/Colegio-Modelo"
    },
    {
      id: 6,
      mainTechnology: "devicon-vuejs-plain",
      title: "Fala Fácil",
      description: "Sistema para uma escola de idiomas para fins de matrícula.",
      repositorie: "https://github.com/lleandrogon/Colegio-Modelo"
    },
    {
      id: 7,
      mainTechnology: "devicon-angularjs-plain",
      title: "Altitude Gráfica",
      description: "Projeto freelancer de landing page para uma gráfica.",
      repositorie: "https://github.com/lleandrogon/Altitude-Grafica"
    },
    {
      id: 8,
      mainTechnology: "devicon-angularjs-plain",
      title: "Portfólio Leandro",
      description: "Meu antigo portfólio que demonstra como eu evolui.",
      repositorie: "https://github.com/lleandrogon/FlowMusic"
    },
    {
      id: 9,
      mainTechnology: "devicon-angularjs-plain",
      title: "Flow Music",
      description: "Ecommerce de uma loja de instrumentos musicais.",
      repositorie: "https://github.com/lleandrogon/FlowMusic"
    },
    {
      id: 10,
      mainTechnology: "devicon-angularjs-plain",
      title: "PowerFit",
      description: "Sistema convicente a matrículas de uma academia.",
      repositorie: "https://github.com/lleandrogon/FlowMusic"
    }
  ];
}
