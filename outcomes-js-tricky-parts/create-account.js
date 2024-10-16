function createAccount(pin, amount = 0) {
    let balance = amount;
  
    return {
      checkBalance(enteredPin) {
        if (enteredPin !== pin) return "Invalid PIN.";
        return `$${balance}`;
      },
      deposit(enteredPin, depositAmount) {
        if (enteredPin !== pin) return "Invalid PIN.";
        balance += depositAmount;
        return `Successfully deposited $${depositAmount}. Current balance: $${balance}.`;
      },
      withdraw(enteredPin, withdrawalAmount) {
        if (enteredPin !== pin) return "Invalid PIN.";
        if (withdrawalAmount > balance) {
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        }
        balance -= withdrawalAmount;
        return `Successfully withdrew $${withdrawalAmount}. Current balance: $${balance}.`;
      },
      changePin(enteredPin, newPin) {
        if (enteredPin !== pin) return "Invalid PIN.";
        pin = newPin;
        return "PIN successfully changed!";
      }
    };
  }
  
  module.exports = { createAccount };