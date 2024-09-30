<?php
/*
Plugin Name: Movie Popup Banner
Description: Displays a pop-up banner with movie information loaded from The Movie Database (TMDb) API.
Version: 1.0
Author: Branko Borilovic
*/

// Add menu item for plugin settings
add_action('admin_menu', 'mpb_create_menu');
function mpb_create_menu() {
    add_menu_page('Movie Popup Banner Settings', 'Movie Popup', 'administrator', __FILE__, 'mpb_settings_page');
    add_action('admin_init', 'mpb_register_settings');
}

// Register settings
function mpb_register_settings() {
    register_setting('mpb-settings-group', 'mpb_movie_title');
    register_setting('mpb-settings-group', 'mpb_popup_delay');
    register_setting('mpb-settings-group', 'mpb_lightbox_color');
    register_setting('mpb-settings-group', 'mpb_tmdb_api_key');
}

// Create settings page
function mpb_settings_page() {
?>
    <div class="wrap">
        <h1>Movie Popup Banner Settings</h1>
        <form method="post" action="options.php">
            <?php settings_fields('mpb-settings-group'); ?>
            <?php do_settings_sections('mpb-settings-group'); ?>
            <table class="form-table">
                <tr valign="top">
                    <th scope="row">Movie Title</th>
                    <td><input type="text" name="mpb_movie_title" value="<?php echo esc_attr(get_option('mpb_movie_title')); ?>" /></td>
                </tr>
                <tr valign="top">
                    <th scope="row">Popup Delay (in seconds)</th>
                    <td><input type="number" name="mpb_popup_delay" min="1" max="10" step="1" value="<?php echo esc_attr(get_option('mpb_popup_delay', 5)); ?>" /></td>
                </tr>
                <tr valign="top">
                    <th scope="row">Lightbox Background Color</th>
                    <td>
                        <label>
                            <input type="radio" name="mpb_lightbox_color" value="black" <?php checked(get_option('mpb_lightbox_color'), 'black'); ?> />
                            Black
                        </label><br />
                        <label>
                            <input type="radio" name="mpb_lightbox_color" value="white" <?php checked(get_option('mpb_lightbox_color'), 'white'); ?> />
                            White
                        </label>
                    </td>
                </tr>
                <tr valign="top">
                    <th scope="row">TMDb API Key</th>
                    <td><input type="text" name="mpb_tmdb_api_key" value="<?php echo esc_attr(get_option('mpb_tmdb_api_key')); ?>" /></td>
                </tr>
            </table>
            <?php submit_button(); ?>
        </form>
    </div>
<?php
}

// Enqueue popup scripts and styles
add_action('wp_enqueue_scripts', 'mpb_enqueue_scripts');
function mpb_enqueue_scripts() {
    wp_enqueue_style('mpb-style', plugin_dir_url(__FILE__) . 'popup.css');
    wp_enqueue_script('mpb-script', plugin_dir_url(__FILE__) . 'popup.js', array('jquery'), null, true);

    // Pass parameters to JavaScript
    wp_localize_script('mpb-script', 'mpb_data', array(
        'movie_title' => get_option('mpb_movie_title'),
        'popup_delay' => get_option('mpb_popup_delay', 5) * 1000,
        'lightbox_color' => get_option('mpb_lightbox_color', 'black'),
        'api_key'        => get_option('mpb_tmdb_api_key'),
    ));
}

// Add the popup HTML to the page
add_action('wp_footer', 'mpb_display_popup');
function mpb_display_popup() {
    ?>
    <div id="mpb-popup" class="mpb-hidden">
        <div class="mpb-popup-content">
        <button class="mpb-close-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
            <h2 id="mpb-movie-title"></h2>
            <div class="mpb-movie-info">
                <div id="mpb-poster-container" class="mpb-poster-container">
                    <img id="mpb-movie-poster" src="" alt="Movie Poster" />
                </div>
                <div class="mpb-movie-details">
                    <p id="mpb-movie-description"></p>
                </div>
            </div>
        </div>
    </div>
    <div id="mpb-overlay" class="mpb-hidden"></div>
    <?php
}
