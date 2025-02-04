require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.19",
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com/",
      accounts: [`${process.env.PRIVATE_KEY}`] // Fix: Enclose the private key in backticks
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  }
};
console.log("Loaded Private Key:", process.env.PRIVATE_KEY);

