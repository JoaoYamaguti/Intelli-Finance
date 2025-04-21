export interface ITarget {
  description: string
  years: number
  valor: number
}

export interface IFixedExpense {
  description: string
  valor: number
}

export interface IProfile {
  name: string
  salary: number
  investmentIntention: number
  targets: Array<ITarget>
  fixedExpenses: Array<IFixedExpense>
}
