import axios from 'axios';

const KEY = 'AIzaSyDbGwkIXnIi5qIdh2ZWfFtxo4dPOf7TdWs';

export default axios.create({
	baseURL: ' https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 10,
		key: KEY,
	},
});
