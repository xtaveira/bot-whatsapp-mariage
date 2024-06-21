import { create } from 'venom-bot';


import { main } from './db.js'

// main().catch(err => console.log(err));

create({
    session: 'second-number'
}).then((client) => start(client)).catch((error) => {console.log(error)})

const start = (client) => {
    client.onMessage((message) => {
        if (message.body === 'Hi' && message.isGroupMsg == false) {
            client.sendText(message.from, 'Welcome!')
            .then((result) => {
                console.log('Result: ' + result);
            }).catch((error) => {
                console.error('Error when sending: '+ error)
            })
        }
    })
}