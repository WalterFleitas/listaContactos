class Persistence{
	
	constructor(){
			this.personas = new Array();

			// guarda una referencia del localStorage
			this.db = window.localStorage;


			this.db.personas = this.db.getItem('personas') || "[]";


	}

	recuperarTodos(){
		// recupera todos los datos del localStorage y los devuelve en formato JSON

		console.log (this.db.getItem('personas') );

			console.log (JSON.parse(this.db.getItem('personas') ));

		return JSON.parse (this.db.getItem('personas') );
	}

	guardar( contacto ){
		this.personas = this.recuperarTodos();

		this.personas.push(contacto);

		this.db.personas = JSON.stringify(this.personas);
	}
}