import axios from "axios";
import VueAxios from "vue-axios";

/**
 * @description service to call HTTP request via Axios
 */
class ApiService {
  /**
   * @description property to share vue instance
   */
  static vueInstance;

  /**
   * @description initialize vue axios
   */
  static init(app) {
    ApiService.vueInstance = app;
    ApiService.vueInstance.use(VueAxios, axios);
    ApiService.vueInstance.axios.defaults.baseURL = this.getBaseUrl();

    this.setDefaultHeader();
  }

  /**
   * @description set the default HTTP request headers
   */
  static setDefaultHeader() {
    ApiService.vueInstance.axios.defaults.headers.common["Accept"] =
      "application/json";
  }

  /**
   * @description get the default HTTP link
   * @returns {string}
   */
  static getBaseUrl() {
    return process.env.VUE_APP_API_URL_LOCAL;
  }

  /**
   * @description set the POST HTTP request
   * @param resource
   * @param params
   * @returns Promise
   */
  static post(resource, params) {
    return ApiService.vueInstance.axios.post(`${resource}`, params);
  }
}

export default ApiService;
