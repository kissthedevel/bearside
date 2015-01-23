Ext.define('bearside.view.Login', {
    extend: 'Ext.form.Panel',
		
    requires: [
		'Ext.form.Panel'
    ],
    config: {
        //tabBarPosition: 'bottom',
		
		itemId: 'LoginPanel',
		layout: 'vbox',
		centered: true,
		width: 200,
		height: 280,
		modal: true,
		scrollable: false,
		cls: 'bgPanel',
		bodyCls: 'bgPanel',
		listeners: {
			initialize: function( th, eOpts ){
				//console.log('ciccio');
			}
		},
		items: [
			{
              docked: 'top',
              xtype: 'titlebar',
			  title: 'Entra in Bearside',
			  cls: [
				'toolbar',
				'textMedium'
			],
			  titleCls: 'toolbarLabel'
			},
			{
				xtype: 'textfield',
				name: 'user',
				label: 'Username',
				labelAlign: 'top',
				margin: 5,
				labelCls: 'txtLoginLabel',
				inputCls: 'INtxtLoginLabel'
			},
			{
				xtype: 'passwordfield',
				name: 'pwd',
				label: 'Password',
				labelAlign: 'top',
				margin: 5,
				labelCls: 'txtLoginLabel',
				inputCls: 'INtxtLoginLabel'
			},
			{
				xtype: 'spacer'
			},
			{
              docked: 'bottom',
              xtype: 'toolbar',
			  itemId: 'BtnToolbar',
			  //title: 'Login',
			  cls: 'toolbar',
			  items: [
				{
					xtype: 'button',
					text: 'Log-in',
					//ui: 'action',
					cls: 'btnLoginCls',
					listeners: {
						tap: function( th, e, eOpts ){
							//th.up('#LoginPanel').destroy();
							setInterval(function(){window.navigator.vibrate(200);},250);
						}
					}
				},
				{
					xtype: 'spacer'
				},
				{
					xtype: 'button',
					text: 'Registrati',
					cls: 'btnLoginCls',
					listeners: {
						tap: function( th, e, eOpts ){
							th.up('#LoginPanel').destroy();
						}
					}
				}
			  ]
			}
		]
    }
});
