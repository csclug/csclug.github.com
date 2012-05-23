$(function() {
    csclug.initStyling();
    csclug.initEvents();
});

var csclug = {

    initStyling: function() {

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

                })

                html += '</ul>';

                $('#calendar').html(html);

            });
//        $.getJSON('http://www.google.com/calendar/feeds/developer-calendar@google.com/public/full?alt=json-in-script&callback=insertAgenda&orderby=starttime&max-results=2&singleevents=true&sortorder=ascending&futureevents=true', function(data) {
//            var items = [];
//
//            $.each(data.feed.entry, function(i, entry) {
//                items.push('<li id="' + i + '">' + entry.title.$t + '</li>');
//            });
//
//            $('<ul/>', {
//                'class': 'my-new-list',
//                html: items.join('')
//            }).appendTo('body');
//        });
//
//        var url = 'http://www.google.com/calendar/feeds/' + calID + '/public/full?alt=json-in-script&max-results=25&futureevents=true';
//        var html = '';
//        $.getJSON(url, function(json) {
//             alert(json);
//            html = '<ul id="eventsFeed">';
//            $.each(json.feed.entry,function(i,entry) {
//
//              html += '<li>'
//                   + 'test' //$.format.date(entry['gd$when'][0].startTime + ' 00:00:00.000', "yyyy-MM-dd")
//                   + '</li>';
//
//            });
//
//            html += '</ul>';
//
//            $('#calendar').html(html);
//
//        });

    },
    initEvents: function() {



    }
};

