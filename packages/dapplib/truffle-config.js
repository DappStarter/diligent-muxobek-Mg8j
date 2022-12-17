require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remember push journey kitchen off stock'; 
let testAccounts = [
"0x2c98a067d8b6c04cedf8d7eda95d36c3ac129b14f72faaf22efce38842f65196",
"0x3c9d8f67ee9ae62efd4d80cf7b7b63200c373c6695784b05f34c5b22d03c44b9",
"0x75b944de7eb8a88cc26d52c829dae8a7413c48c23c24f784cbd20dc9f839ca36",
"0x1bb2fcee7e6e8549559029c5aa475ab38b96bc5e03e2fe1d7a9a485bf0641943",
"0x1c67c69f8a5da74dd07a5ef505dab80c6eb187b2622f92be4116bccc371d9550",
"0x5d8337f840536431cfb39991492cf3a96259a8f45052f12d88a2541e38d75885",
"0xb89e831ab3cb44b8d5640259d8290d6118ee26b0c55ada91526d955ef066da4d",
"0xfa0c1aebc7f5348a1ba6c95a12ac9fcdebb482b87f64818a39bf88ba03575f8d",
"0x6a7a2592811a0550adce3a3a4cee636d321a4313c2e21435affc60064f2b7a07",
"0xb97de982b277240101d04bef0cda6876ef0807828200e286f2981ae5f90c2d66"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


