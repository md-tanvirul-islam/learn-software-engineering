// short hand
function send(data) {
    const encrypted_message = encryptedData(data);
    console.log(encrypted_message);
}

function encryptedData(data) {
    return `encrypted data sending--> ${data}.`;
}

export {
    send
}