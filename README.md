# scheduler-scrapper
Данный пакет, будет полезен, тем кто планирует копировать данные с сайта ictis
Этот пакет является оберткой над `scheduler-ita-pretty-message`

## Установка 
Используя npm:    
`npm install scheduler-scrapper --save`

Используя yarn:     
`yarn add scheduler-scrapper`

## О типах страниц на данном сайт

`http://ictis.sfedu.ru/rasp/HTML_AUDS/a4.htm` - HTML_AUDS означает, что расписание для аудитории  
`http://ictis.sfedu.ru/rasp/HTML/18.htm`  - HTML означает, что расписание для групп 
`http://ictis.sfedu.ru/rasp/HTML_PREPS/m18.htm` - HTML_PREPS означает, что расписание для преподавателей 


## Методы 

### getAllSchedule(type = 'ALL') 
Получить все расписание, которое только есть на сайте http://ictis.sfedu.ru/rasp/   
Типы которые могут быть использованы:    
`ALL` - забрать расписание для преподавателей, студентов и аудиторий, значение по умолчанию    
`HTML_PREPS` - забрать расписание для преподавателей     
`HTML_AUDS` - забрать расписание для аудиторий    
`HTML` - забрать расписание для студентов(групп)  

### getAllScheduleByCron(callback, cronTime = '0 1 * * *', type = 'ALL')
Получить все расписание, которое только есть на сайте http://ictis.sfedu.ru/rasp/ по крону   
`callback` - функция, которая будет исполнена после получения данных, по умолчанию, это console.log   
`cronTime` - время, в которое будет запускаться скрипт, или с какой переодичностью, синтаксис крона   
`type` - типы которые были объявлены выше в методе `getAllSchedule`




