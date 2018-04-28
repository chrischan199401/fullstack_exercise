const express = require("express");
const app = new express();

require("./services/passport");
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
