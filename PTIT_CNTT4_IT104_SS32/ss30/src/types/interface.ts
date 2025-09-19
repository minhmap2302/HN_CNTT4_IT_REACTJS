export type Person = {
  id: number | null;
  name: string;
  gender: string;
  date: string;
  address: string;
};
export type Action={type:"ADD",payload:Person}
export type Actionnumber={type:"incree"}|{type:"decree"}
export type ActionRandom={type:"ADDNUMBER"}
export type ActionChange={type:"Change"}
export type ActionToogle={type:"toogle"}