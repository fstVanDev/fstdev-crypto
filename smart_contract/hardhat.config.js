require('@nomiclabs/hardhat-waffle')

module.exports = {
   solidity: '0.8.0',
   networks: {
      rinkeby: {
         url: 'https://eth-rinkeby.alchemyapi.io/v2/3o8PaASqcuXDEQ67FtY2KjH_-TWRpFfH',
         accounts: ['acad9751d4805c89e1f1700c6db4b21c9765f1fa6ce1b9ecff42c19b0128a0e8']
      }
   }
};
