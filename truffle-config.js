module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    }
  }
};

// const HDWalletProvider = require("@truffle/hdwallet-provider");
// const mnemonic = "race crime subway cram later rely mutual sure muscle close earn crowd";

// module.exports = {
//   networks: {
//     ropsten: {
//       provider: function() {
//         return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/a3281541f42646938ebcac1028152b2c")
//       },
//       network_id: 3
//     }
//   }
// };
