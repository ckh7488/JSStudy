//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract RPSFixed {
    
    
    
    constructor () payable {}
    
   
    enum Hand {
        rock, paper, scissors
    }
    
    enum PlayerStatus{
        STATUS_WIN, STATUS_LOSE, STATUS_TIE, STATUS_PENDING
    }
    
    enum GameStatus {
        STATUS_NOT_STARTED, STATUS_STARTED, STATUS_COMPLETE, STATUS_ERROR
    }
    
    // player structure
    struct Player {
        Hand hand;
        address payable addr;
        //hashHand 추가
        bytes32 hashHand;
        PlayerStatus playerStatus;
        uint256 playerBetAmount;
    }
    
    struct Game {
        uint256 betAmount;
        GameStatus gameStatus;
        Player originator;
        Player taker;
    }
    
    
    mapping(uint => Game) rooms;
    uint roomLen = 0;
    
    modifier isValidHand (Hand _hand) {
        require((_hand  == Hand.rock) || (_hand  == Hand.paper) || (_hand == Hand.scissors));
        _;
    }
    
    modifier isPlayer (uint roomNum, address sender) {
        require(sender == rooms[roomNum].originator.addr || sender == rooms[roomNum].taker.addr);
        _;
    }
    // 변경점
    function keccak(uint256 _hand, string memory _key) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(_hand,_key));
    }

    function verifyOriginator(uint256 _hand, string memory _key, uint roomNum) private returns(bool) {
        require(msg.sender == rooms[roomNum].originator.addr);
        if(keccak(_hand, _key) == rooms[roomNum].originator.hashHand){
            rooms[roomNum].originator.hand = Hand(_hand);
            return true;
        }
        else { return false; }
        
    }

    // end
    
    function createRoom (bytes32 _hashHand) public payable returns (uint roomNum) {
        rooms[roomLen] = Game({
            betAmount: msg.value,
            gameStatus: GameStatus.STATUS_NOT_STARTED,
            originator: Player({
                hashHand: _hashHand,
                hand: Hand.rock,
                addr: payable(msg.sender),
                playerStatus: PlayerStatus.STATUS_PENDING,
                playerBetAmount: msg.value
            }),
            taker: Player({ // will change
                hand: Hand.rock,
                hashHand: 0,
                addr: payable(msg.sender),  
                playerStatus: PlayerStatus.STATUS_PENDING,
                //배팅금액 동일하게
                playerBetAmount: msg.value
            })
        });
        roomNum = roomLen;
        roomLen = roomLen+1;
        
        
       // Emit gameCreated(msg.sender, msg.value);
    }
    
    function joinRoom(uint roomNum, Hand _hand) public payable isValidHand( _hand) {
       // Emit gameJoined(game.originator.addr, msg.sender, game.betAmount, msg.value);
        require(rooms[roomNum].originator.playerBetAmount == msg.value, "bet balance not equal!");
        rooms[roomNum].taker = Player({
            hand: _hand,
            hashHand: 0,
            addr: payable(msg.sender),
            playerStatus: PlayerStatus.STATUS_PENDING,
            playerBetAmount: msg.value
        });
        rooms[roomNum].betAmount = rooms[roomNum].betAmount + msg.value;
    }
    
    function payout(uint roomNum) public payable isPlayer(roomNum, msg.sender) {
        if (rooms[roomNum].originator.playerStatus == PlayerStatus.STATUS_TIE && rooms[roomNum].taker.playerStatus == PlayerStatus.STATUS_TIE) {
            rooms[roomNum].originator.addr.transfer(rooms[roomNum].originator.playerBetAmount);
            rooms[roomNum].taker.addr.transfer(rooms[roomNum].taker.playerBetAmount);
        } else {
            if (rooms[roomNum].originator.playerStatus == PlayerStatus.STATUS_WIN) {
                rooms[roomNum].originator.addr.transfer(rooms[roomNum].betAmount);
            } else if (rooms[roomNum].taker.playerStatus == PlayerStatus.STATUS_WIN) {
                rooms[roomNum].taker.addr.transfer(rooms[roomNum].betAmount);
            } else {
                rooms[roomNum].originator.addr.transfer(rooms[roomNum].originator.playerBetAmount);
                rooms[roomNum].taker.addr.transfer(rooms[roomNum].taker.playerBetAmount);
            }
        }
         rooms[roomNum].gameStatus = GameStatus.STATUS_COMPLETE;
    }
    
    function compareHands(uint roomNum, uint256 _hand, string memory _key) public {
        // hand와 key값을 받아서 hash가 맞는지 확인한다.
        require(verifyOriginator(_hand, _key,roomNum) == true, "wrong hash");
        uint8 originator = uint8(rooms[roomNum].originator.hand);
        uint8 taker = uint8(rooms[roomNum].taker.hand);
        
        rooms[roomNum].gameStatus = GameStatus.STATUS_STARTED;
        
        if (taker == originator){ //draw
            rooms[roomNum].originator.playerStatus = PlayerStatus.STATUS_TIE;
            rooms[roomNum].taker.playerStatus = PlayerStatus.STATUS_TIE;
            
        }
        else if ((taker +1) % 3 == originator) { // originator wins
            rooms[roomNum].originator.playerStatus = PlayerStatus.STATUS_WIN;
            rooms[roomNum].taker.playerStatus = PlayerStatus.STATUS_LOSE;
        }
        else if ((originator + 1)%3 == taker){
            rooms[roomNum].originator.playerStatus = PlayerStatus.STATUS_LOSE;
            rooms[roomNum].taker.playerStatus = PlayerStatus.STATUS_WIN;
        } else {
            rooms[roomNum].gameStatus = GameStatus.STATUS_ERROR;
        }
        // 이후 바로 payout 진행.
        payout(roomNum);

    }
}
