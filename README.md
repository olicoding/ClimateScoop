# ClimateScoop: Climate Data Visualization

Explore meaningful insights into climate change through innovative data visualization.

[View Live](https://climatescoop.app/)

## Table of Contents

- [Overview](#overview)
- [Architecture and Data Flow](#architecture-and-data-flow)
- [Development Practices](#development-practices)
- [Technologies and Tools](#technologies-and-tools)
- [Getting Started](#getting-started)
- [Contribution](#contribution)
- [License](#license)

## Overview

ClimateScoop merges rigorous data analysis with interactive visualization to present climate data in an engaging and informative manner.

## Architecture and Data Flow

ClimateScoop employs a structured approach to data handling, from fetching and validation to caching and visualization, optimized for performance and user experience. The architecture supports seamless data processing and integration, presenting information through interactive, dynamic charts and graphs.

**Data Processing and Flow:**

```
+-----------+     +------------+     +--------------+     +---------------+
|           |     |            |     |              |     |               |
| API Fetch +---> + Validation +---> +   Pre/Post   +---> +     Data      |
|           |     | (with Zod) |     |  Processing  |     | Visualization |
|           |     |            |     |              |     |               |
+-----------+     +------------+     +--------------+     +---------------+
                        |                                         |
                        v                                         v
                  +-----+------+                         +--------+-------+
                  |            |                         |                |
                  | Caching in +------------------------>+  Display on UI |
                  |   Redis    |                         |    (Charts)    |
                  |            |                         |                |
                  +------------+                         +----------------+
```

## Development Practices

ClimateScoop is developed with best practices in web development at its core, including:

- **Linting and Testing:** Utilizes ESLint for code quality and consistency, alongside Jest and Cypress for comprehensive testing.
- **CI/CD Pipeline:** Implements a multi-stage CI/CD pipeline with GitHub Actions for automated testing and deployment across development, staging, and production environments.
- **PWA and Offline Support:** Leverages next-pwa and custom service workers for offline functionality, enhancing accessibility and user engagement.

## Technologies and Tools

Built with a modern tech stack, ClimateScoop integrates:

- **Frontend:** React.js and Next.js for dynamic, server-side rendered interfaces.
- **Backend & Authentication:** Node.js, Express.js, and Auth0 for robust backend services and secure user authentication.
- **Data Visualization:** `@nivo/line` for creating interactive and responsive charts.
- **Caching & Offline:** Redis for efficient data caching and a custom service worker for PWA capabilities. (Redis has been removed since the new policy of the provider)
- **Logging:** Winston for detailed error logging and system monitoring.

## Getting Started

To set up ClimateScoop locally:

<details>
  <summary>Setup instructions</summary>

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Configure `.env.local` for Redis and other environment specifics.
4. Start the development server with `npm run dev`.

</details>

For more details or assistance, check the [issues](https://github.com/olicoding/ClimateScoop/issues) section.

## Contribution

Your contributions to ClimateScoop can help enhance the platform and spread awareness on climate change. Whether it's through code, documentation, or feedback, your input is valued. Check our [Contributing Guidelines](/CONTRIBUTING.md) for more information.

## License

Open source under the [MIT License](/LICENSE).
