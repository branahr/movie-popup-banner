# Movie Popup Banner Plugin

A WordPress plugin that displays a popup banner featuring movie details fetched from The Movie Database (TMDb). The plugin allows customization options for the movie title, popup delay, and lightbox background color.

## Features

- Display a customizable movie popup banner.
- Fetch movie details from TMDb API.
- Configurable movie title, popup delay and lightbox background color.
- User-friendly interface in the WordPress admin panel.

## Requirements

    - WordPress 5.0 or higher
    - PHP 7.0 or higher
    - Access to The Movie Database API (TMDb)

## Installation

You can install the plugin in two different ways: **Direct Upload via wp-admin** or **Manual Upload**.

### Method 1: Install via WordPress Admin (Upload `.zip` file)

1. **Download the Plugin as a ZIP File**:
   - Click on the **Code** button at the top of this repository.
   - Select **Download ZIP** to download the plugin files to your local computer.

2. **Log into WordPress Admin**:
   - Go to your WordPress dashboard (`yourdomain.com/wp-admin`).

3. **Go to Plugins > Add New**:
   - In the sidebar, navigate to **Plugins** > **Add New**.

4. **Upload the Plugin**:
   - At the top of the page, click the **Upload Plugin** button.
   - Click the **Choose File** button and select the ZIP file you downloaded (`movie-popup-banner.zip`).
   - Click **Install Now**.

5. **Activate the Plugin**:
   - Once the installation is complete, click the **Activate Plugin** button.

### Method 2: Manual Installation via FTP

1. **Download the Plugin**: 
   - Download the plugin files as a ZIP file.

2. **Upload the Plugin**:
   - Navigate to your WordPress installation directory.
   - Extract the ZIP file and upload the plugin folder (`movie-popup-banner`) to the `/wp-content/plugins/` directory using an FTP client.

3. **Activate the Plugin**:
   - Log in to your WordPress admin panel.
   - Go to **Plugins** > **Installed Plugins**.
   - Find the **Movie Popup Banner** plugin and click **Activate**.

## Configuration

After activating the plugin, you need to configure it:

1. **Access Plugin Settings:**

    - In the WordPress admin panel, click on "Movie Popup" menu item in a sidebar.

2. **Set the Following Options:**

    - Movie Title: Enter the title of the movie you want to display.
    - Popup Delay: Specify the delay in seconds before the popup appears (default is 5 seconds).
    - Lightbox Background Color: Choose between Black or White for the lightbox background.
    - TMDb API Key: Enter your TMDb API Key.

3. **Save Changes:**

    - Click the Save Changes button to apply your settings.

## TMDb API Key Configuration

To fetch movie data from The Movie Database (TMDb), you need an API key. You can easily set this within the plugin settings.

1. **Get Your API Key:**

    - Visit the [TMDb website](https://www.themoviedb.org/).
    - Sign up for an account if you don't have one.
    - Go to the API section and generate your API Key.

2. **Enter the API Key:**

    - Navigate to Settings > Movie Popup Banner in your WordPress admin panel.
    - Enter the generated API Key in the TMDb API Key field.

3. **Save the settings.**

Once your API key is saved, the plugin will use it to fetch movie information based on the title you entered.

## Usage

Once the plugin is configured:

    - The movie popup banner will automatically display on the frontend of your WordPress site after the specified delay.   
    - The popup will contain the movie title, poster, and description fetched from TMDb.
    - If the movie cannot be found or if the API key is missing, an appropriate message will be displayed.
    - If Movie title is empty, default movie will be retrieved from the database ("Casino").
    - The popup can be closed by clicking the close button or by clicking outside the popup area.

## Customization

You can further customize the plugin by modifying the following files:

    - popup.js: The JavaScript file that controls the popup behavior and API calls.
    - popup.css: The stylesheet for the popup's design and layout.
    - movie-popup-banner.php: The main plugin file where settings and options are defined.

## Troubleshooting

- **Popup Does Not Show:** Ensure that the movie title is correctly set and the TMDb API key is valid.
- **Movie Not Found Message:** Verify the movie title entered is correct and exists in the TMDb database.
- **CSS Issues:** Check for conflicts with your theme's styles. You can customize the plugin's CSS as needed.

## Contributing

Contributions are welcome! If you have suggestions for improvements or find bugs, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.