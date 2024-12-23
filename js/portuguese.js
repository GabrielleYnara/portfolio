console.log("Portuguese file accessed");
const pt = {
    home:"Início",
    resume: "Currículo",
    contact: "Contato",
    greeting: "Eaeee!",
    introduction: "Sou Gabrielle Ynara",
    job_title: "Sou desenvolvedora full-stack, apaixonada por aprender e com facilidade em me adaptar (quase tão rápido quanto minha cachorrinha idosa esquece que acabou de ganhar um petisco).",
    current_work: "Atualmente, trabalho para uma empresa privada, e no meu tempo livre, desenvolvo projetos independentes para aprimorar minhas habilidades, explorar novos horizontes na programação e me divertir.",
    
    showcase: "Destaque",
    showcase_description: 'Aqui estão alguns dos meus projetos mais legais, você pode visitar <a href="https://github.com/GabrielleYnara" target="_blank" aria-label="Meu perfil no GitHub (abre nova aba)">meu perfil no GitHub</a> para ver mais.',
    
    projects: [
        {
            title: "Jogo da Velha",
            description: "Design nostálgico, os jogadores participam do clássico jogo de estratégia com uma interface limpa e interativa.",
            url: "https://gabrielleynara.github.io/tic-tac-toe/",
            aria_label: "Jogo da Velha (abre nova aba)"
        },
        {
            title: "Em Breve",
            description: "",
            url: "",
            aria_label: "",
            inactive: true
        },
        {
            title: "Em Breve",
            description: "",
            url: "",
            aria_label: "",
            inactive: true
        },
        {
            title: "Em Breve",
            description: "",
            url: "",
            aria_label: "",
            inactive: true
        }
    ],

    quote: "É melhor começar de forma imperfeita do que ser paralisado pela esperança ou ilusão de perfeição.",
    quote_font: "- Não consigo lembrar de onde ouvi isso, mas parece bem verdade!",
    source_code: "Criado por Gabrielle Ynara",
    source_code_aria_lbl: "Abre o código fonte em uma nova aba",

    resume: "Currículo",
    skills_label: "Qualificações",
    skills: [
        {
            category: "Linguagens de Programação",
            items: ["Java", "JavaScript", "TypeScript", "HTML", "CSS"]
        },
        {
            category: "Tecnologias",
            items: ["SASS", "Bootstrap", "Angular", "React", "Node.js", 
            "PostgreSQL", "Oracle", "MongoDB", "Padrões de Projeto", "Arquitetura MVC", "Spring Boot",
            "Cucumber", "Mockito"]
        },
        {
            category: "Acessibilidade",
            items: ["Conhecimento em padrões de acessibilidade, incluindo compatibilidade com leitores de tela, interatividade via teclado, contraste de cores e PDFs acessíveis"]
        },          
        {
            category: "Habilidades Comportamentais", 
            items: ["Adaptabilidade", "Trabalho em Equipe", "Comunicação Intercultural", "Resolução de Problemas"]
        },
        {
            category: "Certificações",
            items: [
                "Engenharia de Software Imersivo (2023) - General Assembly",
                "Salesforce Platform App Builder (2021)",
                "Administrador Salesforce (2021)",
                "Desenvolvimento Full Stack Web & Mobile (2020) - Nucamp"
            ]
        }
    ],

    education_label: "Formação Acadêmica",
    education: [
        {
            institution: "FATEC Mogi das Cruzes SP - Brasil",
            degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
            period: "07/2013 - 12/2017",
            project: "Control More",
            projectSummary: "Um sistema robusto de controle financeiro pessoal, pronto para ser personalizado e fornecer visões analíticas.",
            projectDetails: [
                "Enfatizei a facilidade de manutenção e o mínimo impacto nas classes, utilizando padrões de design e arquitetura MVC.",
                "Adotei boas práticas de programação e apliquei os conhecimentos adquiridos durante o curso.",
                "Utilizei diversas tecnologias e ferramentas: Java, JavaScript, HTML, CSS, SQL, Java EE (Servlets, JSP), Apache Tomcat, Oracle Database e JDBC.",
                "Implementei diferentes padrões de design: Spring, Facade, Command, ViewHelper, DAO e Strategy."
            ],
            projectFont: "GitHub",
            projectFont_label: "Detalhes e código fonte disponíveis no ",
            projectFont_url: "https://github.com/GabrielleYnara/Control-More",
            projectFont_ariaLbl: "Repositório no GitHub (abre uma nova aba)"
        }
    ],
    work_label: "Work Experience",
    work_label: "Experiência Profissional",
    work_experience: [
        {
            role: "Engenheira de Software Jr.",
            period: "01/2024 - presente",
            company: "Interapt (Parceria com CVS)",
            location: "Louisville, KY",
            experience: [
              "<strong>Desenvolvi expertise em acessibilidade</strong>, refatorando soluções em JavaScript para melhorar a acessibilidade e usabilidade em várias páginas. Resolvi problemas com downloads de arquivos, pop-ups de calendário e mensagens de alerta usando JavaScript, garantindo uma melhor experiência para o usuário. Pesquisei PDFs acessíveis e aprimorei a acessibilidade da interface (interatividade via teclado, contraste de cores, legibilidade). Analisei nosso aplicativo móvel para criação de uma apresentação, identificando problemas que levaram à criação de histórias de usuário para corrigi-los.",
              "Colaborei em projetos complexos, incluindo deep linking e gerenciamento de redirecionamento baseado em cookies utilizando URLs específicas para cada ambiente.",
              "Gerenciei atualizações de links e recursos, manuseando arquivos JSP e de configuração para garantir atualizações precisas.",
              "<strong>Recebi reconhecimento precoce</strong> por minha proatividade na resolução de problemas e pela colaboração eficaz com a equipe e desenvolvedores em diferentes níveis de senioridade."
            ],
            expanded: true
        },
        {
            role: "Engenheira de Soluções Associada",
            period: "09/2020 - 04/2022",
            company: "Salesforce",
            location: "São Paulo, Brasil",
            experience: [
                "Colaborei com uma equipe de vendas composta por 10 Executivos de Contas e seu gerente para entender as necessidades e objetivos dos clientes, sugerindo produtos adequados sob uma perspectiva técnica e de negócios.",
                "Realizei mais de 240 demonstrações personalizadas, aumentando a taxa de fechamento de negócios.",
                "Liderei sessões de treinamento sobre três produtos para uma equipe de vendas de 20 a 30 pessoas."
            ],
            expanded: true
        },
        {
            role: "Au Pair",
            period: "04/2018 - 07/2020",
            company: "Cultural Care",
            location: "Maplewood - NJ, Lafayette - CA, Franklin - TN",
            experience: [
                "Proporcionei cuidados consistentes para 5 crianças em 3 famílias diferentes, com idades variando de 2 meses a 6 anos.",
                "Me Adaptei a diferentes ambientes familiares e necessidades de cuidado infantil, aprimorando o pensamento crítico, a consciência global e as habilidades de comunicação intercultural."
            ],
            expanded: false
        },
        {
            role: "Estagiária em Desenvolvimento Web",
            period: "08/2017 - 02/2018",
            company: "Sil Tecnologia",
            location: "Arujá, Brasil",
            experience: [
                "Desenvolvi e mantive relatórios.",
                "Atualizei o design, realizei desenvolvimento e correções de bugs menores, resultando em melhorias na funcionalidade do site."
            ],
            expanded: false
        },
        {
            role: "Assistente Administrativa",
            period: "06/2016 - 08/2017",
            company: "Instituto Educacional Soares Prado",
            location: "Mogi das Cruzes, Brasil",
            experience: [
                "Gerenciei atividades administrativas, incluindo atendimento ao cliente, marketing, controle financeiro, e administração de professores e alunos.",
                "Criei um sistema de arquivamento e planilhas para melhorar a governança."
            ],
            expanded: false
        },
        {
            role: "Assistente Técnico Júnior de Suporte",
            period: "05/2014 - 06/2015",
            company: "Plan It",
            location: "Mogi das Cruzes, Brasil",
            experience: [
                "Prestei atendimento ao cliente.",
                "Testei novas versões ou pequenas correções.",
                "Atualizei remotamente bases de clientes.",
                "Gerei relatórios de consultas e realizei pequenos ajustes no banco de dados (PostgreSQL)."
            ],
            expanded: false
        }
    ],

    contact_me: "Me envie uma mensagem",
    name: "Nome",
    name_placeholder: "Nome e Sobrenome",
    required_name: "Coloque seu nome, assim eu saberei quem você é.",
    email: "Email",
    email_placeholder: "exemplo@email.com",
    required_email: "Adicione seu email, para que eu possa te responder.",
    message: "Mensagem",
    message_placeholder: "Escreva sua mensagem aqui",
    required_message: "Não se esqueça da sua mensagem.",
    send: "Enviar"
};
