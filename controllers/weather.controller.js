export const getWeatherByCity = async (req, res) => {
  try {
    const { city } = req.query

    if (!city) {
      return res.status(400).json({ message: 'City is required' })
    }

    const apiKey = process.env.OPENWEATHER_API_KEY
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`

    const response = await fetch(url)
    const data = await response.json()

    if (!response.ok) {
      return res.status(response.status).json({ message: data.message || 'Failed to fetch weather' })
    }

    res.status(200).json({
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      feelsLike: data.main.feels_like,
      condition: data.weather[0].main,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      icon: data.weather[0].icon
    })
  } catch (error) {
    console.error('Weather fetch error:', error)
    res.status(500).json({ message: 'Server error fetching weather' })
  }
}