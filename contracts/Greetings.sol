pragma solidity ^0.5.16;

contract Greetings {
  string public message;

  constructor() public {
    message = 'Test 1';
  }

  function setMessage() public {
    message = 'Test 2';
  }
}
