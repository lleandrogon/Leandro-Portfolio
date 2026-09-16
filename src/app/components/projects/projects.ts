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
      id: 20,
      mainTechnology: "devicon-azure-plain",
      title: "População da Europa",
      description: "ETL com Azure Functions e ADF da população europeia",
      repositorie: "https://github.com/lleandrogon/europe-population"
    },
    {
      id: 8,
      mainTechnology: "devicon-azuresqldatabase-plain",
      title: "Cyber Attacks",
      description: "ELT com dbt de ataques cibernéticos em empresas",
      repositorie: "https://github.com/lleandrogon/Cyber-Attacks"
    },
    {
      id: 18,
      mainTechnology: "devicon-azuresqldatabase-plain",
      title: "Combustível Brasil",
      description: "ELT com dbt do preço dos combustíveis no Brasil",
      repositorie: "https://github.com/lleandrogon/Combustivel-Brasil"
    },
    {
      id: 17,
      mainTechnology: "devicon-azuresqldatabase-plain",
      title: "Carros na Noruega",
      description: "ELT com dbt de vendas de carros na Noruega",
      repositorie: "https://github.com/lleandrogon/Vendas-Carros-Noruega"
    },
    {
      id: 19,
      mainTechnology: "devicon-apacheairflow-plain",
      title: "População Mundial",
      description: "Orquestração de ETL da população por continentes",
      repositorie: "https://github.com/lleandrogon/Populacao-Continente"
    },
    {
      id: 16,
      mainTechnology: "devicon-apacheairflow-plain",
      title: "Out School",
      description: "ETL de porcentagem de pessoas fora da escola pelo mundo",
      repositorie: "https://github.com/lleandrogon/Out-School"
    },
    {
      id: 15,
      mainTechnology: "devicon-apacheairflow-plain",
      title: "Homicídios Alagoas",
      description: "ETL com Pandas + Airflow de homicídios em Alagoas",
      repositorie: "https://github.com/lleandrogon/Homicidios-Alagoas"
    },
    {
      id: 14,
      mainTechnology: "devicon-apacheairflow-plain",
      title: "Migração RH",
      description: "Migração de dados do RH do PostgreSQL para MySQL",
      repositorie: "https://github.com/lleandrogon/Migracao-RH"
    },
    {
      id: 13,
      mainTechnology: "devicon-apacheairflow-plain",
      title: "Conversão Moedas",
      description: "Conversões de moedas orquestrado com Airflow",
      repositorie: "https://github.com/lleandrogon/Conversao-Moedas"
    },
    {
      id: 6,
      mainTechnology: "devicon-apachespark-original",
      title: "Global Energy",
      description: "ETL com Star Schema de transição de energia global",
      repositorie: "https://github.com/lleandrogon/Global-Energy"
    },
    {
      id: 18,
      mainTechnology: "devicon-apachespark-original",
      title: "Databricks E-C",
      description: "ETL de E-Commerce no Databricks",
      repositorie: "https://github.com/lleandrogon/E-Commerce-Databricks"
    },
    {
      id: 17,
      mainTechnology: "devicon-apachespark-original",
      title: "Google Play Store",
      description: "Arquitetura medalhão com ETL de apps da Play Store",
      repositorie: "https://github.com/lleandrogon/Google-Play-Store"
    },
    {
      id: 12,
      mainTechnology: "devicon-apachespark-original",
      title: "Music Store",
      description: "ETL de loja músical orquestrado com jobs do Databricks",
      repositorie: "https://github.com/lleandrogon/Music-Store"
    },
    {
      id: 11,
      mainTechnology: "devicon-apachespark-original",
      title: "ETL Vendas",
      description: "ETL de vendas de uma empresa, feito no Databricks",
      repositorie: "https://github.com/lleandrogon/ETL_vendas_Databricks"
    },
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
    }
  ];
}
