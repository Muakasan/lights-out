var lightOn = false;
$("#lights-on-img").hide();

$("#switch-img").on("pointerup", function(){
    if(lightOn)
    {
        $(this).addClass("rotate180");
        $("#lights-label").text("Light's Off!");
        $("#lights-on-img").hide();
        $("#lights-off-img").show();
    }
    else
    {
        $(this).removeClass("rotate180");        
        $("#lights-label").text("Light's On!");
        $("#lights-off-img").hide();
        $("#lights-on-img").show();
    }
    lightOn = !lightOn;
});
