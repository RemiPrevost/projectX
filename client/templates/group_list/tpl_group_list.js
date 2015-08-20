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
    },

    getEditModalId: function(id) {
        return '#edit-modal_'+id;
    },

    createEditModalId: function(id) {
        return 'edit-modal_'+id;
    },

    getDeleteModalId: function(id) {
        return '#delete-modal_'+id;
    },

    createDeleteModalId: function(id) {
        return 'delete-modal_'+id;
    }
});

Template.tpl_group_list.events({

    /**
     * Called when an edition of a member is validated by the user.
     * Takes back the user input and update the db
     * @param event
     */
    'click .btn-validate-edition': function(event) {
        var user_id = event.target.getAttribute('user-id'),
            modal = document.getElementById('edit-modal_'+user_id),
            nom= modal.getElementsByClassName('modal-name-input')[0].value,
            prenom=modal.getElementsByClassName('modal-surname-input')[0].value,
            mail = modal.getElementsByClassName('modal-mail-input')[0].value,
            tel = modal.getElementsByClassName('modal-tel-input')[0].value;

        Members.update(
            {'_id':user_id},
            {$set: {
                'nom':nom,
                'prenom':prenom,
                'mail':mail,
                'tel':tel}
            }
        );

        $('#edit-modal_'+user_id).modal('hide');
    },

    'click .btn-confirm-deletion': function(event) {
        var user_id = event.target.getAttribute('user-id'),
            modal = $('#delete-modal_'+user_id);

        modal.modal('hide');

        modal.on('hidden.bs.modal', function () {
            Members.remove({_id:user_id});
        })
    }

});