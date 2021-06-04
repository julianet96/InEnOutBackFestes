module.exports = (http) => {
    const io = require('socket.io')(http);

    io.on('connection', (socket) => {
        console.log('User connected.');

        socket.on('realizarPedido', (msg) => {
            io.emit('pedidoChiringo', msg);
        });

        socket.on('disconnect', () => {
            console.log('User disconnected.');
        });
    });
}