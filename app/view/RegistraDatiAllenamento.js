Ext.define("bearside.view.RegistraDatiAllenamento", {
    extend: 'Ext.Container',
	
	requires: [
		'Ext.Panel',
		'Ext.form.Panel',
		'Ext.field.Text',
		'Ext.field.Password',
		'Ext.field.Email'
    ],
	
    layout: {
    	type: 'vbox',
    	align: 'stretch'
    },
    init: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
				{
					xtype: 'container',
					itemId: 'Container',
					layout: {
						type: 'vbox',
						align: 'stretch'
					},
					items: [
						{
							xtype: "formpanel",
							height: 300,
							width: 400,
							id: 'FormRegistraDati',
							items: [
								{
									xtype: 'textfield',
									id: 'NomeScemo',
									name: 'name',
									label: 'Name'
								},
								{
									xtype: 'emailfield',
									name: 'email',
									label: 'Email'
								},
								{
									xtype: 'passwordfield',
									name: 'password',
									label: 'Password'
								}
							]
						}
					]
				}
			]
        });

        me.callParent(arguments);
    }
});