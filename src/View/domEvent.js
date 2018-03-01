/**
 * DomEvent
 */
export default class DomEvent {
	static model(node, val, oldValue) {
		if (val !== oldValue) {
			node.value = val
		}
	}
	static text(node, text, oldTxt) {
		if (text !== oldTxt) {
			node.textContent = text
		}
	}
	static html(node, html) {
		node.innerHTML = html
	}
	static bind(node, attrName, attrVal) {
		node[attrName.substr(config.attrPrefix.length, attrName.length)] = attrVal
	}
	static addEvt(node, evtName, fn) {
		node.addEventListener(evtName, fn, false)
	}
}