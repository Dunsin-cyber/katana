require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",

  defaultNetwork: "sepolia", 
   networks: {    
     hardhat: {},   
     sepolia: {     
      url: process.env.API_URL,      
      accounts: [process.env.PRIVATE_KEY],   
     }
   }, 
   etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY, // Add your Etherscan API key in .env
  },
};
