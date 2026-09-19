const framedDomains = [].join(" ");

const fontsDomains = [
	"https://fonts.gstatic.com",
	"https://fonts.googleapis.com",
].join(" ");

const mediaDomains = [
	"https://p.scdn.co",

	// Google Ads / AdSense
].join(" ");

const imageDomains = [
	"http://cdn.weatherapi.com",
	"https://cdn.ampproject.org",

	// Google Ads / AdSense
].join(" ");

const frameDomains = [
	// AdSense / Google Ads
	// AdSense for Search
].join(" ");

const hashes = [].join(" ");

const whiteList = {
	framedDomains,
	fontsDomains,
	hashes,
	mediaDomains,
	imageDomains,
	frameDomains,
};

export { whiteList };
