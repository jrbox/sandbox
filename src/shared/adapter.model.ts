export interface Adapter<Input, Output> {
  adapt: (input: Input) => Output;
  adaptArray?: (input: Input[]) => Output[];
}
