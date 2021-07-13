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

        // Hay que revisar esta parte la logica que le queremos dar
        socket.on('cambioStadoPrepar', (msg) => {
            io.emit('pedidoCamarero',msg);
        })

        socket.on('disconnect', () => {
            console.log('User disconnected.');
        });
    });
}