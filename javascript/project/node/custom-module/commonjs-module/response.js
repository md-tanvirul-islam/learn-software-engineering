function receive(data) {
    const decrypted_data = decryptData(data);
    console.log(decrypted_data);
}

function decryptData(data) {
    return `decrypt received data--> ${data}.`;
}

module.exports = {
    receive
}