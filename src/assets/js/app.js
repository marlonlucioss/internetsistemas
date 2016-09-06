/**
 * Created by marlon on 06/09/16.
 */
(function(){
    var app = new function(){
        this.init = function(){

            var timeArray,nowTime,
                hoursPointerElement = document.getElementById('hours-pointer'),
                minutesPointerElement = document.getElementById('minutes-pointer'),
                secondsPointerElement = document.getElementById('seconds-pointer');

            setInterval(function () {
                nowTime = new Date();
                hoursPointerElement.style.transform = 'rotateZ('+getHoursDeg(nowTime.getHours())+'deg)';
                minutesPointerElement.style.transform = 'rotateZ('+getMinutesDeg(nowTime.getMinutes())+'deg)';
                secondsPointerElement.style.transform = 'rotateZ('+getSecondsDeg(nowTime.getSeconds())+'deg)';
            },1000);

            var getHoursDeg = function(h){
                return (18-h)*(-15);
            };

            var getMinutesDeg = function(m){
                return (15-m)*(-6);
            };

            var getSecondsDeg = function(s){
                return (15-s)*(-6);
            };
        };
        
        this.toogleClockEvent = function () {
            var toogleClockButton = document.getElementById('toogle-clock-bt');
            var clockElement = document.getElementById('clock-content');

            toogleClockButton.addEventListener('click', function(event){
                if(event.target.classList.contains('disabled')){
                    event.target.classList.remove('disabled');
                    clockElement.style.display = 'block';
                }else{
                    event.target.classList.add('disabled');
                    clockElement.style.display = 'none';
                }
            });
        }
    };

    window.onload = function(){
        app.init();
        app.toogleClockEvent();
    };

}());