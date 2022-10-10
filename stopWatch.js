let millisecond= second= minute =hr= "0"+0;
let timerId = null;
let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');
let stopBtn = document.getElementById('stop');
let timer = document.querySelector('.time');

stopBtn.disabled = true;
pauseBtn.disabled = true;
startBtn.style.backgroundColor = "#fff";
pauseBtn.style.backgroundColor = "Red";
stopBtn.style.backgroundColor = "Red";

startBtn.addEventListener('click', (event)=>{
    if(timerId != null){
        clearInterval(timerId)
    }

    timerId = setInterval(updateTime,10)
    putValue();
    pauseBtn.innerText = "pause";
    startBtn.style.backgroundColor = "Red";
    pauseBtn.style.backgroundColor = "#fff";
    stopBtn.style.backgroundColor = "#fff";
    startBtn.disabled = true;
    stopBtn.disabled = false;
    pauseBtn.disabled = false;


})

stopBtn.addEventListener('click',(event)=>{
    clearInterval(timerId)
    // [millisecond, second, minute] = [0,0,0]
    // timer.innerHTML=`00 : 00 : 00`
    hr = "0"+0;
    second ="0"+0;
    minute="0"+0;
    millisecond="0"+0;
    putValue();
    pauseBtn.innerText = "pause";
    startBtn.disabled = false;
    stopBtn.disabled = true;
    pauseBtn.disabled = true;
    startBtn.style.backgroundColor = "#fff";
    pauseBtn.style.backgroundColor = "Red";
    stopBtn.style.backgroundColor = "Red";
   
})

pauseBtn.addEventListener('click',(event)=>{
    clearInterval(timerId)
    pauseBtn.innerText = "continue";
    startBtn.disabled = false;
    stopBtn.disabled = false;
    pauseBtn.disabled = true;
    startBtn.style.backgroundColor = "white";
    pauseBtn.style.backgroundColor = "Red";

})

function updateTime(){
  millisecond++;
  millisecond = millisecond < 10 ? "0" + millisecond : millisecond;

  if(millisecond == 100){
    millisecond = 0;
    second++;
    second = second < 10 ? "0" + second : second;
    if(second == 60){
      second = 0;
      minute++;
      minute = minute < 10 ? "0" + minute : minute;
      if(minute == 60){
        minute = 0;
        hr++;
        hr = hr < 10 ? "0" + hr : hr;
      }
    }
  }
//   timer.innerHTML = `${minute} : ${second} : ${millisecond}`
putValue();

}

function putValue() {
    // document.querySelector(".millisecond").innerText = millisecond;
    document.querySelector(".second").innerText = millisecond;
    document.querySelector(".minute").innerText = second;
    document.querySelector(".hour").innerText = minute;
}
