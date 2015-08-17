/**
 * Created by Rémi Prévost on 28/07/2015.
 */

Template.tpl_group_list.helpers({

    /**
     * return the mini mongo containing all the members fields
     * @returns members
     */
    member : function() {
        return Members.find({});
    },

    /**
     * Filter the fields before display. If field empty,
     * returns 'inconnu', else returns the field itself
     * @param input
     * @returns text to display
     */
    renderText : function(input) {
        debugger;
        if (input.isEmpty())
            return 'inconnu';
        else
            return input;
    }
});