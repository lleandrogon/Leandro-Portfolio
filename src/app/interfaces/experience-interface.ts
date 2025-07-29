import { TechnologyInterface } from "./technology-interface";

export interface ExperienceInterface {
    id: number;
    title: string;
    company: string;
    time: string;
    description: string;
    technologies: TechnologyInterface[];
}
