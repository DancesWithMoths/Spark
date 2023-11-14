function igniteSpark(){
    game.stars = game.stars + 1;
    document.getElementById('stars').innerHTML = game.stars;
    recalculateSparkGain();
};

function incrementSparks(){
    game.sparks = game.sparks + game.sparkGain;
    document.getElementById('spark').innerHTML = game.sparks;
};

function recalculateSparkGain(){
    game.sparkGain = game.stars;
    game.starsCost = game.starsCost + 20
    sparkText = ''
    switch(game.stars) {
        case 0: 
            sparkText = 'Your world is a void.'
            break;
        case 1:
            sparkText = 'Your world is a flicker in the darkness.';
            break;
    }
    document.getElementById('spark-text').innerHTML = sparkText;
    document.getElementById('starsCost').innerHTML = game.starsCost;
};

window.setInterval(function(){
	
	incrementSparks();
	
}, 1000);