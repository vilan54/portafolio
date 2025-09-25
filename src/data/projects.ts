export type Project = {
  title: string;
  desc: string;
  tags: string[];
  code: string; // repo
};

export const projects: Project[] = [
  {
    title: "Neurolab",
    desc: "Homelab con VPN (WireGuard), reverse proxy, monitorización y bots de Telegram.",
    tags: ["WireGuard", "Docker", "Grafana", "NPM", "Adguard"],
    code: "#",
  },
  {
    title: "Gamemasters League",
    desc: "Aplicación web similar a la Fantasy League.",
    tags: ["Java", "Spring", "PostgreSQL", "React", "JavaScript", "CSS"],
    code: "https://github.com/vilan54/gamemasters-league",
  },
  {
    title: "Buscador de Pruebas Deportivas",
    desc: "Aplicación web que simula un buscador de pruebas deportivas.",
    tags: ["Java", "Spring", "MySQL", "React", "JavaScript", "CSS"],
    code: "https://github.com/vilan54/buscador-pruebas-deportivas",
  },
  {
    title: "Sistema Gestión de Usuarios",
    desc: "Backend de un Sistema de Gestión de Usuarios en Spring Boot + PostgreSQL.",
    tags: ["Java", "Spring", "PostgreSQL"],
    code: "https://github.com/vilan54/usermanagement",
  },
  {
    title: "Wiki Elixir",
    desc: "Sistema para la publicación de articulos con gestión de usuarios.",
    tags: ["Elixir", "Distribuido"],
    code: "https://github.com/vilan54/distributed-article-system",
  },
  {
    title: "Sistema de Gestión de Bases de Datos",
    desc: "Aplicación de escritorio para gestionar bases de datos de MySQL.",
    tags: ["Python", "MySQL"],
    code: "https://github.com/vilan54/PVP-04-Database-manager",
  },
  {
    title: "Simulación de Manejo de Cuentas Bancarias",
    desc: "Aplicación de terminal para simular manejo de cuentas bancarias con lectura de archivos.",
    tags: ["C", "Ubuntu", "Makefile"],
    code: "https://github.com/vilan54/PVP-02-Bank-Management-C",
  },
  {
    title: "Sistema de Gestión de Productos de Almacén",
    desc: "Backend de un Sistema de Gestión de Productos en Spring Boot + PostgreSQL.",
    tags: ["Java", "Spring", "PostgreSQL"],
    code: "https://github.com/vilan54/XPN-Practica2",
  },
  
];
