export type EnigmaRequest = {
  message: string,
  setting: EnigmaSetting
}

export type EnigmaSetting = {
  rotors: RotorSetting[],
  plugBoard: PlugBoardConnect[]
}

type RotorSetting = {
  scramblerId: number,
  initialRotate: number
}

type PlugBoardConnect = {
  from: string,
  to: string
}


