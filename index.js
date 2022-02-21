const { Client , Intents , Collection}  = require('discord.js') //디스코드에서 필요한것들을 불러오는 코드
const client = new Client({intents:32767}) //32767은 모든인텐드를 불러오는 코드입니다
const { prefix , token } = require('./config.json')
const fs = require('fs')
client.commands = new Collection() //커맨드 핸들링

client.once('ready',()=>{
    console.log("봇이 준비되었습니다") // 로그인이 되면 콘솔창에서 로그인이 됐다고 알려줍니다
})

client.on('messageCreate' , message=>{
    if(message.content == "핑"){ //작동이 잘 되는지 확인하는 코드
        message.reply("퐁")
    }
})

//// 커맨드 핸들링 ////
const commandsFile = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for(const file of commandsFile){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name , command)
}

client.on('messageCreate' , message=>{
    if(!message.content.startsWith(prefix)) return
    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
    if (!command) return
    try{
        command.execute(message, args, client)
    } catch (error) {
        console.error(error)
    }
})

client.login(token) // 로그인을 할 토큰을 입력 후 실핼하시면 해당토큰으로 로그인이 됩니다