var x = 0;
var topic_of_projects = ["Planet survival prediction - Neo's data",
"Fiverr Spammer Detection",
"<a href = 'www.com' alt = 'great motors'>Great Motors</a> price prediction",
"Fashion MNIST",
"Spaceship Titanic Survival prediction",
"Digit Recognition",
"NEO-Nasa",
"House Price Prediction"
                        ]
let details = {"Planet survival prediction - Neo's data": ["The objective of the challenge is to predict the price (Amount (Million Naira) the company should sell a car based on the available data (Location, Maker, Model, Year, Colour, Amount (Million Naira), Type, Distance", 'https://github.com/Tolulopeelijah/great_motors'], 
                        "Fiverr Spammer Detection": ['', 'https://github.com/Tolulopeelijah/Fiverr-spammers-detection-'], 
                        "<a href = 'www.com' alt = 'great motors'>Great Motors</a> price prediction": ['The objective of the challenge is to predict the price (Amount (Million Naira) the company should sell a car based on the available data (Location, Maker, Model, Year, Colour, Amount (Million Naira), Type, Distance', 'https://github.com/Tolulopeelijah/great_motors'], 
                        "Fashion MNIST":['', 'https://github.com/Tolulopeelijah/fashion_mnist-with-tensorflow'],
                        "Spaceship Titanic Survival prediction": ['Welcome to the year 2912, where your data science skills are needed to solve a cosmic mystery. We\'ve received a transmission from four lightyears away and things aren\'t looking good.\
                        The Spaceship Titanic was an interstellar passenger liner launched a month ago. With almost 13,000 passengers on board, the vessel set out on its maiden voyage transporting emigrants from our solar system to three newly habitable exoplanets orbiting nearby stars.\n While rounding Alpha Centauri en route to its first destination—the torrid 55 Cancri E—the unwary Spaceship Titanic collided with a spacetime anomaly hidden within a dust cloud. Sadly, it met a similar fate as its namesake from 1000 years before. Though the ship stayed intact, almost half of the passengers were transported to an alternate dimension!'],
                        "Digit Recognition":['', 'https://github.com/Tolulopeelijah/Digit-Recognizer'],
                        "NEO-Nasa": ['There is an infinite number of objects in the outer space. Some of them are closer than we think. Even though we might think that a distance of 70,000 Km can not potentially harm us, but at an astronomical scale, this is a very small distance and can disrupt many natural phenomena. These objects/asteroids can thus prove to be harmful. Hence, it is wise to know what is surrounding us and what can harm us amongst those. Thus, this dataset compiles the list of NASA certified asteroids that are classified as the nearest earth object.description', 'https://github.com/Tolulopeelijah/neo---nasa'],
                        "House Price Prediction": ['', 'https://github.com/Tolulopeelijah/house-price-prediction']

                    }
function right_scroll (){
    var topic = topic_of_projects[x]
    document.getElementById("project_topic").innerHTML = topic;
    document.getElementById("project_text").innerHTML = details[topic][0];
    document.getElementById("proj_github").innerHTML = details[topic][1];
    if (x < topic_of_projects.length -1){
        x++;
    }
}
function left_scroll (){
    var topic = topic_of_projects[x]
    document.getElementById("project_topic").innerHTML = topic;
    document.getElementById("project_text").innerHTML = details[topic][0];
    document.getElementById("proj_github").innerHTML = details[topic][1];
    if (x != 0){
        x--;
    }
}