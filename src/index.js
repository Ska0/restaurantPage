import css from "./style.css";
import backgroundImage from "./background.jpg";
import logoImage from "./logo.png";
import poolImage from './pool.jpg';
import jukeboxImage from './touchtunes.jpg'
import karaokeImage from './karaoke.png'
import cabooseImage from './caboose.png'
import pizzaImage from './pizza.png'
import nachosImage from './nachos.png'
import vipImage from './vip.png'
//Element that everything will be appended to
const wrapper = document.querySelector("#wrapper");

function component() {
  const background = new Image();
  background.src = backgroundImage;
  background.id = "home-img";
  wrapper.appendChild(background);
  //main content section, that lays out the grid for all of the rest of the elements
  const content = document.createElement("div");
  content.id = "content";
  wrapper.appendChild(content);

  const header = document.createElement("div");
  header.id = "header";

  const logo = new Image();
  logo.src = logoImage;
  logo.id = "logo";
  header.appendChild(logo);

  const name = document.createElement("div");
  name.id = "name";
  name.textContent = "Loose Caboose Saloon";
  header.appendChild(name);

  const homeTab = document.createElement("div");
  homeTab.className = "tab";
  homeTab.textContent = "Home";
  const menuTab = document.createElement("div");
  menuTab.className = "tab";
  menuTab.textContent = "Menu";
  const aboutTab = document.createElement("div");
  aboutTab.className = "tab";
  aboutTab.textContent = "About";

  header.append(homeTab, menuTab, aboutTab);

  content.appendChild(header);


  const schedule = document.createElement("div");

  schedule.id = "schedule";

  const scheduleHeader = document.createElement("div");

  scheduleHeader.id = "schedule-header";

  scheduleHeader.textContent = "Hours Of Operation";

  schedule.appendChild(scheduleHeader);
//create all 7 days
  const daysArray = [];
  for (let i = 0; i < 7; i++) {
    const day = document.createElement("div");
    day.className = "day";

    const dayHeader = document.createElement("div");

    const times1 = document.createElement("div");
    times1.id = "time-one";

    const times2 = document.createElement("div");
    times2.id = "time-two";

    (i < 2) | (i > 4)
      ? (dayHeader.className = "label")
      : (dayHeader.className = "wtf");
    day.appendChild(dayHeader);
    (i < 2) | (i > 4) ? day.append(times1, times2) : day.appendChild(times1);

    schedule.appendChild(day);
    daysArray.push(day);
  }

  daysArray[0].children[0].textContent = "Monday";
  daysArray[0].children[1].textContent = "6:00 AM - 10:00 AM";
  daysArray[0].children[2].textContent = "4:00 PM - 9:00 PM";

  daysArray[1].children[0].textContent = "Tuesday";
  daysArray[1].children[1].textContent = "6:00 AM - 10:00 AM";
  daysArray[1].children[2].textContent = "4:00 PM - 9:00 PM";

  daysArray[2].children[0].textContent = "Wednesday";
  daysArray[2].children[1].textContent = "4:00 PM - 10:00 PM";

  daysArray[3].children[0].textContent = "Thursday";
  daysArray[3].children[1].textContent = "4:00 PM - 10:00 PM";

  daysArray[4].children[0].textContent = "Friday";
  daysArray[4].children[1].textContent = "4:00 PM - 1:30 AM";

  daysArray[5].children[0].textContent = "Saturday";
  daysArray[5].children[1].textContent = "8:00 AM - 11:00 AM";
  daysArray[5].children[2].textContent = "1:00 PM - 1:30 AM";

  daysArray[6].children[0].textContent = "Sunday";
  daysArray[6].children[1].textContent = "8:00 AM - 11:00 AM";
  daysArray[6].children[2].textContent = "1:00 PM - 10:00 PM";

  content.appendChild(schedule);
//makes the div that lays out the grid for the about section
  const about = document.createElement('div');
  about.id = 'about';
  
  const aboutHeader = document.createElement('h2');
  aboutHeader.textContent = `The Loose Caboose Saloon is a great place to hang out, have a drink,
  grab a bite, and enjoy yourself!`;
  about.appendChild(aboutHeader);

  const aboutOne = document.createElement('div');
  aboutOne.id = 'about-one';
  aboutOne.textContent = 'Come watch the game on our big screen tvs, or get your game on with';
  
  const aboutGameList = document.createElement('ul');
  aboutGameList.id = 'about-list'

  const gamesArr = [];

  for (let i = 0; i < 4; i++) {
     const list = document.createElement('li');
     gamesArr.push(list)
   }

   gamesArr[0].textContent = 'Pool';
   gamesArr[1].textContent = 'Cornhole';
   gamesArr[2].textContent = 'Ring Game';
   gamesArr[3].textContent = 'Jenga';

   aboutGameList.append(
         gamesArr[0],
         gamesArr[1],
         gamesArr[2],
         gamesArr[3]
      );
   
   aboutOne.appendChild(aboutGameList);
   
   const pool = new Image();
   pool.src = poolImage;
   pool.id = 'pool-img';

   aboutOne.appendChild(pool);

   about.appendChild(aboutOne);

   const aboutTwo = document.createElement('div');
   aboutTwo.id = 'about-two';

   const karaoke = new Image();
   karaoke.src = karaokeImage;
   karaoke.id = 'karaoke'
   aboutTwo.appendChild(karaoke)

   const aboutTwoText = document.createElement('div');
   aboutTwoText.textContent = 'Follow us on social for our Karaoke and DJ nights'
   aboutTwo.appendChild(aboutTwoText);

   about.appendChild(aboutTwo);

   const aboutThree = document.createElement('div');
   aboutThree.id = 'about-three';
   
   const jukebox = new Image();
   jukebox.src = jukeboxImage;
   jukebox.id = 'jukebox';
   aboutThree.appendChild(jukebox);

   const aboutThreeText = document.createElement('div');
   aboutThreeText.textContent = 'Be your own DJ with the TouchTunes jukebox, bust a move on the dance floor, or enjoy the private VIP room available for rent.';
   aboutThree.appendChild(aboutThreeText);

   about.appendChild(aboutThree);

   const aboutFour = document.createElement('div');
   aboutFour.id = 'about-four';

   const aboutFourText = document.createElement('div');
   aboutFourText.textContent = 'Come in and take a pic on the back of the Caboose!';
   aboutFour.appendChild(aboutFourText);

   const caboose = new Image();
   caboose.src = cabooseImage;
   caboose.id = 'caboose'
   aboutFour.appendChild(caboose);

   about.appendChild(aboutFour)

   content.appendChild(about);

   const menu = document.createElement('div');
   menu.id = 'menu';

   const menuHeader = document.createElement('div');
   menuHeader.id = 'menu-head';
   menuHeader.textContent = 'Menu';
   menu.appendChild(menuHeader);

   const pizzaLabel = document.createElement('div');
   pizzaLabel.className = 'menu-text';
   pizzaLabel.textContent = 'Pizza';
   menu.appendChild(pizzaLabel);

   const pizza = new Image();
   pizza.src = pizzaImage;
   pizza.id = 'pizza';
   menu.appendChild(pizza);

   const nachoLabel = document.createElement('div');
   nachoLabel.className = 'menu-text';
   nachoLabel.textContent = 'Nachos';
   menu.appendChild(nachoLabel);

   const nachos = new Image();
   nachos.src = nachosImage;
   nachos.id = 'nachos';
   menu.appendChild(nachos);
   
   content.appendChild(menu);

   const vipRoom = new Image();
   vipRoom.src = vipImage;
   vipRoom.id = 'vip';

   content.appendChild(vipRoom)
}
wrapper.append(component());
