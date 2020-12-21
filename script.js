$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

var currentHour
var time=[]
var hourEl
var textAreaEl
var saveEl
var saveBtnEl
var workHours = 9
var rowEl
var currentDay = $(".today")
var holdingContainer = $(".container")
var col
var index = []

var renderCalender = () => {
    for(i=0; i < workHours; i++){
        rowEl = $("<div>").attr("class","row");
        hourEl = $("<div>" + time[i] + "</div>").attr("class", "col-lg-1 hour");
        col = $("<div>").attr("class", "col-lg-10");
        textAreaEl =$("<textarea>").attr("value", "").attr("class", "description col-lg-12").attr("id",time[i]);
        index.push(textAreaEl.attr("id"));
        saveEl = $("<div>").attr("class", "col-lg-1");
        saveBtnEl = $("<button>").attr("class", "saveBtn").attr("id", time[i]).attr("type", "submit").text("Save")
        //Appending time blocks to html
        col.append(textAreaEl)
        saveEl.append(saveBtnEl)
        rowEl.append(hourEl)
        rowEl.append(col)
        rowEl.append(saveEl)
        holdingContainer.append(rowEl)

    }
    $(document).on("click", ".saveBtn", saveSchedule)
}
var timeOfDay = () => {
    var formattedTime = []
    time = formattedTime
    for(i=0; i < workHours; i++){
        var timePoint = (9 + i);
        formattedTime.push((moment().startOf("day").add(timePoint, "hours").format("HH:mm A")))
    }
}
timeOfDay()
renderCalender()

