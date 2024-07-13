import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("twitter.png", "Twitter")}
${Button("github.png.jpg", "GitHub")}
${Button("linkedin.png.jpg", "LinkedIn")}
${Button("telegram.png", "Telegram")}
</div>
`;