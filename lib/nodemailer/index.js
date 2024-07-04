import nodemailer from 'nodemailer';

export const Notification = {
    WELCOME: 'WELCOME',
    PRICECHANGE: 'PRICECHANGE',
}

export const emailBody = (productOb, type) => {
    const title = productOb.title;


    let subject = '';
    let body = '';


    switch (type) {
        case Notification.WELCOME:
            subject = `Welcome! Tracking product: ${title}`;
            body = `<html>
                    <head>
                        <title>Welcome to PriceGuru</title>
                    </head>
                    <body>
                        <h1>Welcome!</h1>
                        <p>You are now tracking this product: <strong>${title}</strong>.</p>
                        <p>Thank you for using our service.</p>
                    </body>
                </html>
            `;
            break
        case Notification.PRICECHANGE:
            subject = `Price Alert: ${title} has changed price!`;
            body = `
             <html>
            <head>
                <title>Price Change Alert</title>
            </head>
            <body>
                <h1>Price Change Alert!</h1>
                <p>The price of <strong>${title}</strong> has recently changed to ${productOb.price}.</p>
                <p>Check out the new price and decide if it's the right time to buy!</p>
            </body>
            </html>`;
            break;

        default:
            break;
    }
    return { subject, body }
}


const transporter = nodemailer.createTransport({
    pool: true,
    service: 'hotmail',
    port: 2525,
    auth: {
      user: 'priceguru_project@outlook.com',
      pass: process.env.EMAIL_PASSWORD,
    },
    maxConnections: 1
  })


export const sendMail = async (emailBody, receiver) => {
    const mailer = {
        from: "priceguru_project@outlook.com.",
        to: receiver,
        html: emailBody.body,
        subject: emailBody.subject,
    };

    transporter.sendMail(mailer, (error, info) => {
        if(error) return console.log(error);
        
        console.log('Email sent: ', info);
      })

}