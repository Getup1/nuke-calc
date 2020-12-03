let STATE = {
	crystals_spent: 0,
	bought_items: [],
	operatives: [] 
};

function buy_item(cat, I) {
	let item = PRICES[cat][I];
	STATE.crystals_spent += item.cost;
	STATE.bought_items.push(item);
}

function remove_item(item) {
	STATE.crystals_spent -= STATE.bought_items[item].cost;
	STATE.bought_items.splice(item, 1);
}

function add_operative() {
	let newOps = {
		name: "Operative #" + (STATE.operatives.length + 1),
		stash: []
	};
	STATE.operatives.push(newOps);
}

function remove_operative(id) {
	STATE.bought_items = STATE.bought_items.concat(STATE.operatives[id].stash);
	STATE.operatives.splice(id, 1);
}

function give_item(id, item) {
	STATE.operatives[id].stash.push(STATE.bought_items[item]);
	STATE.bought_items.splice(item, 1);
}

function take_item(id, item) {
	STATE.bought_items.push(STATE.operatives[id].stash[item]);
	STATE.operatives[id].stash.splice(item, 1);
}
