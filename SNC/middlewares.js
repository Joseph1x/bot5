const { isCommand } = require('./utils/codes')

async function middlewares(bot) {
  bot.ev.on('messages.upsert', async ({messages}) => {
    const baileysMessage = message[0]
    if (!baileysMessage?.message || !isCommand(baileysMessage)) {
      return
    }

const { command } = extractDateFromMessage(baileysMessage)

    switch (command, renotrjid.toLowerCase()) {
      case 'ping':
        await bot.sendMessage(renotejid, { text: 'Pong'})
         break
    }
    
  })
  
}
  
  

module.exports = middlewares