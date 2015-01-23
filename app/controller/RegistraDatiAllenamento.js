Ext.define("bearside.controller.RegistraDatiAllenamento", {
    extend: "Ext.app.Controller",
	
	init: function () {
		var me = this;
			
		var selContainer= '#'+ me.containerId+' ';
				
		me.callParent(arguments);
								
		me.addRef([				
			{
				ref: 'Container',
				selector: selContainer+'#Container'
			},
			{
				ref: 'FormRegistraDati',
				selector: selContainer+'#FormRegistraDati'
			},
			{
				ref: 'NomeScemo',
				selector: selContainer+'#NomeScemo'
			}
		]);
		
		me.control(selContainer+'#NomeScemo', {
			focus: me.onFocusNomeScemo
		});
	},
	
	onFocusNomeScemo: function(th){
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
	
	destroy : function(){
        this.callParent();
    }
});