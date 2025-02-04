function Footer({id}) {
  return (
    <div id={id??"box"} className=" p-4 flex gap-5 flex-wrap justify-center bg-gray-900 text-white">
      <div className="min-w-72 w-1/3 min-h-72 rounded-lg bg-gray-800 p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">About Me</h2>
        <p>
          Hi, I'm Jay Kumar, a Full Stack Web Developer with a passion for creating innovative and user-friendly web applications.
        </p>
        <p>
          I'm proficient in Web development, including Backand, and enjoy playing Cricket and watching movies in my spare time.
        </p>
      </div>
      <div className="min-w-72 w-1/3 min-h-72 rounded-lg bg-gray-800 p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
        <p>
          If you're interested in learning more about my services or would like to collaborate on a project, please don't hesitate to get in touch.
        </p>
        <ul>
          <li>
            <a href="mailto:jaykumar2dear@gmail.com" className="text-blue-500 hover:text-blue-700">
              your-email@example.com
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/your-linkedin-profile/" className="text-blue-500 hover:text-blue-700">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/your-github-profile" className="text-blue-500 hover:text-blue-700">
              GitHub
            </a>
          </li>
        </ul>
      </div>
      <div className="min-w-72 w-1/3 min-h-72 rounded-lg bg-gray-800 p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Social Media</h2>
        <ul>
          <li>
            <a href="https://www.facebook.com/profile.php?id=61566837085528" className="text-blue-500 hover:text-blue-700">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com/your-twitter-profile" className="text-blue-500 hover:text-blue-700">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/your-instagram-profile/" className="text-blue-500 hover:text-blue-700">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;