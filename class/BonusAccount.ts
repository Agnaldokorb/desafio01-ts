import { DioAccount } from "./DioAccount";

export class BonusAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number): void => {
    if (value <= 0) {
      throw new Error("Valor de deposito invalido");
    }

    if (this.validateStatus()) {
      this.addBalance(value + 10);
      console.log("Voce depositou com bonus de 10");
    }
  };
}
