import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Home } from "../../components/home/home";
import { AboutMe } from "../../components/about-me/about-me";
import { Skills } from "../../components/skills/skills";
import { Experience } from "../../components/experience/experience";
import { Projects } from "../../components/projects/projects";

@Component({
  selector: 'app-main-layout',
  imports: [Header, Home, AboutMe, Skills, Experience, Projects],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayout {

}
