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
      title: "Analista de Infra de TI",
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
          id: 4,
          name: "Docker",
          icon: "fa-brands fa-docker fs-3"
        },
      ]
    },
    {
      id: 2,
      title: "Engenheiro de Software",
      company: "Next Opinion",
      time: "Maio 2025 - Atual",
      description: "Implementei funções de importação de pacotes Scorm na plataforma LMS da empresa utilizando PHP com SQL, melhorando em 100% a extração de arquivos ZIPs de cursos. Corrigi bugs em dependências de sistemas, configurei storages MinIO, garantindo comunicação externa e evitando erros de cross-origin. Desenvolvi uma API Python que centraliza dados de faturamento de 100% da base de clientes.",
      technologies: [
        {
          id: 1,
          name: "Python",
          icon: "devicon-python-plain fs-1"
        },
        {
          id: 2,
          name: "Laravel",
          icon: "fa-brands fa-laravel fs-1"
        },
        {
          id: 3,
          name: "PHP",
          icon: "devicon-php-plain fs-1"
        },
        {
          id: 4,
          name: "MySQL",
          icon: "devicon-mysql-plain fs-3"
        },
        {
          id: 6,
          name: "Docker",
          icon: "fa-brands fa-docker fs-3"
        },
        {
          id: 7,
          name: "Git",
          icon: "devicon-git-plain fs-3"
        }
      ]
    }
  ]
}