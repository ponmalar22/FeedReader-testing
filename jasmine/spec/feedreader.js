/* feedreader.js*/
 
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('url is defined', function() {
         for(var allFeed of allFeeds){
            expect(allFeed.url).toBeDefined();
            expect(allFeed.url.length).not.toBe(0);

         }
     });


        /* loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name is defined', function() {
            for(allFeed of allFeeds){
                expect(allFeed.name).toBeDefined();
                expect(allFeed.name.length).not.toBe(0);
            }
         });
    });


    /* "The menu" */

        /*  ensures the menu element is
         * hidden by default. 
         */
         describe('The menu', function() {
           

            it('default hidden menu', function() {
                let hidden = document.body.classList.contains('menu-hidden'); 
                expect(hidden).toBe(true);
            });

         /*  ensures the menu changes
          * visibility when the menu icon is clicked.
          */
           it('toggle when menu icon is clicked', function() {
                let menuIcon = document.querySelector('a.menu-icon-link');
                menuIcon.click();
                expect(document.body.classList.contains('menu-hidden')).toBe(false);
                menuIcon.click();
                expect(document.body.classList.contains('menu-hidden')).toBe(true);
           });

           });

    /* "Initial Entries" */

        /*  ensures when the loadFeed function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

         describe('Initial Entries', function() {
            beforeEach(function(done){
               loadFeed(1,done)   
           });

            it('has entry in feed container', function() {
                
                let feedEntry = document.querySelectorAll('a.entry-link');
                expect(feedEntry.length).toBeGreaterThan(0);
            });
          
         });

    /* "New Feed Selection" */

        /* ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * 
         */
         describe('New Feed Selection', function() {
                
                let feedOne;
                let feedTwo;

                beforeEach(function(done) {
                    loadFeed(2,function() {
                        feedOne = document.querySelector('div.feed').innerHTML;

                    loadFeed(3,function() {
                        feedTwo = document.querySelector('div.feed').innerHTML;
                        done();
                    });
                    });
                });

                it('new feed is loaded', function(){
                       expect(feedOne).not.toBe(feedTwo);
                });

         });



}());
