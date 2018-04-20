//Fun sounder for each page load - from Pulp Fiction - S. L Jackson
var audioWinning = document.createElement("audio");
audioWinning.setAttribute("src", "assets/img/tasty_burger.wav");

audioWinning.play();

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

    //handle not eaten yet button click - will move button to the other side of the screen once the DB is updated
    $(".eat-button-form").on("submit", function (event) {
        event.preventDefault();

        var eatenState = $(this).attr("eaten-data");
        var id = $(this).attr("burger-id");
        var diner = $("#diner-name").val();
        console.log($(this).attr("burger-id"));
        console.log(diner);

        if (eatenState == "false")
            eatenState = true
        else
            eatenState = false

        var newEatenData = {
            eaten: eatenState,
            diner: diner
        };
        console.log(newEatenData.eaten);

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newEatenData,
        }).done(
            function (res) {
                console.log(res);
                console.log("changed burger devoured state to", newEatenData.eaten);
                // Reload the page to get the updated list
                location.reload();
            })
        .fail(function (err) {
            console.log("getting an error from the database", err.status, err.statusText);
            console.log(err.status);
            console.log(err.responseJSON.errors["0"]);
            $(".modal-title").text("HTTP Error : " + err.status  +" "+ err.statusText);
            $("#error-text").text(err.responseJSON.errors["0"].message);
            $("#burger-error-modal").modal('toggle');
        });
    });


    //handle eat-again-button click - will move button to the other side of the screen once the DB is updated
    $(".eat-again-button").on("click", function (event) {
        console.log("inside eat-again-button");
        var id = $(this).attr("burger-id");
        console.log($(this).attr("burger-id"));

        var newEatenState = {
            eaten: false
        };

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newEatenState,
        }).then(
            function () {
                console.log("changed burger devoured state to", newEatenState.eaten);
                // Reload the page to get the updated list
                location.reload();
            });
    });

    //add new burger handler
    $(".create-burger-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurgerName = $("#burger-name").val().trim();

        console.log("inside create burger");
        console.log(newBurgerName);

        // Send the POST request.
        $.ajax({
            url: "/api/burger/" + newBurgerName,
            type: "POST",
        }).done(
            function (res) {
                console.log(res);
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            })
            .fail(function (err) {
                console.log("getting an error from the database", err.status, err.statusText);
                console.log(err.status);
                console.log(err.responseJSON.errors["0"]);
                $(".modal-title").text("HTTP Error : " + err.status  +" "+ err.statusText);
                $("#error-text").text(err.responseJSON.errors["0"].message);
                $("#burger-error-modal").modal('toggle');
            });

    });
});
