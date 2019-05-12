/**
 * HomepageStatsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    getStats: async function(req, res){
        /*var items = [
            { cards: [{cardTitle: "card11",cardMessage: "card message 11"},
                      {cardTitle: "card21",cardMessage: "card message 22"},
                      {cardTitle: "card31",cardMessage: "card message 33"},
                      {cardTitle: "card41",cardMessage: "card message 44"},
                      ]
            },
            { cards: [{cardTitle: "cardA",cardMessage: "card message A"},
                      {cardTitle: "cardB",cardMessage: "card message B"},
                      {cardTitle: "cardC",cardMessage: "card message C"},
                      {cardTitle: "cardD",cardMessage: "card message D"},
                      ]
            },
            
          ];
        return res.json(items);
        */
        
        try{
            sails.log("Calling find on model");
            var docs = await homepage_stats.find({});

            var items = [];
            var cards = [];
            var i = 0;
            sails.log("Looping thru documents");
            
            docs.forEach(element => {
                var card = {};
                card.cardTitle = element.name;
                card.cardMessage = element.description;
                
                cards.push(card);
                sails.log("After push cards: " + cards.length);
                i++;
                if (i > 3){
                    i = 0;
                    items.push({cards: cards.map(a => ({...a}))});
                    cards.length = 0;
                }
            });
        } catch(err){
            sails.log("error finding: " + err)
        }
        
        sails.log("cards: " + cards.length);
        sails.log("items: " + items.length);
        sails.log("items[0].cards: " + items[0].cards.length);
        //var stats = res.json(items);
        //sails.log('stats json: ' + util.inspect(stats));
        return res.json(items);
        
    }

};

