# MED-BLOCKS
## About the project
Med-Blocks is a decentralized record-keeping application that aims to revolutionize the healthcare industry. Unlike traditional record-keeping systems that are centralized and vulnerable to hacking, Med-Blocks utilizes blockchain technology to create a secure and immutable record of patient data.

In the Med-Blocks system, patient data is stored on multiple nodes in the blockchain network, ensuring redundancy and preventing any single point of failure. In addition, images such as X-rays, MRIs, and other medical imaging can be stored on the InterPlanetary File System (IPFS), a distributed file storage system that provides high-performance and fault tolerance.

With Med-Blocks, patients have complete control over their data and can grant permission to healthcare providers to access their records. This ensures that patient privacy is protected and that sensitive medical information is only accessible to authorized parties.

Moreover, Med-Blocks can streamline the process of sharing patient data between healthcare providers, reducing administrative costs and improving patient outcomes. For instance, if a patient needs to  transferred to another hospital, their records can be quickly and securely transferred to the new facility, ensuring continuity of care.

Overall, Med-Blocks represents a significant step forward in the digitalization of healthcare records, providing a secure, decentralized, and accessible platform for patients and healthcare providers alike.

## Technology Stack & Tools

- Solidity (Writing Smart Contracts & Tests)
- Javascript (React & Testing)
- [Hardhat](https://hardhat.org/) (Development Framework)
- [Ethers.js](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [React.js](https://reactjs.org/) (Frontend Framework)
- [IPFS](https:ipfs://ipfs.tech/)(To store the files on peer to peer network)
- [Thirdweb](https://thirdweb.com/)(To use to upload the images to ipfs)
- [Shardeum Sphinx 1.X](https://shardeum.org/)(The smartcontract is deployed on the shardeum sphinx 1.x testnet)
- [Rainbowkit/wagmi](https://www.rainbowkit.com/)(
  Out-of-the-box wallet management for your dapp)



## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/)

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
`$ npm install`

### 3. Setup .env file:
Before running any scripts, you'll want to create a .env file with the following values (see .env.example):

- **REACT_APP_PRIVATE_KEY=""**


#### You can get these keys from the link mentioned above

### 4. Deploying to Shardeum Sphinx 1.X

#### Configure  the hardhat.config.js file

```
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    sphnix: {
      url: "https://sphinx.shardeum.org/",
      chainId: 8082,
      accounts:[`${process.env.REACT_APP_PRIVATE_KEY}`]
    },
  },
};
```
#### After that run the command

`$ npx hardhat run ./scripts/deploy.js --network sphnix`


### 5. Start frontend
`$ npm run start`

