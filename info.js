let info = {
  name: "Ramon Villalobos",
  logo_name: "RV",
  phone: '+58 412-0349845',
  flat_picture: require("./src/assets/foto_personal.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "Saludos soy Ramon Villalobos Ingeniero en Informática egresado de la Universidad Nacional Experimental Romulo Gallegos, localizada en Guárico de Venezuela con intereses en el desarrollo web, siempre en busca de oportunidades emocionantes relacionadas a lo mismo.<br><br> Soy una persona orientada a los detalles manteniendo mis metas y tareas organizadas para mantener  y aumentar la productividad. Trayendo a la mesa una gran amplia gama de habilidades en el ámbito del desarrollo web, desde construcción de bases de datos hasta desarrollo de api Rest. Las habilidades adquiridas en el ámbito laboral y la vida universitaria me definen, siempre con ganas de  seguir creciendo en el ámbito del desarrollo de software.",
  links: {
    linkedin:  "https://linkedin.com/in/ramon-villalobos",
    github:    "https://github.com/antonio22miskovic",
  },
  education: [
    {
      name: "Universidad Nacional Experimental Romulo Gallegos",
      place: "Guárico, Venezuela",
      date: "Abr, 2016 - Feb, 2021",
      degree: "Ingeniero en Informática",
      gpa: "8.0 / 10.0",
      description:
        "Especialización en las mas actuales tecnologías de desarrollo de software, Mantenimientos de equipos, desarrollo de algoritmos para fines determinados.",
      skills: [
        "Algoritmo",
        "Desarrollo de software",
        "Mantenimientos de equipos computacionales",
        "Resolución de problemas",
      ]
    }
  ],
  experience: [
    {
      name: "789MX",
      place: "México",
      date: "jul, 2021 - actualidad",
      position: "Full Stack Web Developer",
      description:
        "Mantenimiento de modulos existentes y implementación de nuevas funcionalidades.",
      skills: ["PHP", "Laravel", "Javascript", "JQuery", "LTEAdmin", "Mysql", "Git"]
    },
    {
      name: "Sistemas Tecnológicos Alcaraván S.A",
      place: "Guárico, Venezuela",
      date: "Ago, 2020 - Ene, 2021",
      position: "Web Developer",
      description:
        "Desarrollo de sistemas del estado, implementando nuevas funcionalidades y mantenimiento de código existente y refactorización del mismo.",
      skills: ["Phyton", "Xml", "Odoo", "Javascript", "JQuery", "Postgresql"]
    }
  ],
  skills: [
    {
      title: "Conocimientos",
      info: [
        "Javascript",
        "Php",
        "MySQL",
        "Postgresql",
        "Html",
        "Css",
        "Xml",
        "Node.js",
        "Git"
      ],
      icon: "fa fa-code"
    },
    {
      title: "Frameworks",
      info: [
        "Laravel",
        "Vue",
        "JQuery",
        "Bootstrap"
      ],
      icon: "fa fa-cubes"
    },
    // {
    //   title: "Tecnologías web",
    //   info:  ["Node", "Xml", "HTML", "CSS", "Javascript"],
    //   icon: "fas fa-laptop-code"
    // },
    {
      title: "Databases",
      info: ["MySQL", "Postgresql"],
      icon: "fa fa-database"
    },
    {
      title: "Sistemas operativos y herramientas",
      info: [
        "Linux",
        "Scrum",
        "Heroku"
      ],
      icon: "fas fa-tools"
    },
    // {
    //   title: "design",
    //   info: ["Illustrator", "XD", "Photoshop", "Final Cut Pro"],
    //   icon: "fa fa-pencil-square-o"
    // }
  ],
  portfolio: [
    {
      name: "Escampa",
      pictures: [
        {
          img: require("./src/assets/portfolio/escampa/escampa1.png")
        },
        {
          img: require("./src/assets/portfolio/escampa/escampa2.png")
        }
      ],
      technologies: ["Php", "Html", "Javascript", "Css3", "Mysql", "Laravel"],
      category: "Aplicación Web",
      user:null,
      password:null,
      date: "Mar, 2021 - Jun, 2021",
      github:null,
      visit: "https://solicitud.escampa.mx/nuevo-registro",
      description:
        "Financiera escampa."
    },
    {
      name: "Crea",
      pictures: [
        {
          img: require("./src/assets/portfolio/crea/crea.png")
        }
      ],
      technologies: ["Laravel", "LTEAdmin","Bootstrap","Mysql","JQuery", "Javascript"],
      category: "Aplicación Web",
      user:null,
      password:null,
      date: "Ene, 2021 - Feb, 2021",
      github:null,
      visit: 'https://crea.789.com.mx/login',
      description:
        "WooCommerce, manejo de facturación, productos, clientes y sucursales."
    },
    {
      name: "Impuestos municipal",
      pictures: [
        {
          img: require("./src/assets/portfolio/impuestos/impuestos.png")
        }
      ],
      technologies: ["Odoo", "Phyton","Bootstrap","Postgresql","JQuery", "javascritp", "XML"],
      category: "Aplicación Web",
      user:null,
      password:null,
      date: "Ago, 2020 - Ene, 2021",
      github:null,
      visit: 'https://impuestosroscio.guiriri.com.ve/',
      description:
        "Sistema de impuesto y control municipal de Venezuela."
    },
    {
      name: "Historiales Clinicos",
      pictures: [
        {
          img: require("./src/assets/portfolio/clinical/4.png")
        },
        {
          img: require("./src/assets/portfolio/clinical/1.png")
        },
        {
          img: require("./src/assets/portfolio/clinical/2.png")
        },
        {
          img: require("./src/assets/portfolio/clinical/3.png")
        }
      ],
      technologies: ["Laravel", "Vue.js", "Javascript", "ApiRest", "Microservicios", "Vuetify", "Heroku", "Mysql"],
      category: "Aplicación Web",
      date: "Ene, 2021 - Feb, 2021",
      user:"maria@gmail.com",
      password:"1234",
      github:
        "https://github.com/antonio22miskovic/clinical_histories.git",
      visit: "https://eloquent-ritchie-f16182.netlify.app",
      description:
        "Aplicación de manejo del historial clinico, proporcionando la adminsitración de los datos de los pacientes con manejo de sus patologias, antecedentes, medicamnetos recetados, bajo el estandar HL7/CDA; Sistema con arquitectura de Microservicios."
    },
    {
      name: "Mi puchito",
      pictures: [
        {
          img: require("./src/assets/portfolio/puchito/puchito.png")
        },
        {
          img: require("./src/assets/portfolio/puchito/puchito2.png")
        }
      ],
      technologies: ["Laravel", "vue.js","Bootstrap","Mysql","JQuery", "Javascript"],
      category: "Aplicación Web",
      user:null,
      password:null,
      date: "Ago, 2020 - Sep, 2020",
      github:null,
      visit: 'http://www.mipuchito.com/',
      description:
        "Ecommerce, ventas en linea de productos y manejo de sucursales."
    },
    {
      name: "Chat el Bunkercito",
      pictures: [
        {
          img: require("./src/assets/portfolio/bunkercito/bunker1.png")
        },
        {
          img: require("./src/assets/portfolio/bunkercito/bunker2.png")
        }
      ],
      technologies: ["Php", "Html", "Javascript", "Css3", "Cpanel", "Mysql"],
      category: "Aplicación Web",
      user:null,
      password:null,
      date: "Mar, 2021 - Jun, 2021",
      github:null,
      visit: null,
      description:
        "Aplicación de chat online, donde los usuarios pueden interactuar en diversos grupos con temas en concreto por lo cual fueron creados."
    },

     {
      name: "Scraping Productos",
      pictures: [
        {
          img: require("./src/assets/portfolio/amazon/scraping2.jpg")
        },
        {
          img: require("./src/assets/portfolio/amazon/scraping3.png")
        },
        {
          img: require("./src/assets/portfolio/amazon/scraping1.jpg")
        }
      ],
      technologies: ["Node.js", "Javascript", "Discord.js", "Cheerio.js","Heroku", "Mysql"],
      category: "Servico de Scraping",
      user:null,
      password:null,
      date: "Jun, 2021 - Jun, 2021",
      github:'https://github.com/antonio22miskovic/amazon-scraping.git',
      visit: null,
      description:
        "Servicio de scraping con la finalidad de obtener una gran catidad de productos de distintas categorias de amazon y almacenar la información."
    },

    {
      name: "Bot Scraping",
      pictures: [
        {
          img: require("./src/assets/portfolio/bot/bot1.png")
        },
        {
          img: require("./src/assets/portfolio/bot/bot2.png")
        }
      ],
      technologies: ["Node.js", "Javascript", "Discord.js", "Cheerio.js","Heroku"],
      category: "Bot Discord",
      user:null,
      password:null,
      date: "Mar, 2021 - Jun, 2021",
      github:'https://github.com/antonio22miskovic/scraping-bot.git',
      visit: null,
      description:
        "Bot de discord con la finalidad de hacer un servicio de web scraping, para la detección de nuevos productos en cierta tienda online donde se detecta nuevos productos y detecta el restock de los productos y se envia dicha información al canal de discord."
    },
    {
      name: "Manejo de equipos",
      pictures: [
        {
          img: require("./src/assets/portfolio/crud/1.png")
        },
        {
          img: require("./src/assets/portfolio/crud/2.png")
        },
        {
          img: require("./src/assets/portfolio/crud/3.png")
        },
        {
          img: require("./src/assets/portfolio/crud/4.png")
        }
      ],
      technologies: [
        "Laravel", "Vue", "Mysql", "Bootstrap", "Heroku" ,"Javascript"
      ],
      category: "Aplicación Web",
      github: 'https://github.com/antonio22miskovic/inventario.git',
      date: "Oct, 2019 - Nov, 2019",
      user: 'user@gmail.com',
      password:'1234',
      visit:'http://frozen-fortress-82335.herokuapp.com/',
      description:
        "control de equipos tecnologicos con sus respectivas categorias."
    }
  ],
  portfolio_design: [
    {
      name: "Guituna",
      title: "Guituna - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/coursera1/MoodBoard.png"),
          title: "MoodBoard"
        },
        {
          img: require("./src/assets/designs/coursera1/Mockups 1.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/designs/coursera1/Mockups 2.png"),
          title: "Mockups 2"
        },
        {
          img: require("./src/assets/designs/coursera1/App Elements.png"),
          title: "App Elements"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - Jun, 2020",
      user:"pablo@gmail.com",
      password:"1234",
      visit: "",
      description:
        "Guituna is a simple, lightweight and intuitive guitar tuner, that provides different modes of guitars based on your usage. You can either select a specific string to tune, or free tune your guitar based on the frequency shown on the meter. Guituna also provides a handful of different tunings to help explore various tuning paradigms. There is also an array of settings that can be configured to your liking based on the devices you're using. <br/><br/>The interface aims to highlight the use of a minimal design and providing just enough controls to make for a great tuner, while exposing various possibilities of guitarists to explore."
    },
    {
      name: "Pantree",
      title: "Pantree - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/pantree/MoodBoard.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/pantree/1.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/designs/pantree/2.png"),
          title: "Mockups 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Pantree is a recipiece finding and recommending application. It is often the case that you have run to your closest grocery store just to pick up one item that is missing in your kitchen. Pantree keeps a track of all your ingredients, and suggests recipes based on your meal preferences and past recipes. <br/><br/> The goal of the interface is to keep it similar to various recipe/food apps to reduce the learning required by the user, but also provide a smooth interface for users to seemlessly browse through recipes and ingredients."
    },
    {
      name: "Bunder",
      title: "Bunder - MVP Proposal",
      pictures: [
        {
          img: require("./src/assets/designs/bunder/Moodboard.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 1.png"),
          title: "Mockup 1"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 2.png"),
          title: "Mockup 2"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 3.png"),
          title: "Mockup 3"
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 1.png"),
          title: "Market Research 1"
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 2.png"),
          title: "Market Research 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Bunder is an intuitive web platform for micro-communities to share sensitive data with privacy within the community and allow engagement amongst them. Our aim is two-fold - Co-existing and Collaboration. The former is executed by providing a platform for communities that are geographically positioned in the same proximity (Housing societies, Dorms, Apartment Complexes) to have and share data (exact apartment addresses, phone number, apartment housing rules, individuals tested positive for COVID-19) in an exclusive platform. The latter is to give these people in the community the ability to carry out a task you are physically or remotely unable to do; with dignity and ease."
    }
  ],
  recommendations: [
    {
      title:
        "In his internship, Hrishikesh has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
      author: "Ushanas Shastri",
      position: "CTO",
      company: "Viteos Capital Market Services",
      location: "Mumbai"
    },
    {
      title:
        "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
      author: "Anil Dukkipatty",
      position: "CTO",
      company: "Elemential Labs",
      location: "Mumbai"
    },
    {
      title:
        "He has gained great knowledge and experience of SDE, and has learned ot develop the application keeping in mind the client's perpective and also making it creative.",
      author: "Chintan Shah",
      position: "Director",
      company: "Hridayam Soft Solution",
      location: "Mumbai"
    },
    {
      title:
        "During the course of his employment we have found him to be a self-started who was motivated, duty bound and a highly commited team player.",
      author: "Mrinal Pai",
      position: "Co-Founder & Director",
      company: "Skylark Drones",
      location: "Bangalore"
    }
  ]
};

export default info;
