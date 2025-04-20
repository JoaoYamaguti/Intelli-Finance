export interface ITarget {
  description: string
  years: number
  valor: number
}

export interface IExpense {
  description: string
  valor: number
}

export interface IProfile {
  name: string
  salary: number
  investmentIntention: number
  targets: Array<ITarget>
  expenses: Array<IExpense>
}
