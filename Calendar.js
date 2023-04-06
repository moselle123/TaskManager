let events = [
    {
    title: 'Career Fairs',
    start: '2023-03-03',
    },
    {
    title: 'Happy days',
    start: '2023-04-06',
    end: '2023-04-10'
    },
    {
    title: 'Meeting',
    start: '2023-03-12T10:30:00',
    end: '2023-03-12T12:30:00'
    },
    {
    title: 'Lunch',
    start: '2023-03-12T12:00:00'
    }]
document.addEventListener('DOMContentLoaded', function() {
    var currentDate = new Date().toISOString().slice(0, 10);
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
    themeSystem: 'bootstrap5',
    headerToolbar: {start: 'title', end: 'today,prev,next'},
    buttonText: {today:'Today'},
    initialDate: currentDate,
    editable: true,
    selectable: true,
    businessHours: true,
    dayMaxEvents: true,
    events: events,eventClick: function(info) {
    info.jsEvent.preventDefault();
    if (info.event.url) {
    alert(info.event.url);
    //window.open(info.event.url);
    }
    }
    });
    calendar.render();
    });

// function getEventsOnDate(date,events) {
//     const givenDateString = date.toISOString().substring(0, 10); // Get date in YYYY-MM-DD format
//     const eventsOnDate = events.filter(event => {
//         const eventDateString = event.start.substring(0, 10); // Get date in YYYY-MM-DD format
//         return (eventDateString === givenDateString) ||
//                 (event.end && event.end.substring(0, 10) === givenDateString);
//     });
//     return eventsOnDate;
// }

//     function specificDate(date){
//         let eventsList = getEventsOnDate(date,events);
//         currentDate = new Date();
//         let today = currentDate;
//         if (date == today){

//         };
//         let list =[];
//         for (var i = 0; i < eventsList.length; i++) {
//             list.push;
//           }
//         document.getElementById("clickedDate").innerHTML = ""
//     }