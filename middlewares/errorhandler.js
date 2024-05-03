const errorhandler = (err, req, res, next) => {
    console.log("Manejo de errores desde un middleware");
    const defaultMessage = 'La aplicación esta ocupada. Inténtelo nuevamente más tarde.'

    if (process.env.NODE_ENV === 'development') {
        const statusCode = err.statusCode || 500;
        const message = err.message || defaultMessage;
        res.status(statusCode).json({
            success: false,
            status: statusCode,
            message: message,
            stack: err.stack
        });
    } else {
        res.status(200).send(defaultMessage);
    }
}

module.exports = errorhandler