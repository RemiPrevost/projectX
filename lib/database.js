/**
 * Created by Rémi Prévost on 28/07/2015.
 */

Members = new Meteor.Collection('Members');

if (Meteor.isServer) {

    Meteor.publish('mini_Members', function() {
        return Members.find({});
    });

    Members.allow({
        remove : function(userId, doc) {
            return true;
        },
        update : function(userId, doc) {
            return true;
        }
    });

}
else if (Meteor.isClient) {
    Meteor.subscribe('mini_Members');
}