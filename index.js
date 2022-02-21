const { Client , Intents , Collection}  = require('discord.js') //디스코드에서 필요한것들을 불러오는 코드
const client = new Client({intents:32767}) //32767은 모든인텐드를 불러오는 코드입니다

client.once('ready',()=>{
    console.log("봇이 준비되었습니다") // 로그인이 되면 콘솔창에서 로그인이 됐다고 알려줍니다
})

client.on('messageCreate' , message=>{
    if(message.content == "핑"){ //작동이 잘 되는지 확인하는 코드
        message.reply("퐁")
    }
})

client.login("토큰_발급해서_넣어주세요") // 로그인을 할 토큰을 입력 후 실핼하시면 해당토큰으로 로그인이 됩니다