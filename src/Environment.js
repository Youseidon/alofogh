const developementApi = "http://192.168.100.10:82/api/en";
const productionApi = "http://www.alofogh.com:82/api/en";
function getCurrentEnvironment(props){
    return props;
}
const CurrentEnvironment = getCurrentEnvironment(productionApi);
export default CurrentEnvironment;