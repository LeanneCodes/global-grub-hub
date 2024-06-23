# Global Grub Hub

Global Grub Hub is a recipe collection application that allows users to explore popular cuisines from around the world in one spot. Discover diverse international dishes, find new recipes, and experience global flavors all in one place.

## Application Appearance
![Web Application](/public/globalgrubhub.png)

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- Browse recipes by cuisine
- View detailed recipe information, including ingredients, instructions, and nutrition facts
- Favorite recipes to save them for later
- Responsive design for mobile and desktop

## Upcoming Features

- Users will be able to search for recipes within the Tasty API
- Users can share recipes with friends and family via social media or plain links

## Technologies

- [Next.js](https://nextjs.org/) - React framework for server-side rendering
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vercel](https://vercel.com/) - Hosting platform
- [Tasty API](https://rapidapi.com/apidojo/api/tasty) - API for fetching recipes

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/global-grub-hub.git
    cd global-grub-hub
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Create a `.env.local` file in the root directory and add your Tasty API key:

    ```env
    NEXT_PUBLIC_TASTY_API_KEY=your_api_key_here
    ```

2. Run the development server:

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

The project uses environment variables to manage sensitive information. Make sure to set the following variables in your `.env.local` file:

- `NEXT_PUBLIC_TASTY_API_KEY`: Your Tasty API key.

## Deployment

The project is configured to be deployed on [Vercel](https://vercel.com/). Follow these steps to deploy:

1. Install the Vercel CLI globally:

    ```bash
    npm install -g vercel
    ```

2. Log in to your Vercel account:

    ```bash
    vercel login
    ```

3. Initialize the project with Vercel:

    ```bash
    vercel
    ```

    Follow the prompts to link your project to a Vercel project.

4. Set up environment variables in the Vercel dashboard:

    - Go to the [Vercel Dashboard](https://vercel.com/dashboard).
    - Select your project.
    - Navigate to the "Settings" tab.
    - Under "Environment Variables", add `NEXT_PUBLIC_TASTY_API_KEY` with your API key value.

5. Deploy the project:

    ```bash
    vercel --prod
    ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
