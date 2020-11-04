unit uPrincipal;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, REST.Types, Data.DB, Datasnap.DBClient, Vcl.Grids, Vcl.DBGrids,
  REST.Client, Data.Bind.Components, Data.Bind.ObjectScope, System.JSON, Vcl.StdCtrls, Vcl.Mask, Vcl.DBCtrls, Vcl.ComCtrls, Vcl.Buttons;

type
  TFormPrincipal = class(TForm)
    DBGrid1: TDBGrid;
    dsCliente: TDataSource;
    Button1: TButton;
    Button2: TButton;
    Label1: TLabel;
    Label2: TLabel;
    DBEdit1: TDBEdit;
    Label3: TLabel;
    Button3: TButton;
    DBGrid2: TDBGrid;
    dsAeroporto: TDataSource;
    Button4: TButton;
    Label4: TLabel;
    edNome: TEdit;
    ed_UserName: TEdit;
    Label5: TLabel;
    Label6: TLabel;
    ed_FirstName: TEdit;
    Label7: TLabel;
    ed_LastName: TEdit;
    Label9: TLabel;
    ed_Address: TEdit;
    Label10: TLabel;
    ed_City: TEdit;
    Label11: TLabel;
    ed_CountryRegion: TEdit;
    Button5: TButton;
    memo_Add: TMemo;
    Label8: TLabel;
    ed_Region: TEdit;
    Label12: TLabel;
    ed_email: TEdit;
    Memo_base: TMemo;
    PageControl1: TPageControl;
    TabLista: TTabSheet;
    TabEmail: TTabSheet;
    SpeedButton1: TSpeedButton;
    DBGrid3: TDBGrid;
    dsEmail: TDataSource;
    procedure Button1Click(Sender: TObject);
    procedure FormCreate(Sender: TObject);
    procedure FormClose(Sender: TObject; var Action: TCloseAction);
    procedure Button2Click(Sender: TObject);
    procedure Button3Click(Sender: TObject);
    procedure Button4Click(Sender: TObject);
    procedure Button5Click(Sender: TObject);
    procedure FormShow(Sender: TObject);
    procedure PageControl1Change(Sender: TObject);
  private
    { Private declarations }
    procedure addCliente(UserName, FirstName, LastName, MiddleName, Gender, Age, FavoriteFeature, HomeAddress : String);
    procedure addAero(Name, IcaoCode, IataCode: String);
  public
    { Public declarations }
    TamanhoJson : Integer;

  end;

var
  FormPrincipal: TFormPrincipal;

implementation

{$R *.dfm}

uses uDM;

procedure TFormPrincipal.addAero(Name, IcaoCode, IataCode: String);
begin
  DM.cdsAeroporto.Insert;
  DM.cdsAeroportoName.AsString        := Name;
  DM.cdsAeroportoIcaoCode.AsString    := IcaoCode;
  DM.cdsAeroportoIataCode.AsString    := IataCode;
  DM.cdsAeroporto.Post;
end;

procedure TFormPrincipal.addCliente(UserName, FirstName, LastName, MiddleName, Gender, Age, FavoriteFeature, HomeAddress: String);
begin
  DM.cdsCliente.Insert;
  DM.cdsClienteUserName.AsString            := UserName;
  DM.cdsClienteFirstName.AsString           := FirstName;
  DM.cdsClienteLastName.AsString            := LastName;
  DM.cdsClienteMiddleName.AsString          := MiddleName;
  DM.cdsClienteGender.AsString              := Gender;
  DM.cdsClienteAge.AsString                 := Age;
  DM.cdsClienteAge.AsString                 := FavoriteFeature;
  DM.cdsClienteHomeAddress.AsString         := HomeAddress;
  DM.cdsCliente.Post;
end;

procedure TFormPrincipal.Button1Click(Sender: TObject);
begin
      TThread.CreateAnonymousThread(procedure
      begin
        DM.RESTRequestLista.Execute;

        TThread.Synchronize(nil, procedure
        var
          i, l : integer;
          Json, UserName, FirstName, LastName, MiddleName, Gender, Age, FavoriteFeature, HomeAddress, email1, email2: string;
          jv: TJSONValue;
          ja, aJsonEmail: TJSONArray;
          jsonObj, jSubObj, oJson: TJsonObject;
        begin
          DM.cdsCliente.EmptyDataSet;
          DM.cdsEmails.EmptyDataSet;

          Json := DM.RESTRequestLista.Response.JSONValue.ToString;
          jsonObj := TJsonObject.ParseJSONValue(TEncoding.UTF8.GetBytes(Json), 0) as TJsonObject;
          jv := jsonObj.Get('value').JsonValue;
          ja := jv as TJSONArray;
          TamanhoJson  := ja.Size - 1;

          for i := 0 to ja.Size - 1 do
          begin

            UserName                := Ja.Get(i).GetValue<string>('UserName');
            FirstName               := Ja.Get(i).GetValue<string>('FirstName');
            LastName                := Ja.Get(i).GetValue<string>('LastName');
            MiddleName              := Ja.Get(i).GetValue<string>('MiddleName');
            Gender                  := Ja.Get(i).GetValue<string>('Gender');
            Age                     := Ja.Get(i).GetValue<string>('Age');
            FavoriteFeature         := Ja.Get(i).GetValue<string>('FavoriteFeature');
            HomeAddress             := '';

            oJson := ja.Items[i] as TJSONObject;
            aJsonEmail := oJson.Get('Emails').JsonValue as TJSONArray;

            for l := 0 to aJsonEmail.Count - 1 do
            begin
              DM.cdsEmails.insert;
              DM.cdsEmailsUserName.value   := UserName;
              DM.cdsEmailsEmails.Value     := aJsonEmail.Items[l].Value;
              DM.cdsEmails.post;
            end;
            addCliente(UserName, FirstName, LastName, MiddleName, Gender, Age, FavoriteFeature, HomeAddress);
          end;

        end);
      end).Start;
end;

procedure TFormPrincipal.Button2Click(Sender: TObject);
Var
  Endeco, nome, url : String;
begin
      TThread.CreateAnonymousThread(procedure
      begin
        url := 'https://services.odata.org/TripPinRESTierService/(S(gvydrytrrdk03nnxzikpgeha))/People?$filter=contains(UserName, ' + QuotedStr(edNome.text) +')';
        Dm.RESTClient.BaseURL := url;
        DM.RESTRequestCliente.Execute;

        TThread.Synchronize(nil, procedure
        var
          i : integer;
          Json, UserName, FirstName, LastName, MiddleName, Gender, Age, FavoriteFeature, HomeAddress, email1, email2: string;
          jv, LItem: TJSONValue;
          ja: TJSONArray;
          valor: Float64;
          jsonObj, jSubObj: TJsonObject;
        begin
          DM.cdsCliente.EmptyDataSet;
          Json := DM.RESTRequestCliente.Response.JSONValue.ToString;
          jsonObj := TJsonObject.ParseJSONValue(TEncoding.UTF8.GetBytes(Json), 0) as TJsonObject;
          jv := jsonObj.Get('value').JsonValue;
          ja := jv as TJSONArray;
          TamanhoJson  := ja.Size - 1;

            for i := 0 to ja.Size - 1 do
            begin
              UserName                := Ja.Get(i).GetValue<string>('UserName');
              FirstName               := Ja.Get(i).GetValue<string>('FirstName');
              LastName                := Ja.Get(i).GetValue<string>('LastName');
              MiddleName              := '';
              Gender                  := '';
              Age                     := '';
              FavoriteFeature         := '';
              HomeAddress             := '';
              addCliente(UserName, FirstName, LastName, MiddleName, Gender, Age, FavoriteFeature, HomeAddress);
            end;
        end);
      end).Start;
end;

procedure TFormPrincipal.Button3Click(Sender: TObject);
var
  url, field: String;
begin

  if DM.cdsCliente.RecordCount <= 0 then
  begin
    ShowMessage('Nenhum cliente selecionado!');
    abort;
  end;


  Try
    field := DM.cdsClienteUserName.AsString;
    url := 'https://services.odata.org/TripPinRESTierService/(S(gvydrytrrdk03nnxzikpgeha))/People(' + QuotedStr(DM.cdsClienteUserName.AsString) +  ')';

    Dm.RESTClientDelete.BaseURL := url;
    DM.RESTRequestDelete.Execute;
    ShowMessage('Usuário: ' + field +' removido com Sucesso!');
    Button1.OnClick(Sender);
  Except
  on E: Exception do
    ShowMessage('Erro: ' + E.Message );
  end;

end;

procedure TFormPrincipal.Button4Click(Sender: TObject);
begin
    TThread.CreateAnonymousThread(procedure
      begin
        DM.RESTRequestAeroporto.Execute;

        TThread.Synchronize(nil, procedure
        var
          i : integer;
          Json, Name, IcaoCode, IataCode: string;
          jv, LItem: TJSONValue;
          ja: TJSONArray;
          valor: Float64;
          jsonObj, jSubObj: TJsonObject;
        begin
          DM.cdsAeroporto.EmptyDataSet;
          Json := DM.RESTRequestAeroporto.Response.JSONValue.ToString;
          jsonObj := TJsonObject.ParseJSONValue(TEncoding.UTF8.GetBytes(Json), 0) as TJsonObject;
          jv := jsonObj.Get('value').JsonValue;
          ja := jv as TJSONArray;
          TamanhoJson  := ja.Size - 1;

          for i := 0 to ja.Size - 1 do
          begin

            Name                    := Ja.Get(i).GetValue<string>('Name');
            IcaoCode                := Ja.Get(i).GetValue<string>('IcaoCode');
            IataCode                := Ja.Get(i).GetValue<string>('IataCode');

            addAero(Name, IcaoCode, IataCode);
          end;

        end);
      end).Start;
end;

procedure TFormPrincipal.Button5Click(Sender: TObject);
Var
  Memo : String;
begin
    memo_Add.Lines := Memo_base.Lines;
   try
        with dm.RESTNovoRequest.Params.AddItem do
        begin
          ContentType := ctAPPLICATION_JSON;
          name := 'param'; // param name

          memo := memo_Add.Text;
          memo := StringReplace(memo, '<USER>',     ed_UserName.Text, [rfReplaceAll]);
          memo := StringReplace(memo, '<NOME>',     ed_FirstName.Text, [rfReplaceAll]);
          memo := StringReplace(memo, '<SOBRE>',    ed_LastName.Text, [rfReplaceAll]);
          memo := StringReplace(memo, '<EMAIL>',    ed_email.Text, [rfReplaceAll]);
          memo := StringReplace(memo, '<ENDERECO>', ed_Address.Text, [rfReplaceAll]);
          memo := StringReplace(memo, '<CIDADE>',   ed_City.Text, [rfReplaceAll]);
          memo := StringReplace(memo, '<PAIS>',     ed_CountryRegion.Text, [rfReplaceAll]);
          memo := StringReplace(memo, '<ID>',       ed_Region.Text, [rfReplaceAll]);

          value := memo;
          Kind := pkREQUESTBODY;
          dm.RESTNovoRequest.Execute;
        end;


        ed_UserName.Text      := '';
        ed_FirstName.Text     := '';
        ed_LastName.Text      := '';
        ed_email.Text         := '';
        ed_Address.Text       := '';
        ed_City.Text          := '';
        ed_CountryRegion.Text := '';
        ed_Region.Text        := '';

        Button1.OnClick(sender);
      except on E: Exception do
         ShowMessage('Erro: ' + E.Message );
   end;
end;

procedure TFormPrincipal.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  DM.cdsCliente.Close;
  dm.cdsAeroporto.Close;
  DM.cdsEmails.Close;
end;

procedure TFormPrincipal.FormCreate(Sender: TObject);
begin
  DM.cdsCliente.CreateDataSet;
  dm.cdsAeroporto.CreateDataSet;
  DM.cdsEmails.CreateDataSet;
  DM.cdsCliente.Open;
  dm.cdsAeroporto.Open;
  DM.cdsEmails.Open;
end;

procedure TFormPrincipal.FormShow(Sender: TObject);
begin
  PageControl1.ActivePage := TabLista;
end;

procedure TFormPrincipal.PageControl1Change(Sender: TObject);
begin
  if PageControl1.ActivePage = TabEmail then
  begin
    if dm.cdsCliente.RecordCount <= 0 then
    begin
      PageControl1.ActivePage := TabLista;
      abort;
    end;
    dm.cdsEmails.Filtered := false;
    dm.cdsEmails.Filter := 'UserName LIKE ''%' + dm.cdsClienteUserName.Value + '%''';
    dm.cdsEmails.Filtered := true;
  end;
end;

end.
