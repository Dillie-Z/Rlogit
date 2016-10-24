$( document ).ready(function(){
  $(".button-collapse").sideNav();
  $(".dropdown-button").dropdown();
  $(".modal-trigger").leanModal({
    dismissible: true,
    ready: function() {
        if($(".lean-overlay").length > 1) {
            $(".lean-overlay:not(:first)").each(function() {
                $(this).remove();
            });
        }
    },
    complete: function() {
        $(".lean-overlay").each(function() {
            $(this).remove();
        });
    }
  });
  // $('#comment').val('New Text');
  $('#comment').trigger('autoresize');
})
