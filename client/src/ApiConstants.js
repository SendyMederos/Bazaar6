export const ApiSecure = process.env.REACT_APP_API_SECURE === "true";
export const ApiHost = process.env.REACT_APP_API_ENDPOINT;


const httpScheme = ApiSecure ? "https" : "http"

const RootURL = `${ httpScheme }://${ ApiHost }`

export const APIs = {
    RootURL
}
