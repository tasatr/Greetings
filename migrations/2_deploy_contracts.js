const GreetingsContract = artifacts.require("Greetings");
module.exports = function(deployer) {
    deployer.deploy(GreetingsContract);
};
