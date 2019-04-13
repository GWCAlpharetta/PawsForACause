/**
 * HomepageStatsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    getStats: function(req, res){
        var items = [
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

    }

};

