function igniteSpark(){
    if (game.sparks >= game.starsCost) {
        game.stars = game.stars + 1;
        game.sparks = game.sparks - game.starsCost;
        document.getElementById('stars').innerHTML = game.stars;
        recalculateSparkGain();
    }
};

function incrementSparks(){
    game.sparks = game.sparks + game.sparkGain;
    document.getElementById('sparks').innerHTML = game.sparks;
};

function recalculateSparkGain(){
    game.sparkGain = game.stars;
    game.starsCost = (game.starsCost + 1000000);
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