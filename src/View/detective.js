/**
 * Detictive
 */
import Register from "../Bll/register"
export default class Detictive {
	static ["model"](node, key, vm) {
		Register.registDomListener4Hubs("model", node, key, vm)
		node.addEventListener('input', e => {
			vm[key] = e.target.value
		}, false)
	}
	// {{}}&&text
	static ["text"](node, key, vm) {
		
		Register.registDomListener4Hubs("text", node, key, vm)
	}
	// , vm
	static ["html"](node, html) {
		Register.registDomListener4Hubs("html", node, html)
	}
	//:
	// static bind(node, attrName, attrVal) {
	// 	DomFn.bind(node, attrName, attrVal)
	// }
	// //@
	// static addEvt(node, attrName, fn) {
	// 	var evtName = attrName.substr(config.evtPrefix.length, attrName.length)
	// 	var fn = this.methods[fn].bind(this)
	// 	DomFn.addEvt(node, evtName, fn)
	// }
}
