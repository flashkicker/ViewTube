import axios from "axios"

export default axios.create({
	baseURL: "https://googlapis.com/youtube/v3",
	params: {
		part: 'snippet',
		maxResults: 5,
		key: `${process.env.REACT_APP_YOUTUBE_API_KEY}` // insert youtube api key here 
	}
})