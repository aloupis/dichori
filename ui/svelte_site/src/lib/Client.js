import fetch from 'node-fetch';
import { ApolloClient } from '@apollo/client/core/core.cjs.js';
import  {HttpLink}  from '@apollo/client/link/http/http.cjs.js';
import { InMemoryCache } from '@apollo/client/cache/cache.cjs.js';

const URL ='https://dichori-gateway.herokuapp.com/graphql'
class Client {
	constructor() {
		if (Client._instance) {
			return Client._instance;
		}
		Client._instance = this;

		this.client = this.setupClient();
	}

	setupClient() {
		const link = new HttpLink({
			uri: URL,
			fetch
		});

		const client = new ApolloClient({
			link,
			cache: new InMemoryCache()
		});
		return client;
	}
}

export const { client } = new Client();
