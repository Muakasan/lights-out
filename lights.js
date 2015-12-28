var lightOn = false;
$("#lights-on-img").hide();
/*
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
*/
//Providing legacy support
//http://stackoverflow.com/questions/7018919/how-to-bind-touchstart-and-click-events-but-not-respond-to-both
var flag = false;
$("#switch-img").bind("touchstart click", function(){
    if(!flag) 
    {
        flag = true;
        setTimeout(function(){flag = false;}, 100);
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
    }
    return false;
});