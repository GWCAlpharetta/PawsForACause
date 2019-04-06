//const axios = require('axios');

/*var stats = new Vue({
    el: '#stats',
    data: {
      items: [
        { cards: [{cardTitle: "card1",cardMessage: "card message 1"},
                  {cardTitle: "card2",cardMessage: "card message 2"},
                  {cardTitle: "card3",cardMessage: "card message 3"},
                  {cardTitle: "card4",cardMessage: "card message 4"},
                  ]
        },
        { cards: [{cardTitle: "carda",cardMessage: "card message a"},
                  {cardTitle: "cardb",cardMessage: "card message b"},
                  {cardTitle: "cardc",cardMessage: "card message c"},
                  {cardTitle: "cardd",cardMessage: "card message d"},
                  ]
        },
        
      ]
    }
  });
*/
  new Vue({
    el: '#stats',
    data () {
      return {
        items: null
      }
    },
    mounted () {
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (
          this.items = [
            { cards: [{cardTitle: "card1",cardMessage: "card message 11"},
                      {cardTitle: "card2",cardMessage: "card message 22"},
                      {cardTitle: "card3",cardMessage: "card message 33"},
                      {cardTitle: "card4",cardMessage: "card message 44"},
                      ]
            },
            { cards: [{cardTitle: "carda",cardMessage: "card message A"},
                      {cardTitle: "cardb",cardMessage: "card message B"},
                      {cardTitle: "cardc",cardMessage: "card message C"},
                      {cardTitle: "cardd",cardMessage: "card message D"},
                      ]
            },
            
          ]
        ))
        .catch(error => console.log(error))
    }
  });