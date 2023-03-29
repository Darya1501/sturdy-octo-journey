export interface EmptyRow {
  parrent: number | null,
  type: 'level' | 'row'
}

export interface NewRowData {
  title: string // Наименование работ
  unit: string // Ед. изм.
  quantity: number // Количество
  unitPrice: number // Цена за ед.
  price: number // Стоимость

  parent: number | null // id уровня, в котором находится (либо null для первого уровня)
  type: 'level' | 'row'
}

export interface RowData extends NewRowData {
  id: number
}