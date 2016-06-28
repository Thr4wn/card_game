$.ajax('/card', {
    success: function(data, textStatus, jqxhr) {
        console.log(data);
        for(key in data) {
            var card = data[key];
            $card = $("<div class='card'><div class='card-title card-text'>"+card.title+"</div><div class='card-description card-text'>"+card.description+"</div></div>");
            $('.hand').append($card);
        }
    },
    error: function(data, textStatus, jqxhr) {
        console.log('error');
        console.log(data);
    }
});
