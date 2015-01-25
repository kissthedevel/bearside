Ext.define("bearside.controller.RegistraDatiAllenamento", {
    extend: "Ext.app.Controller",
	
	init: function () {
		var me = this;
				ciccio = me;
		me.callParent(arguments);
	},
	
	config: {
        refs: {
			Container: '#Container',
			FormRegistraDati: '#FormRegistraDati',
            NomeScemo: '#NomeScemo',
			MyButton: '#MyButton'
        },
        control: {
            '#NomeScemo': {
				'focus': 'onFocusNomeScemo'
			},
			'#MyButton': {
				'tap': 'onMyButtonTap'
			}
        }
    },
	
	onMyButtonTap: function(button, e, eOpts) {
		alert('tapped');
    },
	onFocusNomeScemo: function(th){
		alert('th focus');
	},
    launch: function () {
        this.callParent();
    },
	destroy : function(){
        this.callParent();
    }
});