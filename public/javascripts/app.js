
$(document.body).ready(function() {

    $("#main").on("click", function(event) {
        if($(event.target).hasClass("_completed")) {
            var li = $(event.target).parents("li").get(0);
            var status = $("._status", li).get(0);
            var form = $(li).find("form").get(0);
            $(status).val($(status).val() == 0 ? 1 : 0);
            form.submit();
        }
    });

});