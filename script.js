function hideAll(){

document.getElementById("home").style.display="none";
document.getElementById("about").style.display="none";
document.getElementById("projects").style.display="none";
document.getElementById("skills").style.display="none";
document.getElementById("education").style.display="none";
document.getElementById("resume").style.display="none";
document.getElementById("contact").style.display="none";

}

function showHome(){

hideAll();
document.getElementById("home").style.display="block";

}

function showAbout(){

hideAll();
document.getElementById("about").style.display="block";

}

function showProjects(){

hideAll();
document.getElementById("projects").style.display="block";

}

function showContact(){

hideAll();
document.getElementById("contact").style.display="block";

}

window.onload=function(){

showHome();

}
function showSkills(){

hideAll();
document.getElementById("skills").style.display="block";

}

function showEducation(){

hideAll();
document.getElementById("education").style.display="block";

}

function showResume(){

hideAll();
document.getElementById("resume").style.display="block";

}
