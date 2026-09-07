export const navigation = [
  { label: "Sobre", href: "#sobre" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Projetos", href: "#projetos" },
  { label: "Stack", href: "#stack" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
] as const;

export const socialLinks = {
  github: "https://github.com/DevRaviMariani",
  linkedin: "https://www.linkedin.com/in/ravi-mariani-75146231b/",
  instagram: "https://www.instagram.com/devravimariani/",
  email: "mailto:ravibrandao22@gmail.com",
  whatsapp: "https://wa.me/5571993416664",
  portfolio: "https://devravimariani.github.io/portfolio/",
} as const;

export const expertise = [
  {
    number: "01",
    title: "Desenvolvimento Web",
    description:
      "Desenvolvimento e evolução de aplicações e interfaces web, considerando responsividade, usabilidade, integração e manutenção.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"],
    className: "lg:col-span-7",
  },
  {
    number: "02",
    title: "Sistemas & Backend",
    description:
      "Construção e manutenção de funcionalidades, regras de negócio, bancos de dados, APIs e integrações entre sistemas.",
    technologies: ["PHP", "Laravel", "MySQL", "PostgreSQL", "REST APIs"],
    className: "lg:col-span-5",
  },
  {
    number: "03",
    title: "Inteligência Artificial & Educação",
    description:
      "Estudo e aprofundamento no uso de IA para construção de prompts e apoio ao desenvolvimento, suporte e manutenção de sites e sistemas, com interesse especial em AI in Education (AIED).",
    technologies: ["Sistemas de IA", "Engenharia de prompts", "AIED", "Ambiente web"],
    className: "lg:col-span-12",
  },
] as const;

export const stack = [
  { category: "Frontend", technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"] },
  { category: "Backend", technologies: ["PHP", "Laravel", "Java"] },
  { category: "Dados", technologies: ["MySQL", "PostgreSQL"] },
  { category: "Web", technologies: ["WordPress", "APIs"] },
  { category: "IA & Educação", technologies: ["Python", "LLMs", "Engenharia de prompts", "AIED"] },
  { category: "Ferramentas", technologies: ["Git", "GitHub", "Figma"] },
] as const;
