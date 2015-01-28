Ext.define("bearside.view.RegistraDatiAllenamento", {
    extend: 'Ext.Container',
	
    initialize: function() {
        this.callParent();
		
        this.setItems( [
			{
				xtype: 'container',
				itemId: 'Container',
				style: {
					'background': '#009999',
					'border-radius': '10px'
				},
				margin: 5,
				height: '100%',
				width: '100%',
				layout: 'vbox',
				items: [
					{
						xtype: "formpanel",
						margin: 8,
						layout: 'vbox',
						scrollable: 'vertical',
						flex: 1,
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
											{text: 'A piedi',  value: 'run'},
											{text: 'Sala pesi',  value: 'gym'}
										]
									}
								]
							},
							{
								xtype: 'container',
								itemId: 'CntComputer',
								layout: {
									type: 'vbox',
									align: 'stretch'
								},
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
								layout: {
									type: 'vbox',
									align: 'stretch'
								},
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
									},
									{
										xtype: 'container',
										layout: {
											type: 'hbox',
											pack: 'center'
										},
										items: [
											{
												xtype: 'button',
												itemId: 'MyButton',
												width: '100',
												text: 'Submit',
												ui: 'confirm',
												margin: 10
											}
										]
									},
								]
							}
						]
					}
				]
			}
		]);
    }
});