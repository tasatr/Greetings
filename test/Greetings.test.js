const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

// const { interface,bytecode } = require('../compile');

let accounts;
let greetings;

const Greetings = artifacts.require("Greetings");



beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  // greetings = await new web3.eth.Contract(JSON.parse(interface)).deploy({ data: bytecode, arguments: [Hello World'] })
  // .send({from: accounts[0], gas:'1000000'})
});

contract("Greeter: update greeting", () => {
  describe("setGreeting(string)", () => {
    it("sets greeting to passed in string", async () => {
      const greeter = await Greetings.deployed()
      const expected = "Hi there!";

      await greeter.setMessage(expected);
      const actual = await greeter.getMessage();
      console.log(actual);
      assert.equal(actual, expected, "greeting was not updated");
    });
  });
});

contract("Greetings", accounts => {
  it('Has a default message', () => {

    return Greetings.deployed()
      .then(instance => {
        greet = instance;
       return greet.getMessage.call();
      })
      .then(message => {
        console.log(message);
        assert.equal(
          message,
          "Test 1",
          "Hello World wasn't returned"
        );
      })
    });
});
