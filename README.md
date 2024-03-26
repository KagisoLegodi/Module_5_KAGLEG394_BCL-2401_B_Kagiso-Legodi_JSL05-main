# Guardian Playlists

This project generates playlists for each Guardian based on their preferred music genre.

## Songs

An array of song objects is provided in the `songs` variable. Each song object contains the `title`, `artist`, and `genre` properties. At least 5 songs are included, but you can feel free to add more songs to the array.

## Guardians

The `guardians` object contains the preferred music genre for each Guardian. Initially, preferences are set for Star-Lord and Gamora. You can add preferences for Drax, Rocket, Groot, or any additional Guardians.

## Generate Playlists

The `generatePlaylist` function creates playlists for each Guardian based on their preferred genre. It dynamically generates HTML elements to display the playlists in the browser.

## How to Use

To use this project:

1. Ensure that the `songs` array and `guardians` object are populated with appropriate data.
2. Call the `generatePlaylist` function with the `guardians` and `songs` parameters.
3. The playlists for each Guardian will be displayed on the web page.
