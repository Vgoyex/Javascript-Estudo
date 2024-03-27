function anything(br: unknown) {
  return br;
}

let ff: (x: any) => any = (x: number) => {
  return x;
};

//*        |        key    value  |
let object: Record<string, string> = {
  key: "value",
};

let object2: { [key: string]: string } = {
  keyy: "",
};

let req: { [key: string]:any } = {
  body: "",
  a: "1",
};

req.b = 1;
