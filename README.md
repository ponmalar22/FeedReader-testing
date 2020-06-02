# Project details

In this project we load some feeds from Google API's feed reader asynchronously. 
We have a allFeeds array which has the name and the URL to all of the feeds we'd like available.
You can run the application by running index.html file in youy browser.

#Unit test 

there are four suits used for testing.
 
 1. RSS Feeds - checks if all the feeds are defined ,has an URL and a name.

 2. The menu - ensures the menu element is hidden by default and also checks the menu changes visibility when the menu icon is clicked.

 3. Initial Entries - ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

 4. New Feed Selection - ensures when a new feed is loaded by the loadFeed function that the content actually changes.