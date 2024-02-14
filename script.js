let hr= document.getElementById('hour');
let min= document.getElementById('min');
let sec= document.getElementById('sec');

function displayTime(){
  let date=new Date();

  let hh=date.getHours();
  let mm=date.getMinutes();
  let ss=date.getSeconds();

  let hRotation=30*hh + mm/2;
  let mRotation=6*mm;
  let sRotation=6*ss;

 hr.style.transform = `rotate(${hRotation}deg)`;
 min.style.transform = `rotate(${mRotation}deg)`;
 sec.style.transform = `rotate(${sRotation}deg)`;
}
setInterval(displayTime, 1000);




const day=document.getElementById('day')
const month=document.getElementById('month')
const year=document.getElementById('year')
const tareekh=document.getElementById('tareek')
const date= new Date();
console.log(date.toLocaleDateString());

const weeks=["Sunday","Monday","Tuesday",'Wednesday','Thursday','Friday','Saturday']

const mnth=["JANUARY",'FEBURARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER']
day.innerHTML=weeks[date.getDay()]
month.innerHTML=mnth[date.getMonth()]
year.innerHTML=date.getFullYear()
tareekh.innerHTML=(date.getDate()<10? 0 :"")+date.getDate()




