require('dotenv').config();

const {BITLY_API_KEY, AIRTABLE_API_KEY, AIRTABLE_BASE_ID, EVENTBRITE_TOKEN, MAILGUN_USER, MAILGUN_PASS} = process.env;

const Airtable = require('airtable-node');
const { google } = require('googleapis');
const moment = require('moment')


const axios = require('axios')
const { BitlyClient } = require('bitly');
const SCOPES = ['https://www.googleapis.com/auth/calendar'];
const mailer = require('nodemailer-promise')


const airtable = new Airtable({ apiKey: AIRTABLE_API_KEY })
    .base(AIRTABLE_BASE_ID)
    .table('Event List')

exports.handler = async (event, context, callback) => {
    sendEmail("cam.steeleis@gmail.com, utdmakerspace@gmail.com", "test", {eventTitle: "Test Event 1", eventDesc: "Come to this test event. Come to this test event. Come to this test event.Come to this test event. Come to this test event. Come to this test event.", eventStart: new Date().toUTCString(), eventEnd: new Date().toUTCString(), eventLocation: "UTDesign Makerspace - SPN 2.220", eventURL: "https://google.com"} )

};

function main() {
    return airtable.list({
        view: "Queued"
    }).then(resp => {
        resp.records.forEach(event => {
            // Here are the events
            console.log(JSON.stringify(event, null, 2))
            //Adding Event To Eventbrite
            createEventbriteEvent({ title: event.fields["Event"], description: event.fields["Description"], start: event.fields["Start Time"], end: event.fields["End Time"], capacity: 50 }, callback).then(({ url, eventId }) => {
                //Generate Bitly
                generateBitly(url, callback).then(shortLink => {
                    // If event was created succesfully
                    makeTickets(eventId, 50, callback).then(() => {
                        
                        //send ticket
                        callback(null, {
                            statusCode: 400,
                            body: "Made Tickets"
                        })
                    })
                })

            })

        });

    })
}


function createEventbriteEvent({ title, description, start, end, capacity }, callback) {
    //console.log("\n\n\n\n", new Date(start).toISOString(), new Date(end).toISOString())
    return axios.post(`https://www.eventbriteapi.com/v3/events/?token=${EVENTBRITE_TOKEN}`, {
        "event.start.timezone": "America/Chicago",
        "event.start.utc": toEventBriteTime(start),
        "event.end.utc": toEventBriteTime(end),
        "event.currency": "USD",
        "event.end.timezone": "America/Chicago",
        "event.name.html": title,
        "event.description.html": description,
        "event.capacity": capacity,
        "event.venue_id": "35458701"
    }).then((res) => {
        console.log("Event Generated")
        const { id, url } = res.data;
        console.log(id, url);
        return { id, url }
    }).catch((err) => {
        //console.warn(err.response.data)
        callback(null, {
            statusCode: 500,
            body: "Failed to create event"
        })
    })

}

function generateBitly(url, callback) {
    try {
        console.log("Trying to generate a shortlink for: ", url)
        return axios.post("https://api-ssl.bitly.com/v4/shorten", {
            "domain": "bit.ly",
            "long_url": url
        }
            , {
                headers: { Authorization: `Bearer ${BITLY_API_KEY}`, "Content-Type": "application/json" }
            }).then(bitlyResponse => {
                //Done
                return bitlyResponse.data.link;
            }).catch(shortenErr => {
                console.log(shortenErr)
                callback(null, {
                    statusCode: 500,
                    body: "Link Failed to shorten"
                })
            })
    }
    catch (err) {
        console.log(err)
    }
}

function makeTickets(eventId, capacity, callback) {
    return axios.post(`https://www.eventbriteapi.com/v3/events/${eventId}/ticket_classes/?token=${EVENTBRITE_TOKEN}`, {
        "ticket_class.description": "A Ticket for UTD Students Only",
        "ticket_class.free": true,
        "ticket_class.name": "UTD Student",
        "ticket_class.capacity": capacity
    }).then((res2) => {
        console.log("Tickets Generated");

    }).catch(err => {
        console.log(err)
        callback(null, {
            statusCode: 500,
            body: "Failed to create tickets"
        })
    })
}

function sendEmail(recipients, subject, {eventTitle, eventDesc, eventStart, eventEnd, eventURL, eventLocation}) {
    let mailTransport = mailer.config({
        host: 'smtp.mailgun.org',
        auth: {
            user: MAILGUN_USER,
            pass: MAILGUN_PASS
        }
    })

    let message = {
        from: MAILGUN_USER,
        to: recipients,
        subject,
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;">
         <head> 
          <meta charset="UTF-8"> 
          <meta content="width=device-width, initial-scale=1" name="viewport"> 
          <meta name="x-apple-disable-message-reformatting"> 
          <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
          <meta content="telephone=no" name="format-detection"> 
          <title>Event Announcment</title> 
          <!--[if (mso 16)]>
            <style type="text/css">
            a {text-decoration: none;}
            </style>
            <![endif]--> 
          <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
          <!--[if !mso]><!-- --> 
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet"> 
          <!--<![endif]--> 
          <style type="text/css">
        @media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important; line-height:150%!important } h1 { font-size:30px!important; text-align:center; line-height:120%!important } h2 { font-size:26px!important; text-align:center; line-height:120%!important } h3 { font-size:20px!important; text-align:center; line-height:120%!important } h1 a { font-size:30px!important } h2 a { font-size:26px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button { font-size:20px!important; display:block!important; border-width:10px 0px 10px 0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }
        #outlook a {
            padding:0;
        }
        .ExternalClass {
            width:100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height:100%;
        }
        .es-button {
            mso-style-priority:100!important;
            text-decoration:none!important;
        }
        a[x-apple-data-detectors] {
            color:inherit!important;
            text-decoration:none!important;
            font-size:inherit!important;
            font-family:inherit!important;
            font-weight:inherit!important;
            line-height:inherit!important;
        }
        .es-desk-hidden {
            display:none;
            float:left;
            overflow:hidden;
            width:0;
            max-height:0;
            line-height:0;
            mso-hide:all;
        }
        </style> 
         </head> 
         <body style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"> 
          <div class="es-wrapper-color" style="background-color:#F6F6F6;"> 
           <!--[if gte mso 9]>
                    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                        <v:fill type="tile" color="#f6f6f6"></v:fill>
                    </v:background>
                <![endif]--> 
           <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;"> 
             <tr style="border-collapse:collapse;"> 
              <td valign="top" style="padding:0;Margin:0;"> 
               <table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;"> 
                 <tr style="border-collapse:collapse;"> 
                  <td align="center" style="padding:0;Margin:0;background-position:left top;"> 
                   <table class="es-header-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;"> 
                     <tr style="border-collapse:collapse;"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;"> 
                       <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                         <tr style="border-collapse:collapse;"> 
                          <td width="560" align="center" valign="top" style="padding:0;Margin:0;"> 
                           <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                             <tr style="border-collapse:collapse;"> 
                              <td align="center" style="padding:0;Margin:0;"><img class="adapt-img" src="https://xxjpr.stripocdn.email/content/guids/CABINET_463bb267d456a66c72e7a17395133349/images/29211567782091699.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" width="129"></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                     <tr style="border-collapse:collapse;"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;background-position:left top;"> 
                       <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                         <tr style="border-collapse:collapse;"> 
                          <td width="560" valign="top" align="center" style="padding:0;Margin:0;"> 
                           <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                             <tr style="border-collapse:collapse;"> 
                              <td align="left" style="padding:0;Margin:0;"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#333333;">New event&nbsp;from UTDesign Makerspace</h3></td> 
                             </tr> 
                             <tr style="border-collapse:collapse;"> 
                              <td align="left" style="padding:0;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;">This is an automated message to let you know about a new event from the UTDesign Makerspace</p></td> 
                             </tr> 
                             <tr style="border-collapse:collapse;"> 
                              <td align="center" style="padding:20px;Margin:0;"> 
                               <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                 <tr style="border-collapse:collapse;"> 
                                  <td style="padding:0;Margin:0px 0px 0px 0px;border-bottom:1px solid #CCCCCC;background:none;height:1px;width:100%;margin:0px;"></td> 
                                 </tr> 
                               </table></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                     <tr style="border-collapse:collapse;"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;background-position:left top;"> 
                       <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                         <tr style="border-collapse:collapse;"> 
                          <td width="560" align="center" valign="top" style="padding:0;Margin:0;"> 
                           <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:left top;"> 
                             <tr style="border-collapse:collapse;"> 
                              <td align="center" style="padding:0;Margin:0;"><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;">Title: ${eventTitle}<br>Description: ${eventDesc}<br>Start: ${eventStart}</h4><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;">End: ${eventEnd}<br>Location: ${eventLocation} </h4><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;">RSVP: ${eventURL}</h4></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                     <tr style="border-collapse:collapse;"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;"> 
                       <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                         <tr style="border-collapse:collapse;"> 
                          <td width="560" align="center" valign="top" style="padding:0;Margin:0;"> 
                           <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                             <tr style="border-collapse:collapse;"> 
                              <td align="center" style="padding:20px;Margin:0;"> 
                               <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                 <tr style="border-collapse:collapse;"> 
                                  <td style="padding:0;Margin:0px 0px 0px 0px;border-bottom:1px solid #CCCCCC;background:none;height:1px;width:100%;margin:0px;"></td> 
                                 </tr> 
                               </table></td> 
                             </tr> 
                             <tr style="border-collapse:collapse;"> 
                              <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;"> 
                               <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                 <tr style="border-collapse:collapse;"> 
                                  <td align="center" valign="top" style="padding:0;Margin:0;padding-right:30px;"><a target="_blank" href="https://facebook.com/utdmakerspace" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:14px;text-decoration:underline;color:#1376C8;"><img src="https://xxjpr.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png" alt="Fb" title="Facebook" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></a></td> 
                                  <td align="center" valign="top" style="padding:0;Margin:0;padding-right:30px;"><a target="_blank" href="https://twitter.com/utdmakerspace" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:14px;text-decoration:underline;color:#1376C8;"><img src="https://xxjpr.stripocdn.email/content/assets/img/social-icons/circle-colored/twitter-circle-colored.png" alt="Tw" title="Twitter" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></a></td> 
                                  <td align="center" valign="top" style="padding:0;Margin:0;"><a target="_blank" href="https://instagram.com/utdmakerspace/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:14px;text-decoration:underline;color:#1376C8;"><img src="https://xxjpr.stripocdn.email/content/assets/img/social-icons/circle-colored/instagram-circle-colored.png" alt="Ig" title="Instagram" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></a></td> 
                                 </tr> 
                               </table></td> 
                             </tr> 
                             <tr style="border-collapse:collapse;"> 
                              <td align="center" style="padding:20px;Margin:0;"> 
                               <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                 <tr style="border-collapse:collapse;"> 
                                  <td style="padding:0;Margin:0px 0px 0px 0px;border-bottom:1px solid #CCCCCC;background:none;height:1px;width:100%;margin:0px;"></td> 
                                 </tr> 
                               </table></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table> 
          </div>  
         </body>
        </html>`

    }
    return mailTransport(message)
        .then(function (info) { console.log(info) })   // if successful
        .catch(function (err) { console.log('got error'); console.log(err) });
}

let toEventBriteTime = date => new Date(date).toISOString().replace(/\./, ":").replace(/:([0-9]{3})Z/, `Z`)
