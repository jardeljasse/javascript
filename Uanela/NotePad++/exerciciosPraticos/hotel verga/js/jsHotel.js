//esta funcao evitara a existencia de colisao de mesmas variaveis.
(function () {
	/*creating HOTEL CONSTRUCTOR METHOD 
	in CONSTRUCTOR METHOD, we must use the command 'this.' to 
	reference local variable on creating, and must declare it with Uppercase*/

	function Hotel(nome, precoPorQuarto, desconto) {
		this.nome = nome;
		this.precoPorQuarto = precoPorQuarto;
		this.desconto = desconto;
		this.precoDaOferta = () => {
			let precoPorOferta = this.precoPorQuarto * ((100 - this.desconto) / 100);

			return precoPorOferta;
		};
	};

	//bulting our HOTEL through CONSTRUCTOR METHOD
	const park = new Hotel("Park", 240, 15);

	//Accessing the elements in HTMLCollection

	let elNomeDoHotel = document.querySelectorAll('#nomeDoHotel')[0];
	elNomeDoHotel.textContent = park.nome;

	let elPrecoDoQuarto = document.getElementById('precoDoQuarto');
	elPrecoDoQuarto.textContent += park.precoPorQuarto;

	let elPrecoEspecial = document.querySelector('#precoEspecial');
	elPrecoEspecial.textContent += park.precoDaOferta();

	//best before of offer

	const ofertaExpira = () => {
		let umaSemanaDepois, diaExpira, dataExpira, mesExpira, anoExpira;

		umaSemanaDepois = new Date(hoje.getTime() + 7 * 24 * 60 * 60 * 1000)
		//making Array to integrate week's day

		var semana = [
			'Domingo',
			'Segunda-feira',
			'Terca-feira',
			'Quarta-feira',
			'Quinta=feira',
			'Sexta-feira', 
			'Sabado'
		]

		var meses = [
			'Janeiro',
			'Fevereiro',
			'Marco',
			'Abril',
			'Maio',
			'Junho',
			'Julho',
			'Agosto',
			'Setembro',
			'Outubro',
			'Novembro',
			'Dezembro'
		]
		//pegando o dia da semana do Array 'semana'
		diaExpira = semana[umaSemanaDepois.getDay()]
		dataExpira = umaSemanaDepois.getDate();
		//pegando o mes a partir do Array 'meses'
		mesExpira = meses[umaSemanaDepois.getMonth()];
		anoExpira = umaSemanaDepois.getFullYear();
		//document.write(anoExpira)

		const elFimDaOferta = document.getElementById('fimDaOferta');
		elFimDaOferta.innerHTML = `A ofeta expira proxima(o) ${diaExpira} <br />(${dataExpira} ${mesExpira}
		 ${anoExpira})`;
	}
	let hoje = new Date();
	//Call the function
	ofertaExpira(hoje)


})();