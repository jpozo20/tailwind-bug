import { resolve } from "path";
import { openSesame } from "src/app/somets";
async function openUrl(url, newTab) {
	openSesame();
	if (newTab) await chrome.tabs.create({ url: url, active: true });
	else await chrome.tabs.update({ active: true, url: url });
}
