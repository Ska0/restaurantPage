import css from "./style.css";
import backgroundImage from './background.jpg'
import logo from './'

//Element that everything will be appended to
const wrapper = document.querySelector('#wrapper');

function component() {
   const background = new Image();
   background.src = backgroundImage;
   background.id = 'home-img'
   wrapper.appendChild(background);
   
   //main content section, that lays out the grid for all of the rest of the elements
   const content = document.createElement('div');
   content.id = 'content';
   wrapper.appendChild(content);
   //header & tabs
   const header = document.createElement('div');
   header.id = 'header';
   
   const homeTab = document.createElement('div');
   homeTab.className = 'tab';
   homeTab.textContent = 'Home';
   const menuTab = document.createElement('div');
   menuTab.className = 'tab';
   menuTab.textContent = 'Menu';
   const aboutTab = document.createElement('div');
   aboutTab.className = 'tab';
   aboutTab.textContent = 'About';
   
   header.append(homeTab, menuTab, aboutTab);
   
   content.appendChild(header);


   //schedule
   const schedule = document.createElement('div');
   
   schedule.id = 'schedule';

   const scheduleHeader = document.createElement('div');
      
   scheduleHeader.id = 'schedule-header';
   
   scheduleHeader.textContent = 'Hours Of Operation'
   
   schedule.appendChild(scheduleHeader);


   const daysArray = []
   for (let i = 0; i < 7; i++) {
      const day = document.createElement('div');
         day.className = 'day';
   
      const dayHeader = document.createElement('div');

      const times1 = document.createElement('div');
      times1.id = 'time-one';
  
      const times2 = document.createElement('div');
      times2.id = 'time-two';

         i < 2 | i > 4  ?
             dayHeader.className = 'label' : 
             dayHeader.className = 'wtf';
             day.appendChild(dayHeader);
         i < 2 | i > 4  ?
             day.append(times1, times2) : 
             day.appendChild(times1);
      
         schedule.appendChild(day);
         daysArray.push(day);
   };
 
   daysArray[0].children[0].textContent = 'Monday';  
   daysArray[0].children[1].textContent = '6:00 AM - 10:00 AM';
   daysArray[0].children[2].textContent = '4:00 PM - 9:00 PM';

   daysArray[1].children[0].textContent = 'Tuesday'; 
   daysArray[1].children[1].textContent = '6:00 AM - 10:00 AM'; 
   daysArray[1].children[2].textContent = '4:00 PM - 9:00 PM'; 

   daysArray[2].children[0].textContent = 'Wednesday'; 
   daysArray[2].children[1].textContent = '4:00 PM - 10:00 PM'; 

   daysArray[3].children[0].textContent = 'Thursday'; 
   daysArray[3].children[1].textContent = '4:00 PM - 10:00 PM';

   daysArray[4].children[0].textContent = 'Friday';
   daysArray[4].children[1].textContent = '4:00 PM - 1:30 AM';

   daysArray[5].children[0].textContent = 'Saturday';
   daysArray[5].children[1].textContent = '8:00 AM - 11:00 AM';
   daysArray[5].children[2].textContent = '1:00 PM - 1:30 AM';

   daysArray[6].children[0].textContent = 'Sunday';
   daysArray[6].children[1].textContent = '8:00 AM - 11:00 AM';
   daysArray[6].children[2].textContent = '1:00 PM - 10:00 PM';

   content.appendChild(schedule);

   const banner = document.createElement('div');
   banner.id = 'banner';

}
wrapper.append(component());
