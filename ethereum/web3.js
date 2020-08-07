import Web3 from "web3";

let web3;
const REACT_APP_PROJECT_ID = process.env.REACT_APP_PROJECT_ID;
if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // We are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    `https://rinkeby.infura.io/v3/${REACT_APP_PROJECT_ID}`
  );
  web3 = new Web3(provider);
}

export default web3;
