Ext.define("bearside.controller.RegistraDatiAllenamento", {
    extend: "Ext.app.Controller",
	
    config: {
        refs: {
            FormRegistraDati: "#FormRegistraDati",
			NomeScemo: '#NomeScemo'
        },
        control: {
            FormRegistraDati: {
                /*tap: "onNewNote"*/
            },
			NomeScemo: {
				focus: 'onNomeScemo_focus'
			}
        }
    },
	onNomeScemo_focus: function(th){
		console.log(th);
		alert('th focus');
	},
    /*onNewNote: function () {
        console.log("onNewNote");
    },*/
    launch: function () {
        this.callParent();
        console.log("launch");
    },
    init: function () {
        this.callParent();
    }
});