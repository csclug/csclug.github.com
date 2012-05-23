$(function() {
    csclug.initStyling();
    csclug.initEvents();
});

var csclug = {

    initStyling: function() {
        this.getCalendarEvents();


    },
    initEvents: function() {
        // put some events here



    },
    getCalendarEvents: function() {
        var calID = 'csclug.org_i3ul44f4rdu90norj8jqu0f1f4@group.calendar.google.com';
        var url = "http://www.google.com/calendar/feeds/" + calID + "/public/full?alt=json-in-script&max-results=5&singleevents=true&futureevents=true&sortorder=ascending&orderby=starttime&callback=?";
        $.getJSON(url,function(json){

            var html = '<ul class="unstyled" id="eventsFeed">';

            $.each(json.feed.entry,function(i,entry) {

                html += '<li><h3><span class="event_month label label-info">'
                    + $.format.date(entry['gd$when'][0].startTime + ' 00:00:00.000', "MMM")
                    + ' '
                    + $.format.date(entry['gd$when'][0].startTime + ' 00:00:00.000', "dd")
                    + ', '
                    + $.format.date(entry['gd$when'][0].startTime + ' 00:00:00.000', "yyyy")
                    + ' @ '
                    + $.format.date(entry['gd$when'][0].startTime + ' 00:00:00.000', "h")
                    + ':'
                    + $.format.date(entry['gd$when'][0].startTime + ' 00:00:00.000', "mm") + 'pm'
                    + ' to '
                    + $.format.date(entry['gd$when'][0].endTime + ' 00:00:00.000', "h")
                    + $.format.date(entry['gd$when'][0].endTime + ' 00:00:00.000', "mm") + 'pm'
                    + '</span></h3>'
                    + '<h4><i class="icon-calendar"></i><a href="'
                    + entry.link[0].href
                    + '">'
                    + entry.title.$t
                    + '</a>'
                    + '</h4><p>'
                    + entry.content.$t.substring(0,169)
                    + '</p></li>';

            });

            html += '</ul>';

            $('#calendar').html(html);

        });

    }

};

