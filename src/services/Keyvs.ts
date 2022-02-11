import Keyv = require('keyv');
import { Service } from 'typedi';
import { uri, options } from '../config/keyv';

@Service()
export default class Keyvs {
	channel: Keyv;
	constructor() {
		this.channel = new Keyv(uri, { ...options, namespace: 'channel' });
	}
}
