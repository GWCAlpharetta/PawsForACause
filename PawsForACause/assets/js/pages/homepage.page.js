parasails.registerPage('homepage', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    heroHeightSet: false,
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
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    // Attach any initial data from the server.
    _.extend(this, SAILS_LOCALS);
  },
  mounted: async function(){
    this._setHeroHeight(); 
    axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (
          this.items = [
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
            
          ]
        ))
        .catch(error => console.log(error))
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    clickHeroButton: async function() {
      // Scroll to the 'get started' section:
      $('html, body').animate({
        scrollTop: this.$find('[role="scroll-destination"]').offset().top
      }, 500);
    },

    // Private methods not tied to a particular DOM event are prefixed with _
    _setHeroHeight: function() {
      var $hero = this.$find('[full-page-hero]');
      var headerHeight = $('#page-header').outerHeight();
      var heightToSet = $(window).height();
      heightToSet = Math.max(heightToSet, 500);//« ensure min height of 500px - header height
      heightToSet = Math.min(heightToSet, 1000);//« ensure max height of 1000px - header height
      $hero.css('min-height', heightToSet - headerHeight+'px');
      this.heroHeightSet = true;
    },

  }
});
