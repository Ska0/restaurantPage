import css from "./style.css";

import logoImage from "./assets/logo1.png";



import { homeLaunch } from "./modules/home";
import { menuLaunch } from "./modules/menu";
import { aboutLaunch } from "./modules/about";
//Element that everything will be appended to
const wrapper = document.querySelector("#wrapper");

const header = document.createElement("div");
header.id = "header";


const tabDiv = document.createElement('div');
tabDiv.id = 'tab-div'

const homeTab = document.createElement("div");
homeTab.className = "tab";
homeTab.textContent = "Home";
homeTab.addEventListener('click', homeLaunch);

const menuTab = document.createElement("div");
menuTab.className = "tab";
menuTab.textContent = "Menu";
menuTab.addEventListener('click', menuLaunch);

const aboutTab = document.createElement("div");
aboutTab.className = "tab";
aboutTab.textContent = "About";
aboutTab.addEventListener('click', aboutLaunch);

tabDiv.append(homeTab, menuTab, aboutTab);
header.appendChild(tabDiv);

const logoDiv = document.createElement('div');
logoDiv.id = 'logo-div';


const logo = new Image();
logo.src = logoImage;
logo.id = "logo";
logoDiv.appendChild(logo);
header.appendChild(logoDiv);
wrapper.appendChild(header);

const content = document.createElement("div");
content.id = "content";
wrapper.appendChild(content)






  homeLaunch()
  
  