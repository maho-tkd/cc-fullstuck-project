const { setupExpressServer } = require("./server");

const PORT = process.env.PORT || 3000;
const app = setupExpressServer();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});