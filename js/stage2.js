function formPlanet(){
    if (game.sparks >= game.planetCost) {
        game.planets = game.planets + 1;
        game.sparks = game.sparks - game.planetCost;
        document.getElementById('planets').innerHTML = game.stars;
        document.getElementById('planetCost').innerHTML = game.planetCost;
        document.getElementById('sparks').innerHTML = game.sparks;
        recalculateSparkGain();
    }
}