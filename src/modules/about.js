import poolImage from '../assets/pool.jpg';
import jukeboxImage from '../assets/touchtunes.jpg';
import karaokeImage from '../assets/karaoke.png';
import cabooseImage from '../assets/caboose.png';
import vipImage from '../assets/vip.png';


export function aboutLaunch() {

   content.innerHTML = '';
   
   const about = document.createElement('div');
   about.id = 'about';
   
   const aboutTwo = document.createElement('div');
   aboutTwo.id = 'about-two';
   
   const karaoke = new Image();
   karaoke.src = karaokeImage;
   karaoke.id = 'karaoke';
   aboutTwo.appendChild(karaoke);
   
   const aboutTwoText = document.createElement('div');
   aboutTwoText.textContent = 'Follow us on social for our Karaoke and DJ nights'
   aboutTwo.appendChild(aboutTwoText);
   
   about.appendChild(aboutTwo);
   
   const aboutOne = document.createElement('div');
   aboutOne.id = 'about-one';
   
   const pool = new Image();
   pool.src = poolImage;
   pool.id = 'pool-img';
   aboutOne.appendChild(pool);
   
   const aboutOneText = document.createElement('div');
   aboutOneText.id = 'about-one-text';
   aboutOneText.textContent = 'Come watch the game on our big screen tvs, or get your game on with';
   
   const aboutGameList = document.createElement('ul');
   aboutGameList.id = 'about-list';
   
   const gamesArr = [];
   
   for (let i = 0; i < 4; i++) {
     const list = document.createElement('li');
     gamesArr.push(list);
   };
   
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
     
     aboutOneText.appendChild(aboutGameList);
     aboutOne.appendChild(aboutOneText);
     
     
     about.appendChild(aboutOne);
     
     
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
     
 
     const aboutFourLeft = document.createElement('div');
     aboutFourLeft.id = 'about-four-left';
 
     const aboutFourText = document.createElement('div');
     aboutFourText.textContent = 'Come in and take a pic on the back of the Caboose!';
    aboutFourLeft.appendChild(aboutFourText);
    
    const caboose = new Image();
    caboose.src = cabooseImage;
    caboose.id = 'caboose';
    aboutFourLeft.appendChild(caboose);
 
    aboutFour.appendChild(aboutFourLeft)
    
    const vipRoom = new Image();
    vipRoom.src = vipImage;
    vipRoom.id = 'vip';
    aboutFour.appendChild(vipRoom);
 
    about.appendChild(aboutFour);
    
    
    
    
    content.appendChild(about);
    
    
   };