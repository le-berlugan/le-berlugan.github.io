export const en = {
  "basics": {
    "title": "About",
    "name": "Anthony FARAUT",
    "label": "Full stack developer / Data scientist",
    "picture": "myself.jpg",
    "email": "firstname.name[at]gmail.com",
    "phone": "(+33) 6 67 30 26 72",
    "website": "http://www.anthonyfaraut.fr",
    "summary": "Hello everyone !  \n  \nReal Gyro Gearloose, I evolve as much in manual work as in the exploration of new technologies. With an unconventional background, my off-road skills allow me to develop my thirst for knowledge in an ever wider spectrum.\n  \nAfter obtaining my economic and social high school diploma, I entered the IT department of the IUT of Nice Sophia-Antipolis. Second in class, this training was my gateway to access engineering schools, so I joined INSA Lyon. In an international world and to confront myself with other ways of working, I chose to do a double degree with the University of Passau in Germany.\n  \nI am curious by nature, I like to understand how everything works and where things come from. Thanks to the Internet, I can find the answer to all my questions, which always pushes the limits of my knowledge further. Each problem has its solution and I let myself easily embark on new projects. The latest being the co-construction of a <a href='https://www.femininbio.com/societe/interview-et-temoignages/logement-ecologique-alice-anthony-ont-construit-leur-tiny-house-60914' target='_blank'>tiny house</a>, a 14m2 micro house to meet the challenge of fitting out a small space.\n  \nToday, when I hear big data, machine learning, robots and websites, I see the beginning of a new adventure, but I remain open to any new challenge.",
    "information": "Built with <a href='https://www.facebook.github.io/react/' target='_blank'>React</a> and a <a href='https://jsonresume.org/schema/' target='_blank'>JSON Resume Schema</a>. Hosted on <a href='https://github.com/afaraut/afaraut.github.io' target='_blank'>Github</a>.",
    "location": {
      "address": "20 avenue Albert Einstein",
      "postalCode": "06310 ",
      "city": "Beaulieu s/mer",
      "countryCode": "France",
      "region": "French Riviera"
    },
    "profiles": [{
      "network": "Linkedin",
      "username": "",
      "icon": "fa fa-linkedin-square",
      "url": "https://www.linkedin.com/in/anthonyfaraut/en"
    }, {
      "network": "GitHub",
      "username": "",
      "icon": "fa fa-github",
      "url": "https://www.github.com/afaraut"
    }, {
      "network": "Stack overflow",
      "username": "",
      "icon": "fa fa-stack-overflow",
      "url": "https://www.stackoverflow.com/users/4998337/afaraut"
    }, {
      "network": "Skype",
      "username": "",
      "icon": "fa fa-skype",
      "url": "skype:anthonyfaraut?call"
    }, {
      "network": "Resume",
      "username": "",
      "icon": "fa fa-file-pdf-o",
      "url": "pdf/CV%20Anthony%20FARAUT%20-%20EN.pdf"
    }],
    "menu": [{
      "label": "Home",
      "icon": "fa fa-lg fa-home",
      "click": "handleClick_home",
      "url": "/"
    }, {
      "label": "Projects",
      "icon": "fa fa-lg fa-terminal",
      "click": "handleClick_project",
      "url": "/projects"
    }, {
      "label": "Map",
      "icon": "fa fa-lg fa-map-marker",
      "click": "/map",
      "url": "/map"
    }]
  },
  "work": {
    "title": "Work experiences",
    "items": [{
      "company": "Total Oil Trading SA",
      "position": "Full stack developer/Data scientist",
      "website": "https://ts.total.com/",
      "startDate": "Jan, 2020",
      "endDate": "Today",
      "place": "Geneva - Switzerland",
      "picture" : "logo_totsa.jpg",
      "summary": "**Industries: Trading company in the petroleum sector.**  \n  \nInternalization after 2 years as a consultant for QIM Info (below).",
      "attachments": [],
      "highlights": []
    }, {
      "company": "QIM-Info",
      "position": "Full stack developer/Data scientist",
      "website": "https://www.qiminfo.ch/en/",
      "startDate": "Jan, 2018",
      "endDate": "Dec, 2019",
      "place": "Geneva - Switzerland",
      "picture" : "logo_qim-info.jpg",
      "summary": "**Industries: Computer services and engineering company.**  \n  \nConsultant for [TOTSA (Totsa Total Oil Trading SA)](https://www.totsa.com/) in Geneva - Switzerland  \n  \nMember of the DigiLab team (research laboratory operating in startup mode).  \nDigitalization and simplification of business through several transversal projects  \n  \nThe main mission is to test, suggest generic digital tools and develop projects mainly for front office support functions (operations, charterers, management control, finance, ...)  \n* Developed full stack projects, backends in Flask and various frontends in Vuejs with components  \n* Implemented web scraping routines using N.E.R with SpaCy and KPI tools to automate client satisfaction follow-up  \n* Developed standardized python libraries to decrease maintenance costs (internal PyPI and microservices) \n* Developed data pipelines enrichment/matching projects to improve internal data (REST Api / SDK data providers)  \n* Developed models and algorithms around services related to the trading and chartering of boats for petroleum products (cargo prediction, destination prediction, conversational agents, etc.).\n* Upskilling through technological and competitive watch - Development of PoCs (Proof of concept) to prove feasibility\n* Proposal and use of new ways of working and collaborating",
      "attachments": [{
        "label": "Lettre de recommandation",
        "icon": "fa fa-lg fa-file-pdf-o",
        "url": "Letter of recommandation - Certificat de Travail - Jacques Daudel.pdf"
      }],
      "highlights": ["Python", "Vuejs/React", "TypeScript", "Open source", "Docker", "Git", "Elasticsearch", "Kibana", "MongoDB", "Azure DevOps", "SonarQube", "Vessel tracking", "AIS data"]
    }, {
      "company": "Sigmalis",
      "position": "Full-stack developer",
      "website": "https://www.sigmalis.ch/en/",
      "startDate": "Mar, 2017",
      "endDate": "Dec 2017",
      "place": "Geneva - Switzerland",
      "picture" : "logo_sigmalis.png",
      "summary": "**Industries :  Consulting and engineering company specializing in Business Intelligence, Data Management and Web development.**  \n  \nConsultant for the [FIBA (International Basketball Federation)](http://www.fiba.basketball/en) in Mies - Switzerland  \n  \nAutomated regression testing for an Angular4.0 application. Development of various web projects with the addition of new features.  \n* Evolution of the regression tests according to the development of the new features  \n* Automation of multi-level tests SCRUD (search, create, read, update and delete)  \n* Automation of front-end tests :  \n    * Graphics component tests  \n    * Tests of the updates of the view according to the changes  \n* Automation of back-end tests :  \n    * Database overload tests  \n    * Response time of the different services  \n* Customization of the Protractor output for a better track of errors (percentage, stack-trace, write to file, screenshot, etc.)",
      "attachments": [],
      "highlights": ["Selenium", "Protractor", "AngularJS", "JavaScript", "JQuery", ".NET MVC", ".NET Core", "Telerik - Kendo", "Microsoft Azure SQL Database", "SCRUM"]
    }, {
      "company": "University of Passau",
      "position": "Research oriented software engineer intern",
      "website": "http://www.uni-passau.de",
      "startDate": "Feb, 2016",
      "endDate": "Oct, 2016",
      "place": "Passau - Germany",
      "picture" : "logo_passau.png",
      "summary": "End of studies' project research-oriented allowing the collect of information from a known event in real time on social networks. Several research topics are discussed such as:  \n* Textual data cleaning : How to deal with heterogeneity of the data?  \n* Textual data enrichment : How to deal with the short context of social network posts?  \n* What is the best numerical representation of the textual data? (Word2vec, Doc2vec, TF-IDF)  \n* What is the best way to group tweets together? Classification, Clustering  \n* How to keep a bag of relevant words over time?  \n  \nThe main goal of this master thesis was to: \"Collect the most information on an event described beforehand as a set of words while being robust (i.e. eliminating noise) in real time.\"",
      "attachments": [{
        "label": "Letter of recommandation",
        "icon": "fa fa-lg fa-file-pdf-o",
        "url": "Letter of recommandation - Harald Kosch.pdf"
      }, {
        "label": "Letter of recommandation",
        "icon": "fa fa-lg fa-file-pdf-o",
        "url": "Letter of recommandation - Michael Granitzer.pdf"
      }, {
        "label": "Letter of recommandation",
        "icon": "fa fa-lg fa-file-pdf-o",
        "url": "Letter of recommandation - Elod egyed zsigmond.pdf"
      }, {
        "label": "Master thesis",
        "icon": "fa fa-lg fa-file-pdf-o",
        "url": "Anthony FARAUT - Master thesis.pdf"
      }, {
        "label": "Final presentation",
        "icon": "fa fa-lg fa-file-pdf-o",
        "url": "Passau internship - Final presentation.pdf"
      }],
      "highlights": ["Java", "Social networks", "Data mining", "Machine learning (Word2vec, Doc2vec)", "Support Vector Machine (SVM)", "Classification", "Clustering", "MongoDB", "SCRUM", "Knime"]
    }, {
      "company": "SwissRisk & Care",
      "position": "Software engineer intern",
      "website": "http://www.swissriskcare.ch",
      "startDate": "May, 2015",
      "endDate": "Sep, 2015",
      "place": "Geneva - Switzerland",
      "picture" : "logo_swissriskcare.png",
      "summary": "**Industries : Occupational pension insurance, Health insurance.**  \n  \nWork on a custom software for the pension funds management (1500 man-days already invested at the end of 2014) :  \nManagement of collective & own pensions funds (Pillar 2 of the Swiss Pension system). The application manages different modules as Insured persons, Pension plans, Pensions, Billing (LPP contributions), Closing and User rights. It's used by account managers, companies ...  \n* 3-Tiers application based on .NET 4.0, C#, WPF/MVVM, SQL Server, NHibernate and SSRS reports; \n* Involved in design, implementation and testing of new features; \n* The project is developed according to the Agile SCRUM methodology.",
      "attachments": [{
        "label": "Letter of recommandation",
        "icon": "fa fa-lg fa-file-pdf-o",
        "url": "Letter of recommandation - Certificat de Travail - Charline Chabbert.pdf"
      }],
      "highlights": ["C#", ".NET 4.0", "WPF/MVVM", "SQL Server", "NHibernate", "SSRS reports", "SCRUM"]
    }, {
      "company": "Amadeus",
      "position": "Software engineer intern",
      "website": "http://www.amadeus.com",
      "startDate": "Jun, 2014",
      "endDate": "Sep, 2014",
      "place": "Sophia-Antipolis - France",
      "picture" : "logo_amadeus.png",
      "summary": "**Industries : Transportation, travel and tourism industry.**  \n  \nAmadeus was migrating their solution and format conversions were executed at 40 000 transactions per seconds. I have been in charge of design a new web-based platform, which gathers errors from format conversion and provides applications to:  \n* Monitor in real time the traffic; \n* Provide a stats module to gather graphs depending on selected parameters; \n* Give the ability to reproduce the conversion issue (in production, test...).",
      "attachments": [{
        "label": "Letter of recommandation",
        "icon": "fa fa-lg fa-file-pdf-o",
        "url": "Letter of recommandation - Paul Ventadoux.pdf"
      }, {
        "label": "Letter of recommandation",
        "icon": "fa fa-lg fa-file-pdf-o",
        "url": "Letter of recommandation - Luis Pinto Domingues.pdf"
      }],
      "highlights": ["Python", "Django", "JavaScript", "JSON", "Mercurial", "Shell - Cron", "MongoDB", "SCRUM"]
    }, {
      "company": "NiceTic",
      "position": "Developer for a home automation project",
      "website": "http://www.nicetic.fr",
      "startDate": "Apr, 2013",
      "endDate": "Jun, 2013",
      "place": "Nice - France",
      "picture" : "logo_nicetic.jpg",
      "summary": "**Industries : Home automation, building automation.**  \n  \nExtension of the internship carried out with the company NiceWeb. Continuation of the Automation Project (Client / Server) in C language and  realization of several projects as a IT technician such as: \n* Assembling, installation and configuration of Linux rack (Debian, in console mode) servers; \n* Installing wireless access point PoE, switch and RJ45 engines in wiring closets and sockets; \n* Pulling and certification of network cables.  \n  \nDuring these projects I acquired some knowledge/concepts about managed switch configuration and VLANs. I was responsible for sustainable development and recovery of waste.",
      "attachments": [],
      "highlights": ["C language", "LAMP server", "Oracle database", "PHP", "Phidgets", "Arduino"]
    }, {
      "company": "NiceWeb",
      "position": "Developer intern",
      "website": "http://www.niceweb.fr",
      "startDate": "Nov, 2012",
      "endDate": "Feb, 2013",
      "place": "Nice - France",
      "picture" : "logo_niceweb.png",
      "summary": "**Industries : Computer troubleshooting, installing networks.**  \n  \nProgramming networks in C language (socket - Client/Server) between automatons (Phidgets, Arduino) and Linux servers for home automation. Work independently and in charge of the analysis, design, specification, development and validation of the software. The application allows you to: \n* Retrieve various data from the automatons (such as analog and digital data); \n* Pilot all of these remotely.  \n  \nAll information retrieved is kept in order to make data mining and analyzing patterns/habits in order to detect anomalies due to non-standard values (outliers).",
      "attachments": [],
      "highlights": ["C language", "LAMP server", "Oracle database", "PHP", "Phidgets", "Arduino"]
    }, {
      "company": "Beaulieu sur mer town hall",
      "position": "Summer Job",
      "website": "http://www.beaulieusurmer.fr",
      "startDate": "Jun, 2007",
      "endDate": "Aug, 2014",
      "place": "Beaulieu sur mer - France",
      "picture" : "logo_beaulieusurmer.gif",
      "summary": "Seasonal employment in order to discover the world of work for 7 consecutive years in the town of Beaulieu sur mer. Realization of several tasks in several team and different services which are explained below: \n* Festival service (4 years) : In charge of the staff, truck driving, organization, safety management, leafleting and equipment installation for concerts; \n* Beach attendant (3 years): Cleaning up the beaches in the morning; \n* Annual feast for the mayor.",
      "attachments": [],
      "highlights": []
    }]
  },
  "volunteer": [],
  "education": {
    "title": "Education",
    "items": [{
      "institution": "University of Passau",
      "area": "",
      "studyType": "Master of Science (MSc) in Computer Science - Double Degree",
      "startDate": "Feb, 2016",
      "endDate": "Oct, 2016",
      "link": "http://www.uni-passau.de/",
      "place": "Passau - Germany",
      "picture": "logo_passau.png",
      "gpa": "",
      "courses": ["Multimedia Databases", "Text mining, Natural language processing (NLP)", "Automatic media analysis and open data"]
    }, {
      "institution": "INSA de Lyon",
      "area": "",
      "studyType": "Master of Science (MSc) in Computer Science - Software engineer",
      "startDate": "Sep, 2013",
      "endDate": "Feb, 2016",
      "link": "https://www.insa-lyon.fr/",
      "place": "Lyon - France",
      "picture": "logo_insa.png",
      "gpa": "",
      "courses": []
    }, {
      "institution": "UIT Nice Sophia-Antipolis",
      "area": "",
      "studyType": "Two-year technical degree in Computer Science",
      "startDate": "Sep, 2010",
      "endDate": "Feb, 2013",
      "link": "https://iut.univ-cotedazur.fr/",
      "place": "Nice - France",
      "picture": "logo_iut.png",
      "gpa": "2nd of the graduates of the year",
      "courses": []
    }, {
      "institution": "Lycée Masséna",
      "area": "",
      "studyType": "High school diploma (US) - A levels (UK)",
      "startDate": "Jun, 2010",
      "endDate": "",
      "link": "http://www.ac-nice.fr/massena/",
      "place": "Nice - France",
      "picture": "logo_massena.jpg",
      "gpa": "Honors",
      "courses": []
    }]
  },
  "awards": [],
  "publications": [],
  "skills": {
    "title": "Skills",
    "items": [{
      "name": "Programming",
      "level": "",
      "keywords": ["Python", "Java"]
    }, {
      "name": "Quality / Security",
      "level": "",
      "keywords": ["SonarQube", "WhiteSource", "Checkmarx"]
    }, {
      "name": "Engineering",
      "level": "",
      "keywords": ["Open source", "UML conception - PlantUML", "Design patterns", "Agile (SCRUM)"]
    }, {
      "name": "Data",
      "level": "",
      "keywords": ["Python", "Pandas", "NLP - SpaCy", "Microsoft PowerBI", "Jupyter Notebook", "Kibana"]
    }, {
      "name": "DevOps",
      "level": "",
      "keywords": ["Portainer", "Docker", "Splunk", "Version control (GIT, Mercurial)"]
    }, {
      "name": "Web programming",
      "level": "",
      "keywords": ["React", "TypeScript", "Vue.js - Vuetify", "REST api", "Beautiful Soup - web scraping", "Python - Flask/Django", "d3js", "Leaflet", "microservices", "OpenFaaS", "Node.js"]
    }, {
      "name": "Databases",
      "level": "",
      "keywords": ["Elasticsearch", "Kibana", "MongoDB", "PostgreSQL"]
    }]
  },
  "languages": {
    "title": "Languages",
    "items": [{
      "language": "French",
      "link": "fr.svg",
      "fluency": "Mother tongue"
    }, {
      "language": "English",
      "link": "us.svg",
      "fluency": "Professional working proficiency"
    }, {
      "language": "German",
      "link": "de.svg",
      "fluency": "Conversational - B2 Level (european certification)"
    }, {
      "language": "Italian",
      "link": "it.svg",
      "fluency": "Beginner"
    }]
  },
  "interests": {
    "title": "Interests",
    "items": [{
      "name": "Traveling",
      "keywords": ["Cultural and linguistic trips across 20 countries in Europe, Asia and North America"]
    }, {
      "name": "DIY",
      "keywords": ["Co-construction of a tiny house", "Masonry", "Mechanics", "Electronic", "Electricals", "Plumbing", "Painting"]
    }, {
      "name": "Sports",
      "keywords": ["Indoor Skydiving", "Running", "Cycling", "Rafting", "Canyoning"]
    }, {
      "name": "Motorcycle",
      "keywords": ["Outings", "Mechanics"]
    }, {
      "name": "Animals",
      "keywords": ["Animal Welfare"]
    }]
  },
  "references": [{
    "name": "Erlich Bachman",
    "reference": "It is my pleasure to recommend Richard, his performance working as a consultant for Main St. Company proved that he will be a valuable addition to any company."
  }],
  "project": {
    "title": "Projects",
    "items": [/*{
      "name": "Financial trade bot",
      "date": "2021",
      "link": "",
      "summary": "Trying to create a personnal financial trade bot.  \n* Collaboration with former colleagues",
      "highlights": ["Python", "Binance API", "Signal (for alerting)"]
    },*/ {
      "name": "Co-construction of a tiny house",
      "date": "2020-2021",
      "link": "",
      "summary": "Co-construction of a tiny house.  \n* Collaboration with a professional tiny house builder  \n* Participation and realization of custom 3d plans with <a href='https://www.sketchup.com' target='_blank'>Sketchup</a> \n* Realization of the electricity network  \n* Interior and exterior painting",
      "highlights": ["DIY", "Tiny house", "Co-construction", "Sketchup"]
    }, {
      "name": "Around the world",
      "date": "2019",
      "link": "",
      "summary": "Creation of a dashboard allowing the visualization of flight data.  \n* Retrieval of flight information via the web scraping of the website <a href='https://fr.flightaware.com/' target='_blank'>https://fr.flightaware.com/</a>\n* Storage of data concerning various flights taken during my life \n* Calculation of the time spent in flight,  number of earth's turns made ..\n* Statistics on the average seat, the average duration of flights taken",
      "highlights": ["Excel", "web scraping", "Google Colab"]
    }, {
      "name": "Do you want to revise?",
      "date": "2018",
      "link": "",
      "summary": "Realization of a web quiz fed by a configuration file to revise everything you want \n* The primary goal was to revise the world capitals as well as the French departments \n* Use of the API <a href='https://restcountries.eu/' target='_blank'>https://restcountries.eu/</a> for world capitals\n* Implementation of the project on iOS shortcuts (no code)",
      "highlights": ["HTML", "JavaScript", "Api REST", "No code"]
    }, {
      "name": "Master thesis",
      "date": "2016",
      "link": "https://github.com/afaraut/master-thesis",
      "summary": "Master thesis with subject : <span class='bold'>\"Semantic enrichment and data filtering in social networks for subject centered collection\"</span>. It is a research oriented end of study project co-supervised by two professors (one in France and one in Germany) as part of my double master degree.  \n  \n The main goal of this master thesis is to \"Collect the most information on an event described beforehand as a set of words while being robust (that is to say eliminating noise) in real time.\" The goal was not to optimize the code but to test several methods in order to find the best to achieve our goal. This is why the code you are going to read is not specially optimized.  \n* Work in autonomy co-supervised by two professors (France and Germany)  \n* Writing my master thesis (available  <a href='http://afaraut.github.io/pdf/attachments/Anthony%20FARAUT%20-%20Master%20thesis.pdf' target='_blank'>here</a>) from the code of this project  \n* Powerpoint presentation available <a href='http://afaraut.github.io/pdf/attachments/Passau%20internship%20-%20Final%20presentation.pdf' target='_blank'>here</a>\n* Project of 8 months managed from end to end :  \n    * Data collection  \n    * Data understanding   \n    * Data Cleaning  \n    * Data vectorization  \n    * Data clustering / Data classification  \n    * Data representation",
      "highlights": ["Java", "Social networks", "Data science", "Machine learning", "Neural networks (Word2vec, Doc2vec)", "Support Vector Machine (SVM)", "MongoDB", "GoogleMaps API", "Classification", "Clustering"]
    }, {
      "name": "ConvNets",
      "date": "2016",
      "link": "https://github.com/afaraut/ConvNets",
      "summary": "Implementation of Convolutional Neural Networks (ConvNets) for Text classification based on characters. The tests were run on several corpus by comparing the 'word embedding' and the 'one hot encoding'.  \n* Autonomous work  \n* Writing a paper to explain the experiments  \n* Corpus: DBpedia, Yelp, Yahoo",
      "highlights": ["Python", "ConvNets", "Keras", "Machine learning", "Data mining", "Text classification"]
    }, {
      "name": "Language model",
      "date": "2016",
      "link": "https://github.com/afaraut/RNN-LanguageModel",
      "summary": "Development of a language model using Recurrent Neural Networks. The main goal was trying to predict the next word of a sequence. It was interesting to see the evolution of the accuracy on a bigger dataset.   \n* Autonomous work  \n* The word2vec value of each word was used  \n* Training set (80% of the data) and test set (20%)",
      "highlights": ["Python", "Recurrent Neural Networks", "Natural Language Processing", "Word2vec", "Keras", "Machine learning"]
    }, {
      "name": "NER Classifier",
      "date": "2016",
      "link": "https://github.com/afaraut/NERClassifier",
      "summary": "Development of a logistic Regression NER (Named Entity Recognizer) Classifier. The goal was to see the evolution of the accuracy depending on the number and quality of features. It was interesting to try to determine the most relevant feature(s) for both languages.  \n* Autonomous work  \n* NER classifier for Dutch and Spanish  \n* Development based on features from words",
      "highlights": ["Python", "Named Entity Recognizer", "Machine learning", "Natural Language Processing"]
    }, {
      "name": "afaraut.github.io",
      "date": "2015",
      "link": "https://github.com/afaraut/afaraut.github.io",
      "summary": "Creating my personal website.  \n* Autonomous work  \n* Willingness to discover the React JS  \n* Willingness to deepen my knowledge in web",
      "highlights": ["React JS", "Javascript", "HTML5", "CSS3", "GoogleMaps API", "Json", "Bootstrap", "JSON Resume"]
    }, {
      "name": "ImageDatasets",
      "date": "2015",
      "link": "https://github.com/afaraut/ImageDatasets",
      "summary": "Design and development of a tool to retrieve posts from social networks thanks to Hashtags and/or geographical coordinates.  \n* Autonomous work  \n* The tool communicates with the APIs of Twitter, Instagram and Flickr  \n* The tool saves the media posts (picture(s), video(s))  \n* The tool saves the posts data in a JSON file and/or in a MongoDB database (timestamp, user) \n",
      "highlights": ["Java", "Json", "MongoDB", "Twitter API", "Instagram API", "Flickr API"]
    }, {
      "name": "GetYourBike",
      "date": "2015",
      "link": "https://github.com/afaraut/SmartCityVeloV",
      "summary": "Design and development of a web platform for predicting <a href='http://www.velov.grandlyon.com/' target='_blank'>Vélo'v</a> utilization (bike rental system in the city of Lyon) at a terminal X at a time T.  \n* Team of 7 persons  \n* Prediction Model : Linear regression  \n* Web services : unique backend for the site and the Android app",
      "highlights": ["Python", "Django", "Android (Java)", "GoogleMaps API", "Bootstrap", "jQuery", "Ajax"]
    }, {
      "name": "Mouv'INSA",
      "date": "2015",
      "link": "https://github.com/H4305/mouvinsa",
      "summary": "Design and development of a web platform to strengthen social ties and physical activity at INSA. Each participant obtains a pedometer and is therefore part of a team. A distance as long as possible needs to be accomplished to reach the common goal.  \n* Team of 6 persons  \n* Project initiated by the sport center of <a href='https://www.insa-lyon.fr/' target='_blank'>INSA Lyon</a>",
      "highlights": ["Python", "Flask", "Vagrant", "Javascript", "jQuery", "Ajax", "Parallax.js"]
    }, {
      "name": "ImageValidator",
      "date": "2015",
      "link": "https://github.com/afaraut/ImageValidator",
      "summary": "Design and development of a tool for the validation of images. The goal is to validate whether the image I corresponds to a given subject S.  \n* Autonomous work  \n* Using the keyboard for the validation to speed up the process",
      "highlights": ["Node.js", "JavaScript", "Json", "MongoDB", "socket.io"]
    }, {
      "name": "Insta-Stream",
      "date": "2015",
      "link": "https://github.com/afaraut/Instagram-Realtime-Stream-ImageDataSet",
      "summary": "Design and development of a tool to retrieve posts from Instagram thanks to hashtag(s) in real time.  \n* Autonomous work  \n* The tool saves the media posts (picture, video)  \n* The tool saves the posts data in a JSON file and/or in a MongoDB database (timestamp, user) \n",
      "highlights": ["Node.js", "JavaScript", "Json", "MongoDB", "Instagram API"]
    }, {
      "name": "Superslide",
      "date": "2014",
      "link": "https://github.com/fhacktory/superslide",
      "summary": "Design and development of a real time web presentation platform (as Powerpoint) synchronizing presenter and audience screens. This application allows the use of dynamic content, polling and a chat room.  \n* Team of 4 persons  \n* Project carried out during a <a href='http://www.fhacktory.com/' target='_blank'>Fhacktory</a> hackathon during 24 hours in Lyon",
      "highlights": ["JavaScript", "Node.js", "Charts.js", "Json", "Firebase", "Bootstrap", "MongoDB"]
    }, {
      "name": "Quadcopter",
      "date": "2014",
      "link": "",
      "summary": "Design, assembly and development of a quadcopter.  \n* Team of 6 persons  \n* Parts purchased separately and installed by us  \n* Quadcopter is controlled using a XBOX360 handle",
      "highlights": ["C", "C++", "Android (Java)", "jQuery", "Socket.io"]
    }, {
      "name": "Himalaya",
      "date": "2013",
      "link": "",
      "summary": "Design and development of the game 'Himalaya'.  \n* Team of 12 persons  \n* Implementation on Android tablet and PC  \n* Game engine, artificial intelligence (evolutionary algorithm), GUI (Swing), network communication",
      "highlights": ["Java", "Android (Java)"]
    }]
  }
};
