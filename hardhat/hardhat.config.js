require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai:{
      url: `https://polygon-mumbai.g.alchemy.com/v2/6zhpyX3NltSNXzIW7h-Twy-WDVk5VJeX`,
      accounts: ["68f2b2981228d8acc3059f939435ecde94cce69a098778b2c1033e883c62c7df"]
    },
    liberty: {
      url: "https://liberty20.shardeum.org/",
      chainId: 8081,
      accounts:["a8a523608b20501dda86d4385b02f92ae34277179ded6f4c1f6ac19779b18541"]
    },
  },
};
