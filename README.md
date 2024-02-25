# etherspawn
[![build](https://github.com/guilyx/etherspawn/actions/workflows/build.yml/badge.svg)](https://github.com/guilyx/etherspawn/actions/workflows/build.yml)
![vercel](https://vercelbadge.vercel.app/api/guilyx/etherspawn)
[![codecov](https://codecov.io/gh/guilyx/etherspawn/branch/master/graph/badge.svg)](https://codecov.io/gh/guilyx/etherspawn)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

A simple web app to spawn Ethereum Wallets.

## Features

- Spawn an unlimited amount of Ethereum Wallets. Download to CSV. No data persistency.
- The same CSV will be usable in future projects... Let's build our airdrop farm many wallets at a time.

## Getting Started

To get `etherspawn` up and running locally on your machine, follow these steps:

### Running the etherspawn Docker Container

The etherspawn Docker container allows you to run the application in an isolated environment.
Follow these steps to build and run the Docker container:

### Prerequisites

Before you begin, make sure you have the following software installed on your system:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)

### Build the Docker Image

1. Clone the repository:

   ```sh
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```sh
   cd etherspawn
   ```

3. Run the following command to build the Docker image using the provided Dockerfile:

   ```bash
   docker-compose -f docker/docker-compose.yml build
   ```

   This command will use the `Dockerfile` located in the `docker` directory to build the Docker image named `etherspawn`.

### Run the Docker Container

1. After successfully building the Docker image, you can run the Docker container using the following command:

   ```bash
   docker-compose -f docker/docker-compose.yml up
   ```

2. Once the container is up and running, you can access the etherspawn application by opening a web browser and navigating to `http://localhost:5173`.

### Stopping and Removing the Container

When you're done using the etherspawn application, you can stop and remove the Docker container:

1. Run the following command to stop and remove the Docker container:

   ```bash
   docker-compose -f docker/docker-compose.yml down
   ```

### Additional Notes

- If you want to make changes to the application code, you can do so in your local project directory, and the changes will be reflected in the running Docker container.
- The Docker container exposes the application on port 8080. You can modify the `docker-compose.yml` file to change the port mapping if needed.

---

With these instructions, you should be able to build and run the etherspawn Docker container on your system. If you encounter any issues, refer to the Docker documentation or seek assistance from your development team.

## Contributing

I come from a different background, I expect to have made a lot of design/architecture mistakes. Never used TS before, with that in mind, **contributions** to `etherspawn` are not only welcome, they're heavily encouraged! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push to your forked repository.
4. Create a pull request to the main repository.

## License

This project is licensed under the [GPLv3 License](LICENSE).

```
1. Anyone can copy, modify and distribute this software.
2. You have to include the license and copyright notice with each and every distribution.
3. You can use this software privately.
4. You can use this software for commercial purposes.
5. If you dare build your business solely from this code, you risk open-sourcing the whole code base.
6. If you modify it, you have to indicate changes made to the code.
7. Any modifications of this code base MUST be distributed with the same license, GPLv3.
8. This software is provided without warranty.
9. The software author or license can not be held liable for any damages inflicted by the software.
```
