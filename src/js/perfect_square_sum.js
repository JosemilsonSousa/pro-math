function perfectSquareSum(){
	//definir as variaveis
	const arg1 = document.getElementById("variable1").value;
	const arg2 = document.getElementById("variable2").value;

	const a = {'n': '','v': ''}; 
	const t = {'n': '','v': ''}; 

	let solving = [];
	let show_solving = document.getElementById("show-solving");
	let show_result  = document.getElementById("show-result");

	arg1.split('').forEach(arg => {isNaN(arg) ? a['v'] += arg : a['n'] += eval(arg);});
	arg2.split('').forEach(arg => {isNaN(arg) ? t['v'] += arg : t['n'] += eval(arg);});

	solving.push(`<p>Problema a ser resolvido (${arg1} + ${arg2})<sup>2</sup></p>`);
	solving.push(`<p>(${arg1} + ${arg2}) . (${arg1} + ${arg2})</p>`);
	solving.push(`<p><b>${arg1}(${arg1} + ${arg2})</b> + ${arg2}(${arg1} + ${arg2})</p>`);
	solving.push(`<p><b>${a['n']**2}${a['v']}<sup>2</sup></b> + <u>${a['n']*arg2}${a['v']} + ${a['n']*arg2}${a['v']}</u> + <b>${arg2 ** 2}</b></p>`);
	solving.push(`<p><b>${a['n']**2}${a['v']}<sup>2</sup></b> + <u>2(${a['n']*arg2}${a['v']})</u> + <b>${arg2 ** 2}</b></p>`);
	solving.push(`<p><b>${a['n']**2}${a['v']}<sup>2</sup></b> + ${2 * a['n'] * t['n']}${a['v']} + <b>${arg2 ** 2}</b></p>`);

	show_solving.innerHTML = "";
	var time;
	for (let i = 0; i < solving.length; i++){
		time = 1200 * i;
		setTimeout(() => {
			show_solving.insertAdjacentHTML("beforeend", solving[i])
		}, i * 1200)
		
	};

	// mostrando a resolução do problema
	show_result.innerHTML  = solving[solving.length-1];
	let result  = document.querySelector("#show-result p");
	result.style.opacity = 0;
	setTimeout(() => {
		result.style.animation = "coming 5s";
		result.style.opacity = 100;
	}, time + 500)
}

const btnPssCalc = document.getElementById("btn-pss-calc");

btnPssCalc.addEventListener('click', function(){
	perfectSquareSum()
});