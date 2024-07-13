import "./Navbar.css";

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    changeText();
  });
};

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn.innerText === "☀") {
    themeBtn.innerText = "☾";
  } else {
    themeBtn.innerText = "☀";
  }
};

export const Navbar = () => `
<nav>
<h2>Mi primer portafolio</h2>
<ul>
    <li>
        <a href="#" id="homelink">Home</a>
    </li>
     <li>
        <a href="https://venezuelan-gallery.netlify.app/" id="gallery">Gallery</a>
    </li>
     <li>
        <a href="https://bianca-collection.netlify.app/" id="store">Store</a>
    </li>
    <li>
        <a href="#" id="projectslink">Projects</a>
    </li>
    <li>
        <button id="themeBtn">☀</button>
    </li>
    
</ul>
</nav>
`;