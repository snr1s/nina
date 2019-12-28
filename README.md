# Nina

Nina is simple discord bot (discord.js), you can download my bad code and use it in your projects.

Last version: **0.0.9**

### Preparing project for work

#### Download node.js

You can download it [**here**](https://nodejs.org/en/download/)

#### Download project and unzip

You can download it [**here**](https://github.com/snr1s/nina/archive/master.zip)

#### Build

Open terminal in unzipped folder and type

`npm i`

#### Create new discord bot

You can create it [**here**](https://discordapp.com/developers/applications/)

Copy bot's secret token.

#### config.json

Create **config.json** in unzipped folder and type

```json
{
 "token": "your token here",
 "prefix": "!",
 "maincolor": "ffffff"
}
```

*Prefix is symbol(s) before the command*

*Maincolor is embed's main color*

#### Start

Start the bot using `node .` in project folder

If the bot started, you will see message like `Logged in as (your bot's username)`

Then just invite your bot and have fun!

### Versions

#### **0.0.9**

Release date: **27.12.2019** (d.m.y)

Updates:

* Created the bot

* Added some commands

  * bulkdelete.js  -- deletes messages in chat.

  * da.js -- dangerous actions, only owner can use this command.

  * owa.js -- dangerous actions, only owner can use this command.

  * ping.js -- check's bot's life.

  * say.js -- shows embed with your text.

* Added simple module, dynamicEmbed
