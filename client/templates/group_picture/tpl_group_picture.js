/**
 * Created by Rémi Prévost on 15/08/2015.
 */

Template.tpl_group_picture.helpers({

    /**
     * return the mini mongo containing all the members fields.
     * @returns members
     */
    member : function() {
        return Members.find({});
    }

});

Template.tpl_group_picture.events({

    /**
     * Called when the cursor is over the frame of a member.
     * Show this frame.
     * @param event
     */
    'mouseover .frame':function(event) {
        if (event.target.className != 'detail_card' && event.target.className != '')
            event.currentTarget.style.opacity = 1;
    },

    /**
     * Called when the cursor leave an active frame.
     * Hide this frame.
     * @param event
     */
    'mouseout .frame':function(event) {
        var tagName = event.toElement.tagName;

        if (tagName != 'P' && tagName != 'DIV' && tagName != 'A')
            event.currentTarget.style.opacity = 0;
    }

});
