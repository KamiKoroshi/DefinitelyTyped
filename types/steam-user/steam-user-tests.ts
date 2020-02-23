import * as SteamUser from 'steam-user';

let user = new SteamUser();

user.on('group', (sid, group) => {
    console.log(group);
});

user.on('loggedOn', (details, parental) => {
    console.log('loggedIN');
    console.log(details);
    console.log(parental);
});

user.on('tradeResponse', (steamID, response, restrictions) => {});
