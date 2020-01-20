async function changestatus(client) {
    while (1) {
        await client.user.setPresence({ game: { name: `Type "n!"`, type: 2 } });
        await sleep(3000);
        await client.user.setPresence({ game: { name: `v0.5`, type: 2 } });
        await sleep(3000);
    }
}

function sleep(m) {
    return new Promise(resolve => setTimeout(resolve, m));
}

module.exports = changestatus;