// exports.handler = function(event, context, callback) {
//     const randomWords = [
//         'copper',
//         'explain',
//         'tenuous',
//         'neat',
//         'discovery',
//         'sweltering',
//         'dusty',
//         'unruly',
//         'week',
//         'rejoice',
//     ];
//     const randomNumber = Math.floor(Math.random() * 10);
//     callback(null, {
//         statusCode: 200,
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//         },
//         body: JSON.stringify({ word: randomWords[randomNumber] }),
//     });
// };
exports.handler = function(event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: JSON.stringify("Hello, World")
    });
}