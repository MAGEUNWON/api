import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App);
app.use(VueAxios, axios);

app.config.globalIPoerties.axios = axios;
