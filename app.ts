import { BonusAccount } from "./class/BonusAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
peopleAccount.deposit(100);
peopleAccount.withdraw(50);

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
companyAccount.deposit(200);
companyAccount.getLoan(500);

const bonusAccount: BonusAccount = new BonusAccount("Bonus", 30);
bonusAccount.deposit(100);

console.log("Saldo PeopleAccount:", peopleAccount.getBalance());
console.log("Saldo CompanyAccount:", companyAccount.getBalance());
console.log("Saldo BonusAccount:", bonusAccount.getBalance());
