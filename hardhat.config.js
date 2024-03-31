/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'polygon',
    networks: {
      hardhat: {},
      polygon: {
        url: 'https://rpc.ankr.com/polygon_mumbai',
        accounts: ["22172bfde2ca0bcb4d17a7f3a104eafdee17549a2636acd27604a9661e013639"]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
