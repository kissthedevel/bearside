Ext.define("bearside.view.RegistraDatiAllenamento", {
    extend: "Ext.Container", 
	
	requires: [
		'Ext.form.Panel',
		'Ext.field.Text',
		'Ext.field.Password',
		'Ext.field.Email',
		'Ext.Container'
    ],
	
    config: {
        items: [
			{
				xtype: 'container',
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
    }
});