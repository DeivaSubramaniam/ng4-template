var functions = require('firebase-functions');
var request = require('request');
var cors = require('cors')({ origin: true });

const nodemailer = require('nodemailer');

// Function URL (sendEmail): https://us-central1-ng4-template.cloudfunctions.net/sendEmail
// Function URL (users): https://us-central1-ng4-template.cloudfunctions.net/users

exports.sendEmail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {

        const secret = '6Lf1rhgUAAAAALKDz46KvpHZZEl-i-blbCMbAerd';
        const recaptchaResponse = req.body['g-recaptcha-response'];
        const remoteIp = req.connection.remoteAddress;
        const verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + recaptchaResponse + "&remoteip=" + remoteIp;


        request(verificationUrl, function (error, response, body) {
            body = JSON.parse(body);
            // Success will be true or false depending upon captcha validation.
            if (body.success !== undefined && !body.success) {
                return res.json({ "responseCode": 1, "responseDesc": "Failed captcha verification" });
            }
            res.json({ "responseCode": 0, "responseDesc": "Sucess" });
        });
    });


    const to = req.body.to;
    const subject = req.body.subject;
    const message = req.body.message;
    console.log('to:' + to + ' - subject: ' + subject + ' - message: ' + message);

    console.log('sendEmail');
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'gtamanaha.io@gmail.com',
            pass: 'gtamanaha'
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'gtamanaha.io@gmail.com', // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: message // plain text body
        //html: '<b>Hello world ?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });

    res.send({
        success: true
    });
});
});


