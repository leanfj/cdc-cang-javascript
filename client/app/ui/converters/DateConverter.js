class DateConverter {

	constructor(){
		throw new Error ('Classe não pode ser instanciada');
	}
	//Podemos chamar metodos diretamente de classe quando declarados com o static para metodos que não manipulam propriedade de instacias
	static toText (data) {
		return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
	}

	static toDate (text) {
		return new Date(...text.split('-').map((item, index) => item - index % 2));
	}
}