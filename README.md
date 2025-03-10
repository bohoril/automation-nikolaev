# automation-nikolaev

## Description
UI test framework for practice-automation.

## Setup Process

### Prerequisites
Ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation
1. Clone the repository

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Install Playwright browsers:
    ```sh
    npx playwright install
    ```

## Usage

### Build the Project
1. To build the project, run:
    ```sh
    npm run build
    ```

### Run the Tests
1. To execute the tests, use:
    ```sh
    npx playwright test
    ```

2. To open the test report in the browser, run:
    ```sh
    npx playwright show-report
    ```

## Project Structure
- `pages/`: Contains the Page Object Model (POM) classes.
- `tests/`: Contains the test scripts.
- `utils/`: Contains utilities.