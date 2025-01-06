import { getCredentials } from "./credentials-helper";

const govStageCredentials = {
  oAuthClientId: '',
  oAuthClientSecret: '',
  loginEmail: ''
}

const govProdCredentials = {
  oAuthClientId: '',
  oAuthClientSecret: '',
  loginEmail: ''
}

const sourceCredentials = govStageCredentials;
const destCredentials = govStageCredentials;
export const Credentials = getCredentials(sourceCredentials, destCredentials);