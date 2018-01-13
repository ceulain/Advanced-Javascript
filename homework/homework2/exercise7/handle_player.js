(function () {
  'use strict'

  function handleTeam(sport) {
    'use strict'

    var players = [];

    function addPlayer(player) {
      players.push(player)
    }

    function removePlayer(_player) {
      var index = players.map(function(player) {
        return player.id
      }).indexOf(_player.id)

      players.splice(index, 1)
    }

    function displayPlayer() {
      for (var i = 0;  i < players.length; i++) {
        console.log('My name is ' + players[i].name + ' and I\'m playing ' + sport)
      }
    }

    function numberOfPlayers() {
      console.log(players.length);
    }

    function updatePlayer(player, name) {
      for (var i = 0, length = players.length; i < length; i++) {
        if (players[i].id == player.id) {
          player[i].name = name
        }
      }
    }

    return {
      addPlayer,
      removePlayer,
      displayPlayer,
      numberOfPlayers,
      updatePlayer
    }
  }

  var zidane = { id: 1, name: "Zidane" };
  Object.defineProperty(zidane, 'id', { writable: false });

  var footballTeam = handleTeam('football');

  footballTeam.addPlayer(zidane);
  footballTeam.displayPlayer();
  footballTeam.removePlayer(zidane);
  console.log('**** remove Zidane ***');
  footballTeam.displayPlayer();

  // var basketTeam = handleTeam();
})()
