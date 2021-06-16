module.exports = (http) => {
    const io = require('socket.io')(http);

    io.setMaxListeners(0);

    io.on('connection', (socket) => {
        console.log('User connected.');

        socket.on('realizarPedido', (msg) => {
            io.emit('pedidoChiringo', msg);
        });

        socket.on('cambioEstadoCoBa', (msg) =>{
            io.emit('pedidoBarCocina',msg);
        });

        socket.on('disconnect', () => {
            console.log('User disconnected.');
        });
    });
}