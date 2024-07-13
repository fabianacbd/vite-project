import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Hola, mi nombre es </p>
    <h1>Fabiana Barbati</h1>
    <p>Soy una estudiante de Desarrollo de Aplicaciones Web y Desarrollo de Aplicaciones Multiplataforma en la escuela The Power en Madrid. Aqui podras ver lo que puedo hacer y todo lo que he aprendido. Espero te guste. </p>
    <a href="fabianabarbaticbd@gmail.com">Saludame →</a>
    </section>`
};