import blogAppImage from "../assets/portfolio/blogAppImage.png";
import clinicalNotesAppImage from "../assets/portfolio/ClinicalnotesAppImage.jpg";
import eCommerceAppImage from '../assets/portfolio/EcommerceImage.png';
import ticTac from "../assets/portfolio/tic_tac.jpg";
import MediaCard from "./MediaCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: eCommerceAppImage,
      title: "E-commerce App",
      liveUrl:"https://genuine-dusk-3b82c7.netlify.app",
      code: "https://github.com/Anand-singh97/Ecommerce-App",
      description:
      [
        {heading:'Technology Stack:', explained:'MERN (MongoDB, Express.js, React, Node.js)'},
        {heading:'Description:', explained:'The MERN stack drives this e-commerce app, offering categorized Men, Women, and Kids sections. Users explore detailed product info, select sizes before adding to the cart, and contribute reviews. The admin panel empowers administrators to effortlessly add or remove products, ensuring dynamic content updates across categories, The app leverages Cloudinary for image storage, enhancing performance and scalability. Logged-in users enjoy a seamless shopping experience with a smart cart that securely stores contents. Strong authentication safeguards user data, incorporating encrypted passwords. MongoDB optimally manages data retrieval and storage, supporting a robust and efficient platform.'}
      ]
    },
    {
      id: 2,
      src: blogAppImage,
      title: "Blog App",
      liveUrl: "https://super-scone-037dbb.netlify.app/login",
      code: "https://github.com/Anand-singh97/BlogApp_MERN",
      description:
      [
        {heading:'Technology Stack:', explained:'MERN (MongoDB, Express.js, React, Node.js)'},
        {heading:'Description:', explained:'This blog app prioritizes user security and ease of use. Users are required to log in to access the app, and a JWT token is sent securely in a cookie. Once authenticated, users can create blogs by crafting summaries, adding images, and writing titles and descriptions. All data is efficiently stored in MongoDB, ensuring seamless content management. The app leverages Cloudinary for image storage, enhancing performance and scalability. Users have the privilege to edit their blogs, with stringent validation to modify only the content they have created. This blog app embodies a secure, user-centric experience with robust data handling capabilities.'}
      ]
    },
    {
      id: 3,
      src: clinicalNotesAppImage,
      title: "Clinical Notes App",
      code: "https://github.com/Anand-singh97/Clinical-Notes-app",
      description:
      [
        {heading:'Technology Stack:', explained:'Win Forms and C#'},
        {heading:'Description', explained:'This clinical notes app streamlines patient data management. Users can effortlessly add and edit patient details, including names, dates of birth, health issues, and appointments, all stored locally in a text file. The user-friendly interface allows easy access to patient information by clicking on their name, providing a quick and efficient means to extract the relevant details. The app simplifies the process of recording and retrieving clinical notes, enhancing the overall workflow for healthcare professionals.'}
      ]
    },
    {
      id: 4,
      src: ticTac,
      title: "Tic Tac Toe game",
      code: "https://github.com/Anand-singh97/Tic_Tac_Toe_App/tree/main",
      description:
      [
        {heading:'Technology Stack:', explained:'Win Forms and C#'},
        {heading:'Technology Stack:', explained:'This Tic Tac Toe game brings the classic gaming experience to your desktop. Users can enjoy the timeless challenge of Xs and Os in a user-friendly interface. The game provides a two-player mode for head-to-head matches, where players take turns marking the grid. The application ensures an engaging and interactive experience, making it an ideal choice for leisure and entertainment.'},
      ]
    },
  ];

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <p className="text-4xl font-bold inline border-b-2 pb-1  border-gray-500">
        Projects
      </p>
      <div className="grid grid-cols-1 gap-[2rem] md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center">
        {projects.map(({ id, title, src, liveUrl, code, description }) => {
          return (
            <div key={id}>
              <MediaCard title = {title} src = {src} liveUrl = {liveUrl} code = {code} description = {description}/>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default Projects;
