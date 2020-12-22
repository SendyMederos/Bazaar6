const SearchProductsByKeyword = (props) => {
var unirest = require("unirest");
var req = unirest("GET", "https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/search");

req.query({
	"store_id": "3991",
	"keyword": "lamp",
	"sponsored": "1",
	"limit": "50",
	"offset": "0"
});

req.headers({
	"x-rapidapi-key": "4d472e4cadmsh7aeae0277c185b6p1b6f82jsn73f7f03779e3",
	"x-rapidapi-host": "target-com-store-product-reviews-locations-data.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
}

export default SearchProductsByKeyword