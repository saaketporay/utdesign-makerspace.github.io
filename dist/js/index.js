// Smooth scrolling using jQuery easing
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: (target.offset().top - 54)
            }, 1000, "easeInOutExpo");
            return false;
        }
    }
});

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
});

// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
    target: '#mainNav',
    offset: 56
});

// Collapse Navbar
var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
    } else {
        $("#mainNav").removeClass("navbar-shrink");
    }
};
// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);

document.addEventListener("DOMContentLoaded", function () {
    var clicker = 0;
    var images = ["photosphere.jpg"]
    var viewer = new PhotoSphereViewer({
        container: 'viewer',
        panorama: './dist/img/' + images[0],
        navbar: [
            'autorotate',
            'zoom',
            'fullscreen'
        ]
    });

    $('#slide-next').click(function () {
        viewer.setPanorama('./dist/img/' + images[++clicker % images.length]);
    })

    $('#slide-prev').click(function () {
        viewer.setPanorama('./dist/img/' + images[--clicker % images.length]);
    })

    

    // Hide navbar when modals trigger
    $('.portfolio-modal').on('show.bs.modal', function (e) {
        $(".navbar").addClass("d-none");
    })
    $('.portfolio-modal').on('hidden.bs.modal', function (e) {
        $(".navbar").removeClass("d-none");
    })
    var buttonText_small = {
        today: "Today",
        month: "M",
        week: "W",
        day: "D",
        list: "list"
    };
    var header_small = {
        left: "title",
        center: "",
        right: "dayGridMonth,timeGridWeek,timeGridDay"
    };
    var footer_small = {
        left: "",
        right: "prev,today,next"
    };
    var buttonText = {
        today: "Today",
        month: "Month",
        week: "Week",
        day: "Day",
        list: "list"
    };
    var header = {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay"
    };
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: [
            'dayGrid',
            'googleCalendar',
            'bootstrap',
            'timeGrid',
            'interaction'
        ],
        themeSystem: 'bootstrap',
        googleCalendarApiKey:
            "AIzaSyCSNMxYW6PAh1QM0woCWwRnmZKZtm_6sFw",
        events: {
            googleCalendarId:
                "8sv5eeliouchn2dodnoqb5tj0g@group.calendar.google.com"
        },
        contentHeight: $(window).height() * 0.62,
        businessHours: {
            daysOfWeek: [1, 2, 3, 4, 5, 6],
            startTime: "09:00",
            endTime: "22:00"
        },
        eventClick: function (info) {
            info.jsEvent.preventDefault();

        },
        eventRender: function () {
            let events = calendar.getEvents();
            console.log(events);
            events.forEach(event => {
                let start = new Date(event.start);
                let end = new Date(event.end);
                $('#calendar-list-body').append(`<tr><td>${event.start}</td><td>${event.title}</td></tr>`)
            })
        },
        buttonText: $(document).width() > 768 ? buttonText : buttonText_small,
        header: $(document).width() > 768 ? header : header_small,
        footer: $(document).width() > 768 ? null : footer_small
    })

    calendar.render();



    $(document).resize(function () {
        var width = $(document).width();
    });
});