exports.users = functions.https.onRequest((req, res) => {
    console.log('USER!!!!');
    cors(req, res, () => {
        const users = [{
            "address": "669 Kathleen Court, Topanga, Utah, 9244",
            "email": "blairgay@dragbot.com",
            "first-name": "Blair",
            "gender": "male",
            "last-name": "Gay",
            "phone": "+1 (874) 539-3619",
            "picture": "http://placehold.it/32x32",
            "registered": "2016-01-11T07:29:15 +03:00"
        }, {
            "address": "836 Fuller Place, Ernstville, Wyoming, 5047",
            "email": "susannarich@dragbot.com",
            "first-name": "Susanna",
            "gender": "female",
            "last-name": "Rich",
            "phone": "+1 (961) 581-2228",
            "picture": "http://placehold.it/32x32",
            "registered": "2014-12-21T10:14:04 +03:00"
        }, {
            "address": "389 Gunnison Court, Lacomb, Nevada, 4410",
            "email": "sandovalsantana@dragbot.com",
            "first-name": "Sandoval",
            "gender": "male",
            "last-name": "Santana",
            "phone": "+1 (990) 551-3637",
            "picture": "http://placehold.it/32x32",
            "registered": "2016-02-16T10:29:48 +03:00"
        }, {
            "address": "968 Union Street, Sharon, New Hampshire, 8099",
            "email": "maistafford@dragbot.com",
            "first-name": "Mai",
            "gender": "female",
            "last-name": "Stafford",
            "phone": "+1 (984) 543-2627",
            "picture": "http://placehold.it/32x32",
            "registered": "2016-12-26T03:24:11 +03:00"
        }, {
            "address": "257 Jefferson Avenue, Cascades, Idaho, 1262",
            "email": "finchsalas@dragbot.com",
            "first-name": "Finch",
            "gender": "male",
            "last-name": "Salas",
            "phone": "+1 (888) 442-2387",
            "picture": "http://placehold.it/32x32",
            "registered": "2016-11-02T09:07:54 +03:00"
        }, {
            "address": "802 Homecrest Avenue, Stagecoach, Florida, 2726",
            "email": "velasquezhuber@dragbot.com",
            "first-name": "Velasquez",
            "gender": "male",
            "last-name": "Huber",
            "phone": "+1 (831) 548-2632",
            "picture": "http://placehold.it/32x32",
            "registered": "2016-02-13T02:19:56 +03:00"
        }, {
            "address": "625 Montgomery Street, Yonah, West Virginia, 8568",
            "email": "ellabartlett@dragbot.com",
            "first-name": "Ella",
            "gender": "female",
            "last-name": "Bartlett",
            "phone": "+1 (848) 402-3221",
            "picture": "http://placehold.it/32x32",
            "registered": "2014-08-04T11:26:20 +03:00"
        }, {
            "address": "924 Canal Avenue, Como, Virginia, 512",
            "email": "ewingmunoz@dragbot.com",
            "first-name": "Ewing",
            "gender": "male",
            "last-name": "Munoz",
            "phone": "+1 (863) 523-2383",
            "picture": "http://placehold.it/32x32",
            "registered": "2015-12-30T07:02:58 +03:00"
        }, {
            "address": "161 Kent Street, Datil, Kansas, 5517",
            "email": "shepardwade@dragbot.com",
            "first-name": "Shepard",
            "gender": "male",
            "last-name": "Wade",
            "phone": "+1 (917) 536-2058",
            "picture": "http://placehold.it/32x32",
            "registered": "2017-01-21T07:02:01 +03:00"
        }, {
            "address": "733 Homecrest Court, Winesburg, Montana, 9152",
            "email": "fraziermendoza@dragbot.com",
            "first-name": "Frazier",
            "gender": "male",
            "last-name": "Mendoza",
            "phone": "+1 (864) 532-3452",
            "picture": "http://placehold.it/32x32",
            "registered": "2014-05-03T08:24:33 +03:00"
        }, {
            "address": "789 Dank Court, Saddlebrooke, Iowa, 2310",
            "email": "benjaminaguilar@dragbot.com",
            "first-name": "Benjamin",
            "gender": "male",
            "last-name": "Aguilar",
            "phone": "+1 (942) 493-3902",
            "picture": "http://placehold.it/32x32",
            "registered": "2016-04-16T01:58:06 +03:00"
        }, {
            "address": "614 Boerum Street, Titanic, South Dakota, 6764",
            "email": "franklinbarrett@dragbot.com",
            "first-name": "Franklin",
            "gender": "male",
            "last-name": "Barrett",
            "phone": "+1 (801) 590-3516",
            "picture": "http://placehold.it/32x32",
            "registered": "2015-11-17T05:00:52 +03:00"
        }, {
            "address": "888 Harbor Lane, Kieler, South Carolina, 296",
            "email": "keishamaldonado@dragbot.com",
            "first-name": "Keisha",
            "gender": "female",
            "last-name": "Maldonado",
            "phone": "+1 (885) 449-3857",
            "picture": "http://placehold.it/32x32",
            "registered": "2014-10-15T11:46:46 +03:00"
        }, {
            "address": "297 Hoyt Street, Naomi, Texas, 5364",
            "email": "deleonandrews@dragbot.com",
            "first-name": "Deleon",
            "gender": "male",
            "last-name": "Andrews",
            "phone": "+1 (865) 587-2730",
            "picture": "http://placehold.it/32x32",
            "registered": "2015-10-04T03:27:40 +03:00"
        }, {
            "address": "436 Hawthorne Street, Roland, Connecticut, 6846",
            "email": "reynoldsreeves@dragbot.com",
            "first-name": "Reynolds",
            "gender": "male",
            "last-name": "Reeves",
            "phone": "+1 (918) 424-2124",
            "picture": "http://placehold.it/32x32",
            "registered": "2015-02-17T02:46:23 +03:00"
        }, {
            "address": "358 Bokee Court, Cobbtown, Marshall Islands, 4262",
            "email": "joanndelaney@dragbot.com",
            "first-name": "Joann",
            "gender": "female",
            "last-name": "Delaney",
            "phone": "+1 (932) 598-2795",
            "picture": "http://placehold.it/32x32",
            "registered": "2015-01-30T02:36:13 +03:00"
        }, {
            "address": "622 Kiely Place, Fedora, Nebraska, 6588",
            "email": "kinneynewman@dragbot.com",
            "first-name": "Kinney",
            "gender": "male",
            "last-name": "Newman",
            "phone": "+1 (844) 468-2042",
            "picture": "http://placehold.it/32x32",
            "registered": "2015-11-26T05:52:33 +03:00"
        }, {
            "address": "170 Florence Avenue, Hendersonville, Delaware, 3970",
            "email": "rosamerrill@dragbot.com",
            "first-name": "Rosa",
            "gender": "male",
            "last-name": "Merrill",
            "phone": "+1 (997) 562-2972",
            "picture": "http://placehold.it/32x32",
            "registered": "2016-05-31T10:29:02 +03:00"
        }, {
            "address": "243 Goodwin Place, Callaghan, Missouri, 2009",
            "email": "marinabowen@dragbot.com",
            "first-name": "Marina",
            "gender": "female",
            "last-name": "Bowen",
            "phone": "+1 (968) 545-3319",
            "picture": "http://placehold.it/32x32",
            "registered": "2014-06-13T09:26:05 +03:00"
        }, {
            "address": "383 Thatford Avenue, Grapeview, New York, 157",
            "email": "jacquelineserrano@dragbot.com",
            "first-name": "Jacqueline",
            "gender": "female",
            "last-name": "Serrano",
            "phone": "+1 (800) 553-3515",
            "picture": "http://placehold.it/32x32",
            "registered": "2014-05-20T07:02:31 +03:00"
        }, {
            "address": "415 Banner Avenue, Layhill, Alaska, 7736",
            "email": "helenmercer@dragbot.com",
            "first-name": "Helen",
            "gender": "female",
            "last-name": "Mercer",
            "phone": "+1 (927) 450-2132",
            "picture": "http://placehold.it/32x32",
            "registered": "2016-01-02T09:38:58 +03:00"
        }];

        res.status(200).send(users);
    });
});