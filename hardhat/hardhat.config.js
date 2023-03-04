require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    Sphnix: {
      url: "https://sphinx.shardeum.org/",
      chainId: 8082,
      accounts:[`${process.env.REACT_APP_PRIVATE_KEY}`]
    },
  },
};
