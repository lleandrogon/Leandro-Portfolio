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
      id: 18,
      mainTechnology: "devicon-azuresqldatabase-plain",
      title: "Combustível Brasil",
      description: "ELT com DBT do preço dos combustíveis no Brasil",
      repositorie: "https://github.com/lleandrogon/Combustivel-Brasil"
    },
    {
      id: 17,
      mainTechnology: "devicon-azuresqldatabase-plain",
      title: "Carros na Noruega",
      description: "ELT com DBT de vendas de carros na Noruega",
      repositorie: "https://github.com/lleandrogon/Vendas-Carros-Noruega"
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
