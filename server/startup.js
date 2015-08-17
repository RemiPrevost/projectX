/**
 * Created by Rémi Prévost on 28/07/2015.
 */

Meteor.startup(function() {

    if (Members.find().count() === 0) {
        var data = [
            {
                nom : 'nom1',
                prenom : 'prenom1',
                mail : '@mail1',
                tel : 'tel1',
                position: {
                    x:8.12,
                    y:56.99
                },
                img: 'me1.png'
            },
            {
                nom : 'nom2',
                prenom : 'prenom2',
                mail : '@mail2',
                tel : 'tel2',
                position: {
                    x:7.52,
                    y:50.86
                },
                img: 'me2.png'
            },
            {
                nom : 'nom3',
                prenom : 'prenom3',
                mail : '@mail3',
                tel : 'tel3',
                position: {
                    x:54.9,
                    y:57.5
                },
                img: 'me3.png'
            },
            {
                nom : 'nom4',
                prenom : 'prenom4',
                mail : '@mail4',
                tel : 'tel4',
                position: {
                    x:41.78,
                    y:16.65
                },
                img: 'me4.png'
            },
            {
                nom : 'nom5',
                prenom : 'prenom5',
                mail : '@mail5',
                tel : 'tel5'
            },
        ];

        for (var i = 0; i < data.length; i++) {
            Members.insert(data[i]);
        }
    }

});
