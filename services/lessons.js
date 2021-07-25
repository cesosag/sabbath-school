import axios from 'axios'

const lessons = axios.create({
	baseURL: 'https://sabbath-school.adventech.io/api/v1',
})

lessons.interceptors.request.use(config => {
	config.url = `${config.url}/index.json`
	return config
})

export default lessons
