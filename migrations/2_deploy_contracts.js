const GreetingsContract = artifacts.require("Greetings");
const EBayContract = artifacts.require("EBayClone");
module.exports = function(deployer) {
    deployer.deploy(GreetingsContract);
    deployer.deploy(EBayContract);
};
