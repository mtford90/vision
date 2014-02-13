/**
 * Created by mtford on 01/02/2014.
 */

$(function(){

    $(".gridster ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [140, 140]
    });

    var editable = $('.simpleTabsNavigation li a');

    editable.dblclick(function(event){
        $(event.currentTarget).prop('contenteditable', true);
        $(event.currentTarget).focus();
        document.execCommand('selectAll', false, null);
    });

    editable.focusout(function(event) {
        $(event.currentTarget).prop('contenteditable', false);
    });

    editable.keypress(function(e) {
        return e.which != 13;
    });

    $(document).ready(function () {
        $(".hoverli").hover(
            function () {
                $('ul.file_menu').stop(true, true).slideDown('medium');
            },
            function () {
                $('ul.file_menu').stop(true,true).slideUp('medium');
            }
        );

        $( window ).resize(function() {
            console.log('hi');
            $(".gridster ul").gridster({
                widget_margins: [10, 10],
                widget_base_dimensions: [140, 140]
            });
        });

    });



});






