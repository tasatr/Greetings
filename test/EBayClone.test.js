const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

// const { interface,bytecode } = require('../compile');

let accounts;
let greetings;

const EBayClone = artifacts.require("EBayClone");



beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  console.log(accounts);
  // greetings = await new web3.eth.Contract(JSON.parse(interface)).deploy({ data: bytecode, arguments: [Hello World'] })
  // .send({from: accounts[0], gas:'1000000'})
});

contract("EBayClone", accounts => {
  it("Deploys an EBayClone contract", () => {
    console.log(accounts);
  });
  it('Initially no products', () => {

    return EBayClone.deployed()
      .then(instance => {
        ebay = instance;
       return ebay.getNumberOfProducts.call();
      })
      .then(message => {
        console.log(message);
        assert.equal(
          message,
          0,
          "Wrong number of products"
        );


      });
      return EBayClone.deployed()
        .then(instance => {
          ebay = instance;
         return ebay.getNumberOfProducts.call();
        })
        .then(message => {
          console.log(message);
          assert.equal(
            message,
            0,
            "Wrong number of products"
          );

        });
      });
  it('Add product', () => {

      return EBayClone.deployed()
        .then(instance => {
          ebay = instance;
         return ebay.sellProduct.call("First book", "A lovely book to read first", 5);
        })
       .then(nrProducts => {
         console.log(nrProducts);
         assert.equal(
           nrProducts,
           1,
           "Wrong number of products"
         );
         return ebay.getNumberOfProducts.call();
       })
       .then(nrProducts => {
         nr_of_products = nrProducts.toNumber();
         console.log(nr_of_products);
         assert.equal(
           nr_of_products,
           1,
           "Wrong number of products"
         );
       });
  });

});
