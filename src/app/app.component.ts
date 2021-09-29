import { Component, OnInit } from '@angular/core';
import * as pbi from 'powerbi-client'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
   // this.getReports();
  }
  title = 'NewPoc';

  // getReports() {
  //   const config = {
  //     type: 'report',
  //     uniqueId: "d8dfbf0d-ba74-4e1f-9c5b-15be1da7a6c4",
  //    clientId:"6aef099b-0e49-44d0-a0b0-c8eef60e63e6",
  //    tenantId:"ebd95286-551e-4b34-9fef-60b74293d1f9",
  //    id:"d558939d-2f22-4ddb-83cb-a8db4c56cadd",
  //     embedUrl: "https://app.powerbi.com/groups/acf46c35-ec2d-4782-8fc9-1f362da73a35/reports/d558939d-2f22-4ddb-83cb-a8db4c56cadd/ReportSection",
  //     accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCIsImtpZCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNzBmNjcwMTgtZmEwNS00ZDc5LWE0MWQtNTJjN2Y0YTExZDRkLyIsImlhdCI6MTYzMjgyMjQ3OSwibmJmIjoxNjMyODIyNDc5LCJleHAiOjE2MzI4MjYzNzksImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFVbUpGUHJLNTBKMExDMDFKdmJQN21RRDVqbTJvMDJDTnN1MmhPKytWT3NOaXlPYjJ6dUNNS3JWV21MVzF2ZUtOIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6IjIzZDhmNmJkLTFlYjAtNGNjMi1hMDhjLTdiZjUyNWM2N2JjZCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiLiIsImdpdmVuX25hbWUiOiJBbnVyYWciLCJpcGFkZHIiOiIxMDMuNDcuMzUuODgiLCJuYW1lIjoiQW51cmFnIC4iLCJvaWQiOiI2OTQ4MTlmZC02YjcwLTQwOTUtOTUwMi1mMmQ4ODdlMjMzNzQiLCJwdWlkIjoiMTAwMzIwMDE3QzJFMUY1NiIsInJoIjoiMC5BWEVBR0hEMmNBWDZlVTJrSFZMSDlLRWRUYjMyMkNPd0hzSk1vSXg3OVNYR2U4MXhBRVUuIiwic2NwIjoiQXBwLlJlYWQuQWxsIENhcGFjaXR5LlJlYWQuQWxsIENhcGFjaXR5LlJlYWRXcml0ZS5BbGwgQ29udGVudC5DcmVhdGUgRGFzaGJvYXJkLlJlYWQuQWxsIERhc2hib2FyZC5SZWFkV3JpdGUuQWxsIERhdGFmbG93LlJlYWQuQWxsIERhdGFmbG93LlJlYWRXcml0ZS5BbGwgRGF0YXNldC5SZWFkLkFsbCBEYXRhc2V0LlJlYWRXcml0ZS5BbGwgR2F0ZXdheS5SZWFkLkFsbCBHYXRld2F5LlJlYWRXcml0ZS5BbGwgUGlwZWxpbmUuRGVwbG95IFBpcGVsaW5lLlJlYWQuQWxsIFBpcGVsaW5lLlJlYWRXcml0ZS5BbGwgUmVwb3J0LlJlYWQuQWxsIFJlcG9ydC5SZWFkV3JpdGUuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWQuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWRXcml0ZS5BbGwgVGVuYW50LlJlYWQuQWxsIFRlbmFudC5SZWFkV3JpdGUuQWxsIFVzZXJTdGF0ZS5SZWFkV3JpdGUuQWxsIFdvcmtzcGFjZS5SZWFkLkFsbCBXb3Jrc3BhY2UuUmVhZFdyaXRlLkFsbCIsInN1YiI6IkEtMDVVRC1QWHA3Z05raWpfaVJjQXhtREZ1M3poRU1lLVhoMlpSZnRjRVUiLCJ0aWQiOiI3MGY2NzAxOC1mYTA1LTRkNzktYTQxZC01MmM3ZjRhMTFkNGQiLCJ1bmlxdWVfbmFtZSI6InloaGpnY2NjYnpueHd1dnd3bEB0YmJ5dC5uZXQiLCJ1cG4iOiJ5aGhqZ2NjY2J6bnh3dXZ3d2xAdGJieXQubmV0IiwidXRpIjoiQ05CbFB6ZnRkRTZkdXM2Ym1sVjNBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.d7U06b4UikaM1T8qEBriG__8htr0J1xunKmvXcefJAT0FDh_DNtngvgADsjA2VfQO5XtMANQNSMmPx8MK8ThZXkmHZTxsq5vN2jr0CfZZSuIjqsl15F13ZHaA3yUcdTTPbyS9M4pqx9qqYc0UhFSiKcckhNK3sgSnT3WukQpbBmv8gzsOwg8sbSwZhkbvTxmeMYQd9khYN9Z4r-EU4L0lyo9UN9KzeEoP6j_zZ-F5bQhJBhv-l2JzzSWYTE7tNqWXl1BHsbvHqxrmuZnMKLprBa3ZUcnMvfHvB2Bf9SLKETHOM6rE3a-Bssm8ZBPZfyagjrOCd_8eNOR6kp3m6COyA'
  //   };

  //   const reportsContainer = <HTMLElement>document.getElementById(
  //     'reportsContainer'
  //   );
  //   const powerbi = new pbi.service.Service(
  //     pbi.factories.hpmFactory,
  //     pbi.factories.wpmpFactory,
  //     pbi.factories.routerFactory
  //   );
  //   const report = powerbi.embed(
  //     reportsContainer,
  //     config
  //   );

  //   // Report.off removes a given event handler if it exists.
  //   report.off('loaded');
  //   // Report.on will add an event handler which prints to Log window.
  //   report.on('loaded', function() {
  //     console.log('Loaded');
  //   });

  //   report.off('pageChanged');
  //   report.on('pageChanged', e => {
  //     console.log(e);
  //   });

  //   report.on('error', function(event) {
  //     console.log(event.detail);
  //     report.off('error');
  // });
  //}

  embedConfig = {
    type: "report",
   // id:"6aef099b-0e49-44d0-a0b0-c8eef60e63e6",
    id: "d558939d-2f22-4ddb-83cb-a8db4c56cadd",
    embedUrl: "https://app.powerbi.com/groups/acf46c35-ec2d-4782-8fc9-1f362da73a35/reports/d558939d-2f22-4ddb-83cb-a8db4c56cadd/ReportSection",
    accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCIsImtpZCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNzBmNjcwMTgtZmEwNS00ZDc5LWE0MWQtNTJjN2Y0YTExZDRkLyIsImlhdCI6MTYzMjQ1NTcwOCwibmJmIjoxNjMyNDU1NzA4LCJleHAiOjE2MzI0NTk2MDgsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUF6UGw3T0U1enhyYmZxWngxRFliRDdzMnNBeTcvSFh6cHorTmdXejhQeWNPSzNEYVNRSGozN0tRR2xCcTV1Z0FnIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6IjIzZDhmNmJkLTFlYjAtNGNjMi1hMDhjLTdiZjUyNWM2N2JjZCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiLiIsImdpdmVuX25hbWUiOiJBbnVyYWciLCJpcGFkZHIiOiIxMDMuNDcuMzUuODgiLCJuYW1lIjoiQW51cmFnIC4iLCJvaWQiOiI2OTQ4MTlmZC02YjcwLTQwOTUtOTUwMi1mMmQ4ODdlMjMzNzQiLCJwdWlkIjoiMTAwMzIwMDE3QzJFMUY1NiIsInJoIjoiMC5BWEVBR0hEMmNBWDZlVTJrSFZMSDlLRWRUYjMyMkNPd0hzSk1vSXg3OVNYR2U4MXhBRVUuIiwic2NwIjoiQXBwLlJlYWQuQWxsIENhcGFjaXR5LlJlYWQuQWxsIENhcGFjaXR5LlJlYWRXcml0ZS5BbGwgQ29udGVudC5DcmVhdGUgRGFzaGJvYXJkLlJlYWQuQWxsIERhc2hib2FyZC5SZWFkV3JpdGUuQWxsIERhdGFmbG93LlJlYWQuQWxsIERhdGFmbG93LlJlYWRXcml0ZS5BbGwgRGF0YXNldC5SZWFkLkFsbCBEYXRhc2V0LlJlYWRXcml0ZS5BbGwgR2F0ZXdheS5SZWFkLkFsbCBHYXRld2F5LlJlYWRXcml0ZS5BbGwgUGlwZWxpbmUuRGVwbG95IFBpcGVsaW5lLlJlYWQuQWxsIFBpcGVsaW5lLlJlYWRXcml0ZS5BbGwgUmVwb3J0LlJlYWQuQWxsIFJlcG9ydC5SZWFkV3JpdGUuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWQuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWRXcml0ZS5BbGwgVGVuYW50LlJlYWQuQWxsIFRlbmFudC5SZWFkV3JpdGUuQWxsIFVzZXJTdGF0ZS5SZWFkV3JpdGUuQWxsIFdvcmtzcGFjZS5SZWFkLkFsbCBXb3Jrc3BhY2UuUmVhZFdyaXRlLkFsbCIsInN1YiI6IkEtMDVVRC1QWHA3Z05raWpfaVJjQXhtREZ1M3poRU1lLVhoMlpSZnRjRVUiLCJ0aWQiOiI3MGY2NzAxOC1mYTA1LTRkNzktYTQxZC01MmM3ZjRhMTFkNGQiLCJ1bmlxdWVfbmFtZSI6InloaGpnY2NjYnpueHd1dnd3bEB0YmJ5dC5uZXQiLCJ1cG4iOiJ5aGhqZ2NjY2J6bnh3dXZ3d2xAdGJieXQubmV0IiwidXRpIjoiTWJQQWM4WHp5RUthaFI2SkxkRTlBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.QwWh8NK33XozI4A5yGUqornb-zP4IqNjqDB-K6pyoSNeW9mo-ongTtf69Zw2STJK_DH6BocpN8I5whuuHnfvACP-9672Xb3Ek2G018m24qBpdcOkwtT84DC1jowHr8s9qfwr3iJ9bRwYiR0LmyFkA0uPG8jrPOacycrZsS5jS6R0RXyNZxlJ2UPF6ACLYsjopsgXLSjHeCSwXb7kCSpc6w5nKJM4OM_ljPgCSwpkNUWpoQgVQRxYJfNWwoTw_JHljbj7obEsCLBJAjoIh7xV9dVuTQDRSet8Or5GGe7x3OYgbMBAp-dJHVna9koKozI6qBXixt-L2mNb78nUIwG4Zw",
  //  tokenType: models.TokenType.Embed,
    settings: {
        panes: {
            filters: {
                expanded: false,
                visible: true
            }
        },
      //  background: models.BackgroundType.Transparent,
    }
}

}
