Ext.define('bearside.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
		
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
		'Ext.tab.Bar',
		'Ext.Container',
		'bearside.view.RegistraDatiAllenamento',
		'bearside.controller.RegistraDatiAllenamento'
    ],
	
    config: {
		tabBar: {
			height: '40px',
			layout: {
				pack: 'center'
			},
			cls: 'toolbar'
		},
        tabBarPosition: 'top',
		layout: {
            type: 'card',
            animation: {
                type: 'slide',
                direction: 'left'
            }
        },
		activeItem: 1,

		items: [
			{
				title: 'Allenamenti',
				config: {
					sezione: "allenamenti"
				}/*,
				cls: 'btnLoginCls'
				/*iconCls: 'home',
				html: 'Home Screen'*/
			},
			{
				title: 'Registra',
				layout: {
					type: 'hbox',
					pack: 'center'
				},
				config: {
					sezione: "registra"
				}/*,
				cls: 'btnLoginCls'
				/*iconCls: 'user'/*,
				html: 'Contact Screen'*/
			},
			{
				title: 'Alimentazione',
				config: {
					sezione: "alimentazione"
				}/*,
				cls: 'btnLoginCls'
				iconCls: 'user'/*,
				html: 'Contact Screen'*/
			}
		]
    },
	listeners: {
		initialize: function( th, eOpts ){
			//Ext.Viewport.add(Ext.create('bearside.view.Login'));
		},
		
		activeitemchange: function(th, newTab, oldTab, eOpts)  {			
			switch (newTab.config.config.sezione){
				case "allenamenti":
					//alert('allenamenti');
					break;
					
				case "registra":
					newTab.add(Ext.create('bearside.view.RegistraDatiAllenamento'));
					// me.getTabRegistraDati().add(Ext.create('bearside.view.RegistraDatiAllenamento'));
					break;
					
				case "alimentazione":
					//alert('alimentazione');
					break;
					
				default:
					alert('suka');
			}
		}
	}
});
