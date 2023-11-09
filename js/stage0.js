function igniteSpark(){
    game.stars = game.stars + 1;
    document.getElementById('stars').innerHTML = game.stars;
    document.getElementById('spark-text').innerHTML = 'Your world is a flicker in the darkness.';
    recalculateSparkGain();
};

function incrementSparks(){
    game.sparks = game.sparks + game.sparkGain;
    document.getElementById('spark').innerHTML = game.sparks;
};

function recalculateSparkGain(){
    game.sparkGain = game.stars;
};

window.setInterval(function(){
	
	incrementSparks();
	
}, 1000);