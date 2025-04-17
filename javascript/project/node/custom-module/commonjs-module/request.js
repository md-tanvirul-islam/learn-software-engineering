// module.exports.send = function send(data) {
//     const encrypted_message = encryptedData(data);
//     console.log(encrypted_message);
// }

// short hand
exports.send = function (data) {
    const encrypted_message = encryptedData(data);
    console.log(encrypted_message);
}

function encryptedData(data) {
    return `encrypted data sending--> ${data}.`;
}
