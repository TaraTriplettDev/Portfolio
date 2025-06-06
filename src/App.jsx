import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        <ul className="nav">
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">PROJECTS</a>
          </li>
          <li>
            <a href="#">EDUCATION</a>
          </li>
        </ul>

        <ul className="icons">
          <a className="icon" href="https://github.com/TaraTriplettDev">
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            className="icon"
            href="https://www.linkedin.com/in/tara-triplett-93a696239/"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a className="icon" href="">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </ul>
      </div>

      {/* <hr /> */}

      <div className="hero">
        <div className="hero-inner">
          <h1>Hi, I'm Tara Triplett!</h1>
          <p>
            I am a Full Stack Developer specializing in user interface design
            and implementation
          </p>
        </div>
      </div>

      <div id="about" className="subject">
        <div className="subject-inner">
          <h1>About</h1>
          <p>
            My interest in user interface design stems from my love of video
            games with stylized, yet still comprehensive and intuitive U.I.
          </p>

          <h2>Hard Skills</h2>

          <div className="details">
            <div className="details-inner">
              <p>
                <span className="title">Coding Languages:</span> HTML, CSS,
                JavaScript, and JSX
              </p>
              <p>
                <span className="title">Frameworks:</span> Vite
              </p>
              <p>
                <span className="title">Databases:</span> MongoDB
              </p>
            </div>
          </div>

          <h2>Soft Skills</h2>

          <div className="details">
            <div className="details-inner">
              <p>
                <span className="title">Communication:</span> I communicate concisely with my coworkers and try to be a comforting presence for them
              </p>
              <p>
                <span className="title">Teamwork:</span> I aim to contribute to our projects to the best of my ability
              </p>
              <p>
                <span className="title">Problem Solving:</span> I take the time to research and gain a better understanding of the problems I face
              </p>
            </div>
          </div>

          <h2>Certifications</h2>

          <div className="details">
            <div className="details-inner">
              <p>
                <span className="title">Responsive Web Design</span>{" "}
                freeCodeCamp, 2023
              </p>
              <p>
                <span className="title">
                  JavaScript Algorithms and Data Structures
                </span>{" "}
                freeCodeCamp, 2023
              </p>
              <p>
                <span className="title">Front-End Development</span> Persevere,
                2023 - 2024
              </p>
              <p>
                <span className="title">Back-End Development</span> Persevere,
                2024 - 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="projects" className="subject">
        <div className="subject-inner">
          <h1>Projects</h1>
          <p>Projects I have worked on</p>

          <div className="features">
            <div className="features-inner">
              <div className="featured-item">
                <h1>My Portfolio</h1>
                <p>You are here. :&#41;</p>
                <p>Made in ReactJS using JSX and CSS with Vite</p>
                <a href="https://github.com/TaraTriplettDev/Todo-Project-w-Auth">
                  GitHub Page
                </a>
              </div>
              <div className="featured-item">
                <h1>ToDo Project w/ Auth</h1>
                <p>
                  Functional Todo list that stores its items and only allows
                  their associated users to access them
                </p>
                <p>Made in ReactJS using JSX, CSS, and MongoDB with Vite</p>
                <a href="https://github.com/TaraTriplettDev/Todo-Project-w-Auth">
                  GitHub Page
                </a>
              </div>
              <div className="featured-item">
                <h1>Mycelia University</h1>
                <p>
                  A very nostalgic project for me. This was my first project for
                  Persevere, a mock college landing page
                </p>
                <p>Made using HTML and CSS</p>
                <a href="https://github.com/TaraTriplettDev/Todo-Project-w-Auth">
                  GitHub Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contacts" className="subject">
        <div className="subject-inner">
          <h1>Contacts</h1>
          <p>I can be reached at ttriplettl6a4@Gmail.com</p>
        </div>
      </div>
    </>
  );
}

export default App;
