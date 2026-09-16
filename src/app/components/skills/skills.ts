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
      name: "Python",
      icon: "devicon-python-plain fs-3"
    },
    {
      id: 2,
      name: "SQL",
      icon: "devicon-azuresqldatabase-plain fs-2"
    },
    {
      id: 3,
      name: "Azure",
      icon: "devicon-azure-plain fs-3"
    },
    {
      id: 4,
      name: "Spark",
      icon: "devicon-apachespark-original fs-3"
    },
    {
      id: 5,
      name: "Airflow",
      icon: "devicon-apacheairflow-plain fs-3"
    },
    {
      id: 6,
      name: "Kafka",
      icon: "devicon-apachekafka-original fs-3"
    },
    {
      id: 7,
      name: "Pandas",
      icon: "devicon-pandas-plain fs-3"
    },
    {
      id: 8,
      name: "Docker",
      icon: "fa-brands fa-docker fs-4"
    },
    {
      id: 9,
      name: "Laravel",
      icon: "fa-brands fa-laravel fs-2"
    },
    {
      id: 10,
      name: "PHP",
      icon: "devicon-php-plain fs-2"
    },
    {
      id: 11,
      name: "Git",
      icon: "devicon-git-plain fs-4"
    }
  ];
}
