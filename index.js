const express = require("express"); //express를 설치했기 때문에 가져올 수 있다.
const app = express()

app.listen(8000, () => {
    console.log("Running express server");
});