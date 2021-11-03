pragma solidity ^0.5.16;

contract Greetings {
  string private _message;

  constructor() public {
    _message = 'Test 1';
  }

  function getMessage() public view returns(string memory){
    return _message;
  }

  function setMessage(string memory newMessage) public {
    _message = newMessage;
  }
}
