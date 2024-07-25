const mongoose = require("mongoose");
MONGODB_URI = 'mongodb+srv://adi_tya_28:Aditya2728%40@cluster0.3psg84k.mongodb.net/';
mongoose
    .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Database connected successfully!")
    }).catch((error) => {
        console.log("Error in connecting Database!", error);
    })