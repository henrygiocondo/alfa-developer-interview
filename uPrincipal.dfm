object FormPrincipal: TFormPrincipal
  Left = 0
  Top = 0
  Caption = 'FormPrincipal'
  ClientHeight = 657
  ClientWidth = 997
  Color = clWhite
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  OldCreateOrder = False
  OnClose = FormClose
  OnCreate = FormCreate
  PixelsPerInch = 96
  TextHeight = 13
  object Label1: TLabel
    Left = 8
    Top = 21
    Width = 53
    Height = 13
    Caption = 'UserName:'
  end
  object Label2: TLabel
    Left = 8
    Top = 40
    Width = 407
    Height = 13
    Caption = 
      'Consultar nome e sobrenome das pessoas com nome de usu'#225'rio que c' +
      'ontenha Henry'
  end
  object Label3: TLabel
    Left = 8
    Top = 91
    Width = 87
    Height = 13
    Caption = 'Delete UserName:'
  end
  object Label4: TLabel
    Left = 8
    Top = 151
    Width = 429
    Height = 13
    Caption = 
      'Consultar todos os aeroportos que o endere'#231'o da localiza'#231#227'o cont' +
      'enha a palavra '#39'District'#39
  end
  object Label5: TLabel
    Left = 600
    Top = 8
    Width = 49
    Height = 13
    Caption = 'UserName'
  end
  object Label6: TLabel
    Left = 600
    Top = 54
    Width = 48
    Height = 13
    Caption = 'FirstName'
  end
  object Label7: TLabel
    Left = 600
    Top = 104
    Width = 47
    Height = 13
    Caption = 'LastName'
  end
  object Label9: TLabel
    Left = 791
    Top = 8
    Width = 39
    Height = 13
    Caption = 'Address'
  end
  object Label10: TLabel
    Left = 791
    Top = 54
    Width = 49
    Height = 13
    Caption = 'City Name'
  end
  object Label11: TLabel
    Left = 791
    Top = 104
    Width = 94
    Height = 13
    Caption = 'City CountryRegion'
  end
  object Label8: TLabel
    Left = 791
    Top = 152
    Width = 33
    Height = 13
    Caption = 'Region'
  end
  object Label12: TLabel
    Left = 600
    Top = 152
    Width = 28
    Height = 13
    Caption = 'E-mail'
  end
  object DBGrid1: TDBGrid
    Left = 0
    Top = 248
    Width = 997
    Height = 289
    Align = alBottom
    DataSource = dsCliente
    Options = [dgTitles, dgIndicator, dgColumnResize, dgColLines, dgRowLines, dgTabs, dgConfirmDelete, dgCancelOnExit, dgTitleClick, dgTitleHotTrack]
    TabOrder = 0
    TitleFont.Charset = DEFAULT_CHARSET
    TitleFont.Color = clWindowText
    TitleFont.Height = -11
    TitleFont.Name = 'Tahoma'
    TitleFont.Style = []
    Columns = <
      item
        Expanded = False
        FieldName = 'UserName'
        Visible = True
      end
      item
        Expanded = False
        FieldName = 'FirstName'
        Visible = True
      end
      item
        Expanded = False
        FieldName = 'LastName'
        Visible = True
      end
      item
        Expanded = False
        FieldName = 'MiddleName'
        Visible = True
      end
      item
        Expanded = False
        FieldName = 'Gender'
        Visible = True
      end
      item
        Expanded = False
        FieldName = 'Age'
        Visible = True
      end
      item
        Expanded = False
        FieldName = 'FavoriteFeature'
        Visible = True
      end
      item
        Expanded = False
        FieldName = 'HomeAddress'
        Visible = True
      end>
  end
  object Button1: TButton
    Left = 8
    Top = 201
    Width = 75
    Height = 25
    Caption = 'Get'
    TabOrder = 11
    OnClick = Button1Click
  end
  object Button2: TButton
    Left = 453
    Top = 57
    Width = 98
    Height = 25
    Caption = 'Buscar Usuario'
    TabOrder = 12
    OnClick = Button2Click
  end
  object DBEdit1: TDBEdit
    Left = 8
    Top = 110
    Width = 249
    Height = 21
    DataField = 'UserName'
    DataSource = dsCliente
    Enabled = False
    TabOrder = 10
  end
  object Button3: TButton
    Left = 453
    Top = 108
    Width = 98
    Height = 25
    Caption = 'Delete Usuario'
    TabOrder = 13
    OnClick = Button3Click
  end
  object DBGrid2: TDBGrid
    Left = 0
    Top = 537
    Width = 997
    Height = 120
    Align = alBottom
    DataSource = dsAeroporto
    TabOrder = 14
    TitleFont.Charset = DEFAULT_CHARSET
    TitleFont.Color = clWindowText
    TitleFont.Height = -11
    TitleFont.Name = 'Tahoma'
    TitleFont.Style = []
    Columns = <
      item
        Expanded = False
        FieldName = 'Name'
        Visible = True
      end
      item
        Expanded = False
        FieldName = 'IcaoCode'
        Width = 64
        Visible = True
      end
      item
        Expanded = False
        FieldName = 'IataCode'
        Width = 64
        Visible = True
      end>
  end
  object Button4: TButton
    Left = 453
    Top = 146
    Width = 98
    Height = 25
    Caption = 'Buscar '
    TabOrder = 15
    OnClick = Button4Click
  end
  object edNome: TEdit
    Left = 8
    Top = 59
    Width = 273
    Height = 21
    TabOrder = 9
    Text = 'Henry'
  end
  object ed_UserName: TEdit
    Left = 600
    Top = 27
    Width = 185
    Height = 21
    TabOrder = 1
  end
  object ed_FirstName: TEdit
    Left = 600
    Top = 73
    Width = 185
    Height = 21
    TabOrder = 2
  end
  object ed_LastName: TEdit
    Left = 600
    Top = 123
    Width = 185
    Height = 21
    TabOrder = 3
  end
  object ed_Address: TEdit
    Left = 791
    Top = 27
    Width = 185
    Height = 21
    TabOrder = 5
  end
  object ed_City: TEdit
    Left = 791
    Top = 73
    Width = 185
    Height = 21
    TabOrder = 6
  end
  object ed_CountryRegion: TEdit
    Left = 791
    Top = 123
    Width = 185
    Height = 21
    TabOrder = 7
  end
  object Button5: TButton
    Left = 901
    Top = 217
    Width = 75
    Height = 25
    Caption = 'Adicionar'
    TabOrder = 16
    OnClick = Button5Click
  end
  object memo_Add: TMemo
    Left = 1192
    Top = 113
    Width = 185
    Height = 89
    Lines.Strings = (
      '{'
      '    "UserName":"<USER>",'
      '    "FirstName":"<NOME>",'
      '    "LastName":"<SOBRE>",'
      '    "Emails":['
      '        "<EMAIL>"'
      '    ],'
      '    "AddressInfo": ['
      '    {'
      '      "Address": "<ENDERECO>",'
      '      "City": {'
      '        "Name": "<CIDADE>",'
      '        "CountryRegion": "<PAIS>",'
      '        "Region": "<ID>"'
      '      }'
      '    }'
      '    ]'
      '}')
    TabOrder = 17
    Visible = False
  end
  object ed_Region: TEdit
    Left = 791
    Top = 171
    Width = 185
    Height = 21
    TabOrder = 8
  end
  object ed_email: TEdit
    Left = 600
    Top = 171
    Width = 185
    Height = 21
    TabOrder = 4
  end
  object Memo_base: TMemo
    Left = 1192
    Top = 18
    Width = 185
    Height = 89
    Lines.Strings = (
      '{'
      '    "UserName":"<USER>",'
      '    "FirstName":"<NOME>",'
      '    "LastName":"<SOBRE>",'
      '    "Emails":['
      '        "<EMAIL>"'
      '    ],'
      '    "AddressInfo": ['
      '    {'
      '      "Address": "<ENDERECO>",'
      '      "City": {'
      '        "Name": "<CIDADE>",'
      '        "CountryRegion": "<PAIS>",'
      '        "Region": "<ID>"'
      '      }'
      '    }'
      '    ]'
      '}')
    TabOrder = 18
    Visible = False
  end
  object dsCliente: TDataSource
    DataSet = DM.cdsCliente
    Left = 912
    Top = 552
  end
  object dsAeroporto: TDataSource
    DataSet = DM.cdsAeroporto
    Left = 912
    Top = 616
  end
end
