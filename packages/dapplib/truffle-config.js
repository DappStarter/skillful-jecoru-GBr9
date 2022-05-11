require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inflict forget force sugar guard render remember erosion gloom knee outer giant'; 
let testAccounts = [
"0xb0a25231f84d4b280cf0ed1515dd109c84ac62f3403e4850447371b8c237a473",
"0x7b7e73c7464f2b602f4d6573e871fe450f1166b7fdd50e2e68352b39d5c5933b",
"0x377d5d505447ca0175f7340b4b657a05f34c651b22e1213dd8d7b3130e5c6355",
"0xae7a6bf5df913fd560fc2c639c8d188efe45022de09cd10e42c63a5584b7e65e",
"0xe410154193d97ceffc5486b5bf37d9682276e23428249531f28771cdaf8ace01",
"0x9808b5f0c02b3dae46d1c32e5b7105fafcac1182fea9b6910c2e4a8623728ac8",
"0x75e53f3c0df8e63be17267cad6f31901446d004ed7ecbf0a80da18b940a9b378",
"0x83dc3b2abd6c93190808cf1793bebc8c3862605ba7c7b727d9e3a54e3f90b78a",
"0xee92a43ca01a745be4b8afb0b4df39571ab8cf060a30e9f52b425a25ad94224b",
"0xa90caccf7d050fe678011669ef1fce51580a8e7944fe3122ee4371bf4a4bfc04"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


