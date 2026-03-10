import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (value: number): void => {
    if (value <= 0) {
      throw new Error("Valor de emprestimo invalido");
    }

    if (this.validateStatus()) {
      this.addBalance(value);
      console.log("Voce pegou um empréstimo");
    }
  };
}
