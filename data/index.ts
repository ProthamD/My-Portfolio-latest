// export const gridItems = [
//   {title:'Title-1', description:'Desc-1', id: 1},
//   {title:'Title-1', description:'Desc-1', id: 1},
//   {title:'Title-1', description:'Desc-1', id: 1},
//   {title:'Title-1', description:'Desc-1', id: 1},
// ]

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] ",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "./b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "relative z-100",
    titleClassName: "justify-start",
    img: "./Ami.jpg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an Interpreter",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "./b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Sudoku with Cpp",
    des: "A C++ Sudoku solver and generator with backtracking and puzzle difficulty levels.",
    img: "./Sudoku-2.png",
    iconLists: ["./re.svg", "./tail.svg", "./ts.svg", "./three.svg", "./fm.svg"],
    link: "https://github.com/ProthamD/Sudoku",
  },
  {
    id: 2,
    title: "Mage - (Under Developement)",
    des: "AI-powered website builder that crafts, designs, and deploys—faster than you can say 'Hello, World!'",
    img: "./Mage-Website-Builder.png",
    iconLists: ["./next.svg", "./tail.svg", "./ts.svg", "./stream.svg", "./c.svg"],
    link: "yet to be given(link)",
  },
  {
    id: 3,
    title: "Real Estate Price Prediction Using ML-(Under Developement)",
    des: "An ML-powered real estate price predictor using regression, neural networks, and market trend analysis.",
    img: "./Re (2).png",
    iconLists: ["./re.svg", "./tail.svg", "./ts.svg", "./three.svg", "./c.svg"],
    link: "yet to be given(link)",
  },
  {
    id: 4,
    title: "My Own Interpreter-(Under Developement)",
    des: "Your code talks, my interpreter listens—no syntax left behind. ⚡",
    img: "./Interpreter.png",
    iconLists: ["./next.svg", "./tail.svg", "./ts.svg", "./three.svg", "./gsap.svg"],
    link: "yet to be given(link)",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Protham was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Protham's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Protham is the ideal partner.",
    name: "Tumpa Dey",
    title: "Owner of Kalpana stores",
  },
  {
    quote:
      "Working with Protham was an incredible experience. His professionalism, attention to detail, and commitment to excellence were evident at every stage of our collaboration. Protham’s passion for development and innovative approach truly set him apart. If you're looking to enhance your website and strengthen your brand, Protham is the perfect choice for the job.",
    name: "Ratan",
    title: "shop owner of ratan-bags",
  },
  {
    quote:
      "Thank you!",
    name: "Pollyfony's Owner",
    title: "Owner of Pollyfony-Studios",
  },

];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "./cloud.svg",
    nameImg: "./cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "./app.svg",
    nameImg: "./appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "./host.svg",
    nameImg: "./hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "./s.svg",
    nameImg: "./streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "./dock.svg",
    nameImg: "./dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "./exp1.svg",
  },
  {
    id: 2,
    title: "Ai and Machine Learning Engineer",
    desc: "Develop and train machine learning models for comfortable future",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "./exp2.svg",
  },
  {
    id: 3,
    title: "Backend Developer",
    desc: "Giving a sever its connection with Backend",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "./exp3.svg",
  },
  {
    id: 4,
    title: "Software Developer",
    desc: "A Software Developer with a good knowledge across the base of coding",
    className: "md:col-span-2",
    thumbnail: "./exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "./git.svg",
  },
  {
    id: 2,
    img: "./twit.svg",
  },
  {
    id: 3,
    img: "./link.svg",
  },
];