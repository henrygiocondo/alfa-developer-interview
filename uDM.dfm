object DM: TDM
  OldCreateOrder = False
  Height = 522
  Width = 697
  object cdsAeroporto: TClientDataSet
    Aggregates = <>
    Params = <>
    Left = 65
    Top = 24
    object cdsAeroportoName: TStringField
      FieldName = 'Name'
      Size = 50
    end
    object cdsAeroportoIcaoCode: TStringField
      FieldName = 'IcaoCode'
      Size = 50
    end
    object cdsAeroportoIataCode: TStringField
      FieldName = 'IataCode'
      Size = 50
    end
  end
  object RESTClientLista: TRESTClient
    BaseURL = 
      'https://services.odata.org/TripPinRESTierService/(S(gvydrytrrdk0' +
      '3nnxzikpgeha))/People'
    Params = <>
    Left = 545
    Top = 56
  end
  object RESTRequestLista: TRESTRequest
    AssignedValues = [rvConnectTimeout, rvReadTimeout]
    Client = RESTClientLista
    Params = <>
    Response = RESTResponseLista
    Left = 545
    Top = 120
  end
  object RESTResponseLista: TRESTResponse
    Left = 553
    Top = 192
  end
  object RESTClient: TRESTClient
    BaseURL = 
      'https://services.odata.org/TripPinRESTierService/People?$filter=' +
      'contains(UserName, '#39'Henry'#39')'
    Params = <>
    Left = 433
    Top = 56
  end
  object RESTRequestCliente: TRESTRequest
    AssignedValues = [rvConnectTimeout, rvReadTimeout]
    Client = RESTClient
    Params = <>
    Response = RESTResponseCliente
    Left = 433
    Top = 128
  end
  object RESTResponseCliente: TRESTResponse
    Left = 433
    Top = 192
  end
  object RESTClientDelete: TRESTClient
    BaseURL = 
      'https://services.odata.org/TripPinRESTierService/(S(gvydrytrrdk0' +
      '3nnxzikpgeha))/People('#39'javieralfred'#39')'
    Params = <>
    Left = 312
    Top = 64
  end
  object RESTRequestDelete: TRESTRequest
    AssignedValues = [rvConnectTimeout, rvReadTimeout]
    Client = RESTClientDelete
    Method = rmDELETE
    Params = <>
    Response = RESTResponseDelete
    Left = 312
    Top = 128
  end
  object RESTResponseDelete: TRESTResponse
    Left = 312
    Top = 192
  end
  object cdsCliente: TClientDataSet
    Aggregates = <>
    Params = <>
    Left = 65
    Top = 80
    object cdsClienteUserName: TStringField
      FieldName = 'UserName'
      Size = 50
    end
    object cdsClienteFirstName: TStringField
      FieldName = 'FirstName'
      Size = 50
    end
    object cdsClienteLastName: TStringField
      FieldName = 'LastName'
      Size = 50
    end
    object cdsClienteMiddleName: TStringField
      FieldName = 'MiddleName'
      Size = 50
    end
    object cdsClienteGender: TStringField
      FieldName = 'Gender'
      Size = 50
    end
    object cdsClienteAge: TStringField
      FieldName = 'Age'
      Size = 50
    end
    object cdsClienteFavoriteFeature: TStringField
      FieldName = 'FavoriteFeature'
      Size = 50
    end
    object cdsClienteHomeAddress: TStringField
      FieldName = 'HomeAddress'
      Size = 100
    end
  end
  object RESTClientAeroporto: TRESTClient
    BaseURL = 
      'https://services.odata.org/TripPinRESTierService/(S(gvydrytrrdk0' +
      '3nnxzikpgeha))/Airports?$filter=contains(Location/Address, '#39'Dist' +
      'rict'#39')'
    Params = <>
    Left = 552
    Top = 256
  end
  object RESTRequestAeroporto: TRESTRequest
    AssignedValues = [rvConnectTimeout, rvReadTimeout]
    Client = RESTClientAeroporto
    Params = <>
    Response = RESTResponseAeroporto
    Left = 552
    Top = 320
  end
  object RESTResponseAeroporto: TRESTResponse
    Left = 552
    Top = 384
  end
  object RESTNovoClient: TRESTClient
    BaseURL = 
      'https://services.odata.org/TripPinRESTierService/(S(gvydrytrrdk0' +
      '3nnxzikpgeha))/People'
    Params = <>
    Left = 304
    Top = 248
  end
  object RESTNovoRequest: TRESTRequest
    AssignedValues = [rvConnectTimeout, rvReadTimeout]
    Client = RESTNovoClient
    Method = rmPOST
    Params = <
      item
        Kind = pkREQUESTBODY
        Name = 'body'
        Options = [poDoNotEncode]
        ContentType = ctAPPLICATION_JSON
      end>
    Response = RESTNovoResponse
    Left = 304
    Top = 304
  end
  object RESTNovoResponse: TRESTResponse
    Left = 304
    Top = 368
  end
  object cdsEmails: TClientDataSet
    Aggregates = <>
    Params = <>
    Left = 64
    Top = 136
    object cdsEmailsUserName: TStringField
      FieldName = 'UserName'
      Size = 50
    end
    object cdsEmailsEmails: TStringField
      FieldName = 'Emails'
      Size = 50
    end
  end
end
