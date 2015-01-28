Ext.define('bearside.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
		
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
                type: 'fade'
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
					type: 'hbox'
				},
				config: {
					sezione: "registra"
				},
				items: [
					{
						xtype: 'spacer',
						flex: 1
					},
					{
						xtype: 'container',
						itemId: 'ContainerRegistra',
						layout: 'fit',
						width: Ext.os.deviceType == 'Phone'  ?  '100%'	:	'40%'
					},
					{
						xtype: 'spacer',
						flex: 1
					}
				],
				style: 'background: #242433'/*,
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
			th.getActiveItem().down('container').add(Ext.create('bearside.view.RegistraDatiAllenamento'));
		},
		
		activeitemchange: function(th, newTab, oldTab, eOpts)  {			
			switch (newTab.config.config.sezione){
				case "allenamenti":
					//alert('allenamenti');
					break;
					
				case "registra":
					newTab.down('container').add(Ext.create('bearside.view.RegistraDatiAllenamento'));
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
