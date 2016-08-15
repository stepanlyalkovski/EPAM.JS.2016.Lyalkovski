function random(min, max) {
    return Math.floor((Math.random() * max) + min);
}

function isEmpty( el ){
    return !$.trim(el.html())
}

function setDisableState (gen, color, reset) {
    $("#btn-gen").prop("disabled", gen);
    $("#btn-reset").prop("disabled", color);
    $("#btn-color").prop("disabled", reset);
}

$(function() {

    setDisableState(false, true, true);

    $("#btn-gen").click(function () {
        var $table = $("#task-table");
        $("#btn-reset").prop("disabled", false);
        if (!isEmpty($table)) return;
        var blockCount = random(30, 50);
        for (var i = 0; i < blockCount; i++) {
            var number = random(1, 100);
            var $block = $("<div class='block'></div>").text(number);
            $table.append($block);
        }
        setDisableState(true, false, false);
    });

    $("#btn-color").click(function () {
        $(".block").each(function () {
            var btnClass = "";
            var $block = $(this)
            var number = $block.text();

            if (!isNaN(number)) {
                if (number > 75) {
                    btnClass = "block-red";
                } else if (number > 50) {
                    btnClass = "block-orange";
                } else if (number > 25) {
                    btnClass = "block-green";
                }
                $block.addClass(btnClass);
            }
        });
        setDisableState(true, false, true);
    });

    $("#btn-reset").click(function () {
        $("#task-table").empty();
        setDisableState(false, true, true);
    });

});