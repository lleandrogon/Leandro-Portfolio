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
      time: "Agosto 2024 - Maio 2026",
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
          name: "SQL",
          icon: "devicon-azuresqldatabase-plain fs-1"
        },
        {
          id: 4,
          name: "Docker",
          icon: "fa-brands fa-docker fs-2"
        },
      ]
    },
    {
      id: 2,
      title: "Engenheiro de Software",
      company: "Next Opinion",
      time: "Maio 2025 - Maio 2026",
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
          icon: "devicon-azuresqldatabase-plain fs-1"
        },
        {
          id: 5,
          name: "Docker",
          icon: "fa-brands fa-docker fs-2"
        },
        {
          id: 6,
          name: "Git",
          icon: "devicon-git-plain fs-2"
        }
      ]
    },
    {
      id: 3,
      title: "Engenheiro de Dados",
      company: "Prefeitura de Maceió",
      time: "Maio 2026 - Atual",
      description: "Orquestrei um pipeline ETL com Apache Airflow para automação de dados do Banco de Talentos do evento Negócio da Grota, reduzindo a execução manual de scripts de 7 minutos para menos de 1 minuto. Implementei um pipeline de transformação com PySpark e SQL para análise de vendas em eventos de empreendedorismo da Prefeitura. Modelei bancos de dados relacionais para centralização de dados antes gerenciados em planilhas. Estruturei ambientes de Data Lake na Azure seguindo a arquitetura Medalhão (Bronze, Silver e Gold). Implementei boas práticas de segurança e gerenciamento de credenciais utilizando Azure Key Vault, evitando o armazenamento direto de segredos e credenciais no código das aplicações. Desenvolvi dashboards e indicadores no Power BI e publiquei relatórios utilizando Microsoft Fabric.",
      technologies: [
        {
          id: 1,
          name: "SQL",
          icon: "devicon-azuresqldatabase-plain fs-1"
        },
        {
          id: 2,
          name: "Python",
          icon: "devicon-python-plain fs-1"
        },
        {
          id: 3,
          name: "Azure",
          icon: "devicon-azure-plain fs-2"
        },
        {
          id: 4,
          name: "Spark",
          icon: "devicon-apachespark-original fs-2"
        },
        {
          id: 5,
          name: "Airflow",
          icon: "devicon-apacheairflow-plain fs-2"
        },
        {
          id: 6,
          name: "Docker",
          icon: "fa-brands fa-docker fs-2"
        }
      ]
    }
  ]
}