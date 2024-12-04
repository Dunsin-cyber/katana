require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",

  // url : testnet.rpc.ethena.fi
  // id : 52085143
  // network name : ble-testnet
  // symbol : eth

  // defaultNetwork: "ble-testnet", //
  // networks: {
  //   hardhat: {}, // Default Hardhat network
  //   "ble-testnet": {
  //     url: "https://testnet.rpc.ethena.fi", // RPC URL for ble-testnet
  //     chainId: 52085143,                   // Network ID for ble-testnet
  //     accounts: [process.env.PRIVATE_KEY], 
  //   },
  // },

  networks: {
    'ble-testnet': {
      url: 'https://testnet.rpc.ethena.fi',
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      'ble-testnet': process.env.ETHERSCAN_API_KEY
    },
    customChains: [
      {
        network: "ble-testnet",
        chainId: 52085143,
        urls: {
          apiURL: "https://testnet.explorer.ethena.fi/api",
          browserURL: "https://testnet.explorer.ethena.fi:443"
        }
      }
    ]
  }


  // defaultNetwork: "sepolia", 
  //  networks: {    
  //    hardhat: {},   
  //    sepolia: {     
  //     url: process.env.API_URL,      
  //     accounts: [process.env.PRIVATE_KEY],   
  //    }
  //  }, 
  //  etherscan: {
  //   apiKey: process.env.ETHERSCAN_API_KEY, // Add your Etherscan API key in .env
  // },
};
