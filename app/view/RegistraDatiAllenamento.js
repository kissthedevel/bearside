Ext.define("bearside.view.RegistraDatiAllenamento", {
    extend: 'Ext.Container',
	
	requires: [
		'Ext.Panel',
		'Ext.form.Panel',
		'Ext.field.Text',
		'Ext.field.Password',
		'Ext.field.Email',
		'Ext.picker.Date'
    ],

    initialize: function() {
        this.callParent();
		
        this.setItems( [
			{
				xtype: 'container',
				itemId: 'Container',
				layout: {
					type: 'hbox',
					pack: 'center'
				},
				flex: 1,
				items: [
					{
						xtype: "formpanel",
						layout: 'vbox',
						// flex: 1,
						height: 450,
						width: 400,
						itemId: 'FormRegistraDati',
						items: [
							{
								xtype: 'fieldset',
								title: 'Attività',
								items: [
									{
										xtype: 'textfield',
										label: 'Giorno',
										component: {type: 'date'}
									},
									{
										xtype: 'selectfield',
										label: 'Tipo',
										options: [
											{text: 'Mountain Bike',  value: 'mtb'},
											{text: 'Rulli', value: 'ind'},
											{text: 'A piedi',  value: 'run'}
										]
									}
								]
							},
							{
								xtype: 'container',
								itemId: 'CntComputer',
								layout: 'vbox',
								items: [
									{
										xtype: 'fieldset',
										title: 'Dati altimetrici',
										items: [
											{
												xtype: 'numberfield',
												label: 'Alt. partenza',
												labelWidth: '50%',
												showAnimation: 'slideIn'
											},
											{
												xtype: 'numberfield',
												label: 'Alt. massima',
												labelWidth: '50%',
												showAnimation: 'slideIn'
											},
											{
												xtype: 'numberfield',
												label: 'Dislivello pos.',
												labelWidth: '50%',
												showAnimation: 'slideIn'
											},
											{
												xtype: 'numberfield',
												label: 'Pendenza med.',
												labelWidth: '50%',
												showAnimation: 'slideIn'
											},
											{
												xtype: 'numberfield',
												label: 'Pendenza max.',
												labelWidth: '50%',
												showAnimation: 'slideIn'
											}
										]
									},
									{
										xtype: 'fieldset',
										title: 'Dati computer',
										items: [
											{
												xtype: 'numberfield',
												label: 'Distanza',
												labelWidth: '50%',
												showAnimation: 'slideIn'
											},
											{
												xtype: 'numberfield',
												label: 'Speed avg',
												labelWidth: '50%',
												showAnimation: 'slideIn'
											},
											{
												xtype: 'numberfield',
												label: 'Speed max',
												labelWidth: '50%',
												showAnimation: 'slideIn'
											},
											{
												xtype: 'textfield',
												label: 'Durata',
												labelWidth: '50%',
												component: {type: 'time'}
											},
										]
									}
								]
							},
							{
								xtype: 'container',
								itemId: 'CntCardio',
								layout: 'vbox',
								items: [
									{
										xtype: 'fieldset',
										title: 'Dati cardio',
										items: [
											{
												xtype: 'numberfield',
												label: 'Freq. avg',
												labelWidth: '50%',
												showAnimation: 'slideIn'
											},
											{
												xtype: 'numberfield',
												label: 'Freq. max',
												labelWidth: '50%',
												showAnimation: 'slideIn'
											},
											{
												xtype: 'textfield',
												label: 'Time zone',
												labelWidth: '50%',
												component: {type: 'time'}
											},
											{
												xtype: 'numberfield',
												label: 'Kalorie',
												labelWidth: '50%',
												showAnimation: 'slideIn'
											}
										]
									}
								]
							}
						]
					}
				]
			}
		]);
    }
});