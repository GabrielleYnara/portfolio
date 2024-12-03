console.log("English file accessed");
const en = {
    home: "Home",
    resume: "Resume",
    contact: "Contact",
    greeting: "Hey there!",
    introduction: "I'm Gabrielle Ynara",
    job_title: "A full-stack developer, passionate about learning and able to quickly adapt (almost as quick as my old dog forgets she just got a treat).",
    current_work: "Currently, I work for a private company, and in my free time, I pursue independent projects to advance my skills, explore new programming horizons, and have fun.",
    
    showcase: "Showcase",
    showcase_description: "Here are some cool projects I've worked on, you can visit <a href='https://github.com/GabrielleYnara' target='_blank' aria-label='My GitHub profile (opens new tab)'>my GitHub profile</a> for more.",
    
    projects: [
        {
        title: "Tic-Tac-Toe",
        description: "Nostalgic design, players engage in the classic strategy game with a clean, interactive interface.",
        url: "https://gabrielleynara.github.io/tic-tac-toe/",
        aria_label: "Tic-Tac-Toe (opens new tab)"
        },
        {
            title: "Coming Soon",
            description: "",
            url: "",
            aria_label: "",
            inactive: true
        },
        {
            title: "Coming Soon",
            description: "",
            url: "",
            aria_label: "",
            inactive: true
        },
        {
            title: "Coming Soon",
            description: "",
            url: "",
            aria_label: "",
            inactive: true
        }
    ],

    quote: "You're better off starting imperfectly, than being paralyzed by the hope or illusion of perfection.",
    quote_font: "- Can't remember where I heard it, but it sure sounds true!",
    source_code: "Built by Gabrielle Ynara",
    source_code_aria_lbl: "Opens source code in a new tab",

    resume: "Resume",

    skills_label: "Skills",
    skills: [
        {
            category: "Programming Languages",
            items: ["Java", "JavaScript", "TypeScript","HTML", "CSS"]
        },
        {
            category: "Technologies",
            items: ["SASS", "Bootstrap", "Angular", "React", "Node.js", 
            "PostgreSQL", "Oracle", "MongoDB", "Design Patterns", "MVC Architecture", "Spring Boot",
            "Cucumber", "Mockito"]
        },
        {
          category: "Accessibility",
          items: ["Expertise in accessibility standards, including screen reader compatibility, keyboard interactivity, color contrast, and accessible PDFs"]
        },
        {
            category: "Human Skills",
            items: ["Flexibility", "Team Collaboration", "Intercultural Communication", "Problem-Solving"]
        },
        {
            category: "Certifications",
            items: [
                "Software Engineering Immersive (2023) - General Assembly", 
                "Salesforce Platform App Builder (2021)", 
                "Salesforce Administrator (2021)", 
                "Full Stack Web & Mobile Development (2020) - Nucamp"]
        }
    ],

    education_label: "Education",
    education: [
        {
            institution: "FATEC Mogi das Cruzes SP - Brazil",
            degree: "Systems Analysis and Development Technologist degree",
            period: "07/2013 - 12/2017",
            project: "Control More",
            projectSummary: "A comprehensive web-based personal financial control system, ready to be personalized and provide analytic views",
            projectDetails: [
                "Emphasized easy modification and minimal class impact through design patterns and MVC architecture.",
                "Applied best programming practices and knowledge acquired during studies.",
                "Utilized a variety of technologies and tools: Java, JavaScript, HTML, CSS, SQL, Java EE (Servlets, JSP), Apache Tomcat, Oracle Database, and JDBC.",
                "Implemented multiple design patterns: Spring, Facade, Command, ViewHelper, DAO, and Strategy."
            ],
            projectFont: "GitHub",
            projectFont_label: "Details and source code are available on ",
            projectFont_url: "https://github.com/GabrielleYnara/Control-More",
            projectFont_ariaLbl: "GitHub repository (opens new tab)",        }
    ],

    work_label: "Work Experience",
    work_experience: [
        {
          role: "Jr. Software Engineer",
          period: "01/2024 - present",
          company: "Interapt (Partnered with CVS)",
          location: "Louisville, KY",
          experience: [
            "<strong>Developed expertise in accessibility</strong>, including refactoring JavaScript solutions to improve accessibility and usability across multiple pages. Resolved issues with file downloads, calendar pop-ups, and alert messages using JavaScript, ensuring an improved user experience. Conducted research on accessible PDFs and enhanced UI accessibility (keyboard interactivity, color contrast, readability). Analyzed our mobile app to create a presentation, identifying issues that led to the creation of user stories to fix them.",
            "Collaborated on complex projects, including deep linking and managing cookie-based redirection using environment-specific URL handling.",
            "Managed link and resource updates, including handling JSP and configuration files to ensure accurate content updates.",
            "<strong>Earned early recognition</strong> for proactive problem-solving and effective collaboration with senior developers and team members."
          ],
          expanded: true
        },
        {
          role: "Associate Solution Engineer",
          period: "09/2020 - 04/2022",
          company: "Salesforce",
          location: "São Paulo, Brazil",
          experience: [
            "Collaborated with a sales team of 10 Account Executives and their manager to understand customer needs and goals, and suggest adequate products from a technical and business perspective.",
            "Performed over 240 tailored demonstrations, increasing deals closed rate.",
            "Led training sessions on three products to a sales team of 20 to 30 people."
          ],
          expanded: true
        },
        {
          role: "Au Pair",
          period: "04/2018 - 07/2020",
          company: "Cultural Care",
          location: "Maplewood - NJ, Lafayette - CA, Franklin - TN",
          experience: [
            "Provided consistent care for 5 children across 3 different families, ranging in age from 2 months to 6 years.",
            "Adapted to varying family environments and childcare needs, enhancing critical thinking, global awareness, and intercultural communication skills."
          ],
          expanded: false
        },
        {
          role: "Intern Web Developer",
          period: "08/2017 - 02/2018",
          company: "Sil Tecnologia",
          location: "Arujá, Brazil",
          experience: [
            "Developed and maintained reports.",
            "Updated design, and conducted minor bug fixes and development, resulting in improved website functionality."
          ],
          expanded: false
        },
        {
          role: "Administrative Assistant",
          period: "06/2016 - 08/2017",
          company: "Instituto Educacional Soares Prado",
          location: "Mogi das Cruzes, Brazil",
          experience: [
            "Managed administrative activities, including customer service, marketing, financial control, and teachers and students administration.",
            "Created a filing system and spreadsheets for better governance."
          ],
          expanded: false
        },
        {
          role: "Junior Technical Support Assistant",
          period: "05/2014 - 06/2015",
          company: "Plan It",
          location: "Mogi das Cruzes, Brazil",
          experience: [
            "Provided customer service.",
            "Tested new versions or minor fixes.",
            "Remotely updated customer bases.",
            "Reported queries, and conducted minor database troubleshooting (PostgreSQL)."
          ],
          expanded: false
        }
    ],

    contact_me: "Send me a message",
    name: "Name",
    name_placeholder: "First and Last name",
    required_name: "Put down your name, so I know who you are.",
    email: "Email",
    email_placeholder: "example@email.com",
    required_email: "Add your email, so I can answer you.",
    message: "Message",
    message_placeholder: "Write your message here",
    required_message: "Don't forget your message.",
    send: "Send"

};
