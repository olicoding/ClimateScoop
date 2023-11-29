# ClimateScoop: Climate Data Visualization

Welcome to ClimateScoop, an evolving web application designed to provide insightful visualizations and analysis of climate data. Utilizing a modern tech stack, this project not only showcases my technical skills but also my commitment to contributing to the global discussion on climate change.

## Table of Contents

- [Project Overview](#project-overview)
- [Technical Features](#technical-features)
- [CI/CD and Environment Strategy](#cicd-and-environment-strategy)
- [Installation and Usage](#installation-and-usage)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

ClimateScoop merges two bootcamp projects, revitalized with a focus on climate data. It's a platform demonstrating development skills and engagement with climate change issues.

[View Live](https://climatescoop.vercel.app/)

<details>
  <summary>More about the project</summary>

The platform features engaging charts visualizing climate indicators like global temperature changes, ocean warming trends, and arctic ice melt. It's a unique blend of data-driven storytelling and technical innovation, designed to enhance understanding and awareness of climate change.

</details>

## Technical Features

- **Interactive Data Visualization**: Using `@nivo/line` for easily understandable climate data presentations.
- **Data Caching with Redis**: Implemented Redis for efficient caching of API responses, reducing load times and API call frequency.
- **Advanced Error Handling**: Enhanced application resilience with comprehensive error handling and logging using Winston.
- **Auth0 Integration**: Secure user authentication, with plans for more interactive, personalized features.
- **Responsive Design**: Optimized for a seamless experience across various devices.
- **Performance Optimization**: Leverages Next.js for efficient server-side rendering and dynamic data loading.
- **Accessibility and User Experience**: Focused on accessibility and straightforward user experience.

## CI/CD and Environment Strategy

- **Linting**: Ensuring code quality and consistency.
- **Automated Testing**: Incorporating Jest and Cypress for comprehensive testing.
- **Redis Integration**: Configuration management for Redis in different environments.
- **Staging and Production**: Separate environments for thorough testing and safe deployment.

## Installation and Usage

<details>
  <summary>Setup instructions</summary>

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Set up a local Redis server or configure a Redis cloud instance.
4. Configure `.env.local` with Redis connection details and other environment variables as per `.env.sample`.
5. Start the server with `npm run dev`.

For additional setup details or questions, feel free to [contact](mailto:support@climatescoop.app) or open an [issue](https://github.com/olicoding/ClimateScoop/issues).

</details>

## Technologies Used

- **Frontend**: React.js, Next.js, Sass.
- **Backend**: Node.js, Express.js for Auth0 authentication, Redis for caching.
- **Data Visualization**: Nivo for creating responsive charts.
- **Logging and Monitoring**: Winston for error logging.
- **Testing**: Jest for unit tests, Cypress for end-to-end tests.
- **CI/CD Pipeline**: Employing GitHub Actions for automated testing and deployment pippeline.

## Testing

We aim to expand our Jest and Cypress test suites for more comprehensive coverage.

## Contributing

Contributions are welcome! Please refer to our [Contributing Guidelines](/CONTRIBUTING.md) for details.

## License

ClimateScoop is open source under the [MIT License](/LICENSE).

---

ClimateScoop is committed to providing meaningful insights into climate change through innovative technology. Join us in exploring these insights and contribute to the global conversation on climate change.
