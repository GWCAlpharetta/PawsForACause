/**
 * HomepageStatsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    getStats: async function(req, res){
        var db = sails.getDatastore().manager;
        var docs = db.collection('homepageStats').find({});

        docs.forEach(element => {
            sails.log('doc: '+ element.description);
        });

       //items = doc.toAray();


    return res.json(items);

    }

};

