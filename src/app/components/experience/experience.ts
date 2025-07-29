import { Component } from '@angular/core';
import { ExperienceInterface } from '../../interfaces/experience-interface';
import { CommonModule } from '@angular/common';
import { debug } from 'util';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})

export class Experience {
  public experiences: ExperienceInterface[] = [
    {
      id: 1,
      title: "Analista de Infraestrutura de TI",
      company: "Prefeitura de Maceió",
      time: "Agosto 2024 - Atual",
      description: "Implementei melhorias em servidores, o que resultou em um aumento de 50% na eficiência. Fui responsável pela gestão da infraestrutura de TI, garantindo suporte para os usuários. Também atuei no monitoramento dos dados dos funcionários da ALICC por meio dos sistemas da prefeitura.",
      technologies: [
        {
          id: 1,
          name: "Laravel",
          icon: "fa-brands fa-laravel fs-1"
        },
        {
          id: 2,
          name: "PHP",
          icon: "devicon-php-plain fs-1"
        },
        {
          id: 3,
          name: "MySQL",
          icon: "devicon-mysql-plain fs-3"
        },
        {
          id: 12,
          name: "Docker",
          icon: "fa-brands fa-docker fs-3"
        },
      ]
    },
    {
      id: 2,
      title: "Desenvolvedor PHP",
      company: "Next Opinion",
      time: "Maio 2025 - Atual",
      description: "Implementei funcionalidades de importação de pacotes Scorm na plataforma LMS da empresa utilizando Laravel com MySQL. Corrigi bugs em dependências entre sistemas de clientes e configurei servidores MinIO, garantindo comunicação externa e evitando erros de cross-origin. Desenvolvi interfaces responsivas com Blade, JQuery e Bootstrap, contribuindo para a usabilidade e estabilidade da aplicação.",
      technologies: [
        {
          id: 1,
          name: "Laravel",
          icon: "fa-brands fa-laravel fs-1"
        },
        {
          id: 2,
          name: "PHP",
          icon: "devicon-php-plain fs-1"
        },
        {
          id: 3,
          name: "MySQL",
          icon: "devicon-mysql-plain fs-3"
        },
        {
          id: 7,
          name: "JQuery",
          icon: "devicon-jquery-plain fs-3"
        },
        {
          id: 12,
          name: "Docker",
          icon: "fa-brands fa-docker fs-3"
        },
        {
          id: 13,
          name: "Git",
          icon: "devicon-git-plain fs-3"
        }
      ]
    }
  ]
}