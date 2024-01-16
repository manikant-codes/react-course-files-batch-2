// DRY
// Don't Repeat Yourself

// KISS
// Keep It Simple Stupid

// Expression
// Expression is a small statement/instruction that evaluates to a single value.
// Expression ek chota statement/instruction hai jiska output ek single value hoo.

// ------------------------------
// useEffect
// ------------------------------
// useEffect ek hook hai, jiska use ham side-effect karne ke liye karte hain.
// Side-effect yane aise kaam jinhe karne ke liye react ke environment ke bahar jana padta hai. Jaise ke data fetch karna, directly DOM me changes karna aur timers (setTimeout, setInterval) chalana.
// useEffect do arguments leta hai, pehla rgument ek callback function hoota hai, jisme aap kya kaam karwana hai ye likhte hoo.
// Dusra argument dependecy array, inme aap wo variables likhte hoo, jinke change hone pe aap useEffect dobara chalana chahte hoo.
// useEffect(<callback_function>, <dependency_array>)
// useEffect me diya gaya callback function hamesha component render hoojaye uske baad chalega.
// Pehle render ke baad baki sabhi renders ke liye, pehle clean-up function chalega uske baad useEffect ka callback function chalega.
// clean-up function ek function hai jise aap useEffect me diye gaye callback function se return karate hoo.
// Yaha pe aap apne effect ke dwara failgaye gaye raite ko saaf karte hoo.
// Raita yane subscriptions, ye subscriptions timer ke hoosakte hai, events ke hoosakte hai, apis ke hoosakte hain and so on.
// Kabhi bhi aise side-effect karo jisme clean-up ki zarurat hoo to waha clean-up karna hai. Warna browser me use effect me banaye gaye variables, listeners, timers ki nayi copies banti rahegi. Ise memory full hogi aur app ka performance degrade hooga.
