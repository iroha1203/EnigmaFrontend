import { Component, Input, signal, WritableSignal } from '@angular/core';
import { EnigmaSetting } from "../../models/enigma";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  @Input() $enigmaSetting: WritableSignal<EnigmaSetting> = signal<EnigmaSetting>({
    rotors: [
      {scramblerId: 0, initialRotate: 0},
      {scramblerId: 0, initialRotate: 0},
      {scramblerId: 0, initialRotate: 0}
    ],
    plugBoard: []
  });

  setScramblerId(idx: number, event: any) {
    this.$enigmaSetting.mutate(setting => {
      setting.rotors[idx].scramblerId = event.target.selectedIndex;
    });
  }

  setInitialState(idx: number, event: any) {
    this.$enigmaSetting.mutate(setting => {
      setting.rotors[idx].initialRotate = parseInt(event.target.value);
    });
  }
}
