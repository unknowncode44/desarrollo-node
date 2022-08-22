import app from "../src/app.js";

const main = () => {
    const port = app.get('port');
    app.listen(port)
    console.log('server running on ' + port);
}


main();

