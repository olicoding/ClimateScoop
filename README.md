# ClimateScoop: Climate Data Visualization

## Table of Contents

- [Project Overview](#project-overview)
- [Technical Features](#technical-features)
- [CI/CD and Environment Strategy](#cicd-and-environment-strategy)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Installation and Usage](#installation-and-usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

ClimateScoop merges two bootcamp projects, revitalized with a focus on climate data. It's a platform demonstrating development skills and engagement with climate change issues.

[View Live](https://climatescoop.vercel.app/)

## Technical Features

- **Interactive Data Visualization**: Using `@nivo/line` for interactive climate data chart presentations.
- **Data Caching with Redis**: Implemented Redis for efficient caching of API responses, reducing load times and API call frequency.
- **Advanced Error Handling**: Enhanced application resilience with comprehensive error handling and logging using Winston.
- **Auth0 Integration**: Secure user authentication, with future plans for more personalized features.
- **Responsive Design**: Optimized for a seamless experience across various devices.
- **Performance Optimization**: Leverages Next.js for efficient server-side rendering and dynamic data loading.
- **Accessibility and User Experience**: Focused on accessibility and straightforward user experience.
- **PWA & Offline Support**: Utilizes next-pwa caching strategies in combination with a custom service worker, providing access to resources in limited connectivity or even complete offline scenarios.

## CI/CD and Environment Strategy

- **Linting**: Ensuring code quality and consistency.
- **Automated Testing**: Incorporating Jest and Cypress for comprehensive testing.
- **Redis Integration**: Configuration management for Redis in different environments.
- **Staging and Production**: Separate environments for thorough testing and safe deployment.

## Technologies Used

- **Frontend**: React.js, Next.js, Sass.
- **Backend**: Node.js, Express.js for Auth0 authentication, Redis and Cache API for caching.
- **PWA and Offline Capabilities**: Custom service worker for offline support.
- **Data Visualization**: Nivo for creating responsive charts.
- **Logging and Monitoring**: Winston for error logging.
- **Testing**: Jest for unit tests, Cypress for end-to-end tests.
- **CI/CD Pipeline**: Employing GitHub Actions for automated testing and deployment pipeline to Vercel.

## Installation and Usage

<details>
  <summary>Setup instructions</summary>

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Set up a local Redis server or configure a Redis cloud instance.
4. Configure `.env.local` with Redis connection details and other environment variables as per `.env.sample`.
5. Start the server with `npm run dev`.

For additional setup details or questions, feel free to reach out or open an [issue](https://github.com/olicoding/ClimateScoop/issues).

</details>

## Contributing

Contributions are welcome! Please refer to our [Contributing Guidelines](/CONTRIBUTING.md) for details.

## License

ClimateScoop is open source under the [MIT License](/LICENSE).

---

ClimateScoop is committed to providing meaningful insights into climate change through innovative technology. Join us in exploring these insights and contribute to the global conversation on climate change.
