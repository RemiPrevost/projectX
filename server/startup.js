/**
 * Created by Rémi Prévost on 28/07/2015.
 */

Meteor.startup(function() {

    if (Members.find().count() === 0) {
        var data = [
            {
                nom : 'Toto',
                prenom : 'truc',
                mail : '@mr_robot.com',
                tel : 'tel1'
            },
            {
                nom : 'Pascal',
                prenom : 'Juju',
                mail : '@sweet.fr',
                tel : 'tel2'
            },
            {
                nom : 'Hello',
                prenom : 'Tota',
                mail : '@mail.co.uk',
                tel : 'tel3'
            },
            {
                nom : 'nom',
                prenom : 'prenom',
                mail : '@truc',
                tel : 'tel4'
            },
            {
                nom : 'face',
                prenom : 'twin',
                mail : '@where',
                tel : 'tel5'
            },
            {
                nom : 'Toto',
                prenom : 'truc',
                mail : '@mr_robot.com',
                tel : 'tel1'
            },
            {
                nom : 'Pascal',
                prenom : 'Juju',
                mail : '@sweet.fr',
                tel : 'tel2'
            },
            {
                nom : 'Hello',
                prenom : 'Tota',
                mail : '@mail.co.uk',
                tel : 'tel3'
            },
            {
                nom : 'nom',
                prenom : 'prenom',
                mail : '@truc',
                tel : 'tel4'
            },
            {
                nom : 'face',
                prenom : 'twin',
                mail : '@where',
                tel : 'tel5'
            },
            {
                nom : 'Toto',
                prenom : 'truc',
                mail : '@mr_robot.com',
                tel : 'tel1',
                position: {
                    x:8.12,
                    y:56.99
                },
                img: 'me1.png'
            },
            {
                nom : 'Pascal',
                prenom : 'Juju',
                mail : '@sweet.fr',
                tel : 'tel2',
                position: {
                    x:7.52,
                    y:50.86
                },
                img: 'me2.png'
            },
            {
                nom : 'Hello',
                prenom : 'Tota',
                mail : '@mail.co.uk',
                tel : 'tel3',
                position: {
                    x:54.9,
                    y:57.5
                },
                img: 'me3.png'
            },
            {
                nom : 'nom',
                prenom : 'prenom',
                mail : '@truc',
                tel : 'tel4',
                position: {
                    x:41.78,
                    y:16.65
                },
                img: 'me4.png'
            },
            {
                nom : 'face',
                prenom : 'twin',
                mail : '@where',
                tel : 'tel5'
            }
        ];

        for (var i = 0; i < data.length; i++) {
            Members.insert(data[i]);
        }
    }

});
