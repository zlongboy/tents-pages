// import fs from 'fs';

// const requestHandler = function(req, resp) {
//     const url = req.url;
//     const method = req.method;

//     if (url === '/') {
//         resp.write('<html>');
//         resp.write('<head><h1>Form</h1></head>');
//         resp.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></body>');
//         resp.write('</html>');
//         return resp.end();
//     }
//     if (url === '/message' && method === 'POST') {
//         const body = [];
//         req.on('data', function(chunk) {
//             //console.log(chunk)
//             // will keep doing this until all data is read in
//             body.push(chunk);
//         });
//         return req.on('end', function() {
//             const parsedBody = Buffer.concat(body).toString();
//             //console.log(parsedBody);
//             const message = parsedBody.split('=')[1];

//             fs.writeFile('message.txt', message, function(err) {
//                 resp.statusCode = 302;
//                 resp.setHeader('Location', '/');
//                 return resp.end();
//             });
//         });
//     }
//     resp.setHeader('Content-Type', 'text/html');
//     resp.write('<html>');
//     resp.write('<head><h1>Hello world</h1></head>');
//     resp.write('</html>');
//     resp.end();
// };

// export { requestHandler };