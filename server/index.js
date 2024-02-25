const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers

const userRouter = require("./routes/Users");
const rankRouter = require("./routes/Ranks");
const transactionRouter = require("./routes/Transaction");
const documentTypeRouter = require("./routes/DocumentType");
const religionRouter = require("./routes/Religion");
const regionRouter = require("./routes/RegionAssignment");
const employeeRouter = require("./routes/Employee");
const roleRouter = require("./routes/Role");
const genderRouter = require("./routes/Gender");
const taxRouter = require("./routes/TaxStatuses");
const schoolRouter = require("./routes/School");
const attRouter = require("./routes/Attachments");
const donorRouter = require("./routes/Donors");
const statusRouter = require("./routes/Status");
const levelRouter = require("./routes/Level");
const reasonRouter = require("./routes/Reason");
const networkNodesRouter = require("./routes/NetworkNodes");
const rejectionRouter = require("./routes/Rejection");


const Users = require("./models/Users");










app.use("/auth", userRouter);
app.use("/ranks", rankRouter);
app.use("/status", statusRouter);
app.use("/level", levelRouter);
app.use("/transaction", transactionRouter);
app.use("/users", userRouter);

// app.use("/documenttype", documentTypeRouter);
// app.use("/religion", religionRouter);
// app.use("/region", regionRouter);
app.use("/employee", employeeRouter);
app.use("/donors", donorRouter);
app.use("/role", roleRouter);
// app.use("/gender", genderRouter);
// app.use("/taxstatuses", taxRouter);
// app.use("/school", schoolRouter);
app.use("/attachments", attRouter);
app.use("/reasons",reasonRouter);
app.use("/network",networkNodesRouter);
app.use("/rejection",rejectionRouter);





app.use('/Images', express.static('./Images'))




db.sequelize.sync().then(() => {
  app.listen(3020, () => {
    console.log("Server running on port 3020");
  });
});