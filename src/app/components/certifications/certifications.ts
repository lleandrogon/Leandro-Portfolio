import { Component } from '@angular/core';
import { CertificateInterface } from '../../interfaces/certificate-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css'
})

export class Certifications {
  public certificates: CertificateInterface[] = [
    {
      id: 1,
      icon: "fa-solid fa-server fs-2",
      title: "Assistente de Operação de Redes de Computadores",
      company: "Senai",
      description: "Formação voltada à operação e manutenção de redes de computadores, com ênfase em infraestrutura de rede, cabeamento, protocolos e suporte técnico.",
      link: "https://drive.google.com/file/d/18fFPlop6t8nzLnRom0e9uPpvOCVM19Mo/view"
    },
    {
      id: 2,
      icon: "fa-solid fa-computer fs-2",
      title: "Operador de Computador",
      company: "Senai",
      description: "Curso focado no uso eficiente de sistemas operacionais, editores de texto, planilhas eletrônicas e navegação na internet para rotinas administrativas.",
      link: "https://drive.google.com/file/d/18bomU7EubYd37d_kM5D6w6nwke6mkvST/view"
    },
    {
      id: 3,
      icon: "fa-solid fa-language fs-2",
      title: "Inglês Avançado",
      company: "Instituto Brasileiro de Línguas",
      description: "Curso de inglês com foco em conversação, escrita, leitura e compreensão oral, preparando para situações acadêmicas e profissionais de alta complexidade.",
      link: "https://drive.google.com/file/d/18gbk6Gm-XfELRbdtY23jfw8xfMA04lJH/view"
    },
    {
      id: 4,
      icon: "devicon-javascript-plain fs-2",
      title: "Curso Web Moderno Completo com JavaScript + Projetos",
      company: "Udemy",
      description: "Formação completa em desenvolvimento web moderno utilizando HTML, CSS, JavaScript, TypeScript e Frameworks, com foco em projetos práticos.",
      link: "https://www.udemy.com/certificate/UC-fb762282-187c-4e81-8c66-1c58262cc708/"
    },
    {
      id: 5,
      icon: "devicon-php-plain fs-1",
      title: "Desenvolvimento Web com PHP e Banco de Dados MySQL",
      company: "Udemy",
      description: "Curso prático de desenvolvimento web utilizando PHP e MySQL, incluindo criação de sistemas dinâmicos e integração com banco de dados.",
      link: "https://www.udemy.com/certificate/UC-39ec8106-a459-4bac-9b59-647be0d5b3b5/"
    },
    {
      id: 6,
      icon: "devicon-laravel-original fs-2",
      title: " Desenvolvimento Web Avançado com PHP, Laravel e Vue.JS",
      company: "Udemy",
      description: "Capacitação avançada em desenvolvimento full stack com Laravel, Vue.js, APIs RESTful, autenticação, e boas práticas de arquitetura de software.",
      link: "https://www.udemy.com/certificate/UC-65fb837e-de8a-454f-a949-9db7fba43566/"
    }
  ]
}
