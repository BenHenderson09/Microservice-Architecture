function remove(id){
    $.ajax({
        type: "DELETE",
        url: "/api/laptops/" + id,
        success: function(msg){
            alert(JSON.stringify(msg));
            location.reload();
        }
    });
}

$("#create-form").submit(function(e) {
    e.preventDefault();

    var form = $(this);
    var url = form.attr('action');

    $.ajax({
           type: "POST",
           url: url,
           data: form.serialize(),
           success: function(msg)
           {
                alert(JSON.stringify(msg));
                location.reload();
           }
         });
});

$("#update-form").submit(function(e) {
    e.preventDefault();

    var form = $(this);
    var formData = form.serialize();
    var url = form.attr('action') + '/' + formData.split('&')[0].split('=')[1];

    $.ajax({
           type: "PUT",
           url: url,
           data: formData,
           success: function(msg)
           {
                alert(JSON.stringify(msg));
                location.reload();
           }
         });
});