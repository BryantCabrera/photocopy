import Web3 from 'web3';

//instantiates new Web3 instance
//connects instance to our blockchain (testrpc at localhost:7545)
const web3=new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
let photoCopyABI=[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tasks","outputs":[{"name":"id","type":"uint256"},{"name":"content","type":"string"},{"name":"completed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x8d977672"},{"constant":true,"inputs":[],"name":"taskCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xb6cb58a5"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"constant":false,"inputs":[{"name":"_content","type":"string"}],"name":"createTask","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x111002aa"}]
let photoCopyAddress='0xE27eFB89fD4b3562efB93187C2422257a84E3569';
web3.eth.defaultAccount = web3.eth.accounts[0]


const photoCopyContract=web3.eth.contract(photoCopyABI).at(photoCopyAddress);
//exports the configuration so that we can make api calls from our app
export {photoCopyContract};