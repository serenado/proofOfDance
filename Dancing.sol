pragma solidity ^0.4.18;

contract Dancing {

  mapping (bytes32 => uint8) public pointsReceived;


  bytes32[] public playerList;


  function Dancing(bytes32[] playerNames) public {
    playerList = playerNames;
  }


  function totalPointsFor(bytes32 player) view public returns (uint8) {
    return pointsReceived[player];
  }


  function pointsForPlayer(bytes32 player) public {
    pointsReceived[player] += 1;
  }

}
