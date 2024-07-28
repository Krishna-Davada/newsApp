==>newsApp using class based components in react

newsApp is a React-based application that displays the latest news headlines. It leverages the News API to fetch and display news articles from various categories and countries. The app also features infinite scrolling for an enhanced user experience.

=>Features

        Fetches news articles from the News API.
        Displays news articles with title, description, author, published date, and source.
        Infinite scrolling for seamless news browsing.
        Loading bar to indicate progress while fetching data.
        Supports multiple categories like business, entertainment, general, health, science, sports, and technology.
        Customizable via environment variables.

=Prerequisites

        Create a .env file in the root of the project and add your News API key:
        .env
        Copy code
        VITE_NEWS_API=your_actual_api_key_here
        Start the development server:
        bash
        Copy code
        npm start
        # or
        yarn start
        The application should now be running on http://localhost:3000.
    Open the app in your browser to view the news headlines.

==>Usage
=>Navigation

        Home: Displays top general news headlines.
        Business: Displays top business news headlines.
        Entertainment: Displays top entertainment news headlines.
        General: Displays top general news headlines.
        Health: Displays top health news headlines.
        Science: Displays top science news headlines.
        Sports: Displays top sports news headlines.
        Technology: Displays top technology news headlines.

=>Infinite Scrolling
The application supports infinite scrolling, allowing users to load more articles as they scroll down the page.

==>Components

        -App
        The main component that sets up routing and displays the navigation bar and loading bar.

        -Navbar
        The navigation bar that allows users to switch between different news categories.

        -News
        The component that fetches and displays news articles based on the selected category. It uses infinite scrolling to load more articles as the user scrolls down.

        -NewsItem
        A component that displays individual news articles.

        -Spinner
        A component that displays a loading spinner while data is being fetched.
