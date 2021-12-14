function weeklyButton() {
    document.getElementById("weeklyMeetingStructure").classList.remove("hiddenStructure");
    document.getElementById("monthlyMeetingStructure").classList.add("hiddenStructure");
}

function monthlyButton() {
    document.getElementById("weeklyMeetingStructure").classList.add("hiddenStructure");
    document.getElementById("monthlyMeetingStructure").classList.remove("hiddenStructure");
}