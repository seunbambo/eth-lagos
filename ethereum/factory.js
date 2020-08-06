import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const CONTRACT_ADDRESS = process.env.ADDRESS;
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  CONTRACT_ADDRESS
);

export default instance;
