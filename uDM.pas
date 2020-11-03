unit uDM;

interface

uses
  System.SysUtils, System.Classes, REST.Types, REST.Client, Data.Bind.Components, Data.Bind.ObjectScope, Data.DB, Datasnap.DBClient;

type
  TDM = class(TDataModule)
    cdsAeroporto: TClientDataSet;
    cdsAeroportoName: TStringField;
    cdsAeroportoIcaoCode: TStringField;
    cdsAeroportoIataCode: TStringField;
    RESTClientLista: TRESTClient;
    RESTRequestLista: TRESTRequest;
    RESTResponseLista: TRESTResponse;
    RESTClient: TRESTClient;
    RESTRequestCliente: TRESTRequest;
    RESTResponseCliente: TRESTResponse;
    RESTClientDelete: TRESTClient;
    RESTRequestDelete: TRESTRequest;
    RESTResponseDelete: TRESTResponse;
    cdsCliente: TClientDataSet;
    cdsClienteUserName: TStringField;
    cdsClienteFirstName: TStringField;
    cdsClienteLastName: TStringField;
    cdsClienteMiddleName: TStringField;
    cdsClienteGender: TStringField;
    cdsClienteAge: TStringField;
    cdsClienteFavoriteFeature: TStringField;
    cdsClienteHomeAddress: TStringField;
    RESTClientAeroporto: TRESTClient;
    RESTRequestAeroporto: TRESTRequest;
    RESTResponseAeroporto: TRESTResponse;
    RESTNovoClient: TRESTClient;
    RESTNovoRequest: TRESTRequest;
    RESTNovoResponse: TRESTResponse;
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  DM: TDM;

implementation

{%CLASSGROUP 'Vcl.Controls.TControl'}

{$R *.dfm}

end.
