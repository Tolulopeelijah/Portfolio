var x = 0;
let topic_of_projects = ["Planet survival prediction - Neo's data", "Fiverr Spammer Detection", "<a href = 'www.com' alt = 'great motors'>Great Motors</a> price prediction", "more coming soon!"]
function right_scroll (){
    document.getElementById("project_topic").innerHTML = topic_of_projects[x];
    if (x < topic_of_projects.length -1){
        x++;
    }
}
function left_scroll (){
    document.getElementById("project_topic").innerHTML = topic_of_projects[x];
    if (x != 0){
        x--;
    }
}