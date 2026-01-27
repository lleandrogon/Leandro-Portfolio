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
      description: "Configurei pastas compartilhadas na Azure (Azure Files) integradas ao ambiente corporativo. Implantei containers Docker em aplicações PHP e MySQL. Atuei na integração de dados em sistemas institucionais. Otimizei o suporte de TI, garantindo aumento de 65% para 95% na satisfação dos usuários.",
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
      description: "Migrei dados educacionais de um arquivo Excel para uma base PostgreSQL utilizando Python (Pandas), com orquestração via Apache Airflow. Implementei funções de importação de pacotes SCORM em plataformas LMS utilizando PHP com SQL, elevando de 0% para 100% a taxa de extração de arquivos ZIP de cursos. Configurei storages MinIO, garantindo comunicação externa e eliminando erros de cross-origin.",
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
          name: "SQL",
          icon: "devicon-azuresqldatabase-plain fs-2"
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