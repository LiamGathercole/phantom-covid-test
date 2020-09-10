# COVID-19 London Heatmap

#### PHANTOM Code Test - Liam Gathercole

The COVID-19 London Heatmap visualises CSV data from Jan 30 to Jun 06. Animating through the days, it is possible to visualise the way the virus moved through the city during this period.

As a user, you can also use the circular slider to scrub back and forth and view the animation at your own pace, or drill down to a particular day.

# Usage

### Getting started

First, clone the repository to your local computer.
Open your favourite Terminal and run these commands.

Install dependencies:

```sh
$ npm install
```

Create a file named `.env` and place this in the root.
The contents of the file should be as follows:

```json
(REACT_APP_GOOGLE_MAPS_API_KEY = XXXXXXXXXXXXXXXX)
```

Replace XXXXXXXXXXXXXXXX with a Google Maps Javascript API key.
[You can obtain an API key for free here](https://developers.google.com/maps/documentation/embed/get-api-key)

#### Running locally

Run local server:

```sh
$ npm run start
```

#### Building for source

For production release:

```sh
$ npm run build
```

### Todos

If I had more time, I would add:

- Clickable boroughs with additional metrics and charts
- Connect to Covid API for realtime data
- Show London and Borough totals
- Play / Pause button for animation
- Write tests
- Cross browser / device testing

## License

MIT
