import { Component, signal, WritableSignal } from '@angular/core';
import { HttpRequestService } from "../../services/http-request.service";
import { EnigmaSetting } from "../../models/enigma";

@Component({
  selector: 'app-enigma',
  templateUrl: './enigma.component.html',
  styleUrls: ['./enigma.component.css']
})
export class EnigmaComponent {
  $enigmaSetting: WritableSignal<EnigmaSetting> = signal<EnigmaSetting>({
    rotors: [
      {scramblerId: 0, initialRotate: 0},
      {scramblerId: 0, initialRotate: 0},
      {scramblerId: 0, initialRotate: 0}
    ],
    plugBoard: [
      {from: "A", to: "B"},
      {from: "C", to: "D"},
      {from: "E", to: "F"},
    ]
  });
  $message: WritableSignal<string> = signal("");
  $cypher: WritableSignal<string> = signal("");

  constructor(private httpRequestService: HttpRequestService) {
  }

  sendEnigma() {
    const regex: RegExp = /^[a-zA-Z\s]*$/;
    if (!regex.test(this.$message())) {
      window.alert("半角アルファベットで入力してください");
      return;
    }

    this.httpRequestService
      .postEnigma({
        message: this.$message(),
        setting: this.$enigmaSetting()
      })
      .then(d => {
        this.$cypher.set(d);
      });
  }
}
