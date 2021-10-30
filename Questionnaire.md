# Chainalysis Questionnaire

1. Are there any sub-optimal choices( or short cuts taken due to limited time ) in your implementation?
   * One of the suboptimal choices in my implementation is that in order to see the real time data you have to manually update it. This was because attempts to automate resulted in "bursts" (for lack of a better term) of requests going out to my back-end, instead of retrieving every 10 minutes as I'd hoped.
   * I had to be speedy with my front-end design, and I didn't have a chance to make it look nicer or to modify it for mobile. As of now this is essentially a desktop only app.

2. Is any part of it over-designed?
    * I think that the backend was overdesigned personally. Since I ended up working with more APIs than I expected, it had to be overdesigned for that purpose. The very last API call in fact handles all the previous ones.

3. If you have to scale your solution to 100 users/second traffic, what changes would you make, if any?
    * At this time the application doesn't keep track of the session, but if I were to require authentication to use this application, I would need to include that.
    * I'd switch over to TypeScript, since from what I understand it's much more scalable than JS on its own.
    * I'd host my back-end on a reliable service which has hardware scaling built to adapt to the traffic my app demands.

4. What are some other enhancements you would have made, if you had more time to do this implementation?
   * I would have implemented an automatic refresh for the data so that every X seconds the data would be updated automatically.
   * I would have implemented some charts that show the buy/sell price history
   * I would have made the front-end look better
   * I would have used more APIs from more Cryptocurrency exchanges
 