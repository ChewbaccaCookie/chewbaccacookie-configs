import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

if (process.env.NODE_ENV !== "test") {
    app.listen(port, () => {
        // eslint-disable-next-line no-console
        console.log(`Example app listening on port ${port}`);
    });
}

export default app;
