import backgroundImage from "../assets/background.jpg";
import bannerImage from '../assets/banner.png'

export function homeLaunch() {


  
   content.innerHTML = '';
   
   const schedule = document.createElement("div");
   
   schedule.id = "schedule";
   
   
   
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
   
   const homeImgDiv = document.createElement('div');
   homeImgDiv.id = 'home-img-div'
   
   const homeImg = new Image();
   homeImg.src = backgroundImage;
   homeImg.id = "home-img";
   homeImgDiv.appendChild(homeImg);
   
   wrapper.appendChild(homeImgDiv);
   
   content.appendChild(schedule);
 
   const bannerDiv = document.createElement('div');
   bannerDiv.id = 'banner-div';
   
   const banner = new Image();
   banner.src = bannerImage;
   banner.id = 'banner';
   
   bannerDiv.appendChild(banner);
   
   const bannerButton = document.createElement('button');
   bannerButton.id = 'banner-button';
   bannerButton.textContent = 'View Menu'
   bannerDiv.appendChild(bannerButton);
 
 
 
   
   content.appendChild(bannerDiv);
   
   
   //makes the div that lays out the grid for the about section
   wrapper.appendChild(content);
 }