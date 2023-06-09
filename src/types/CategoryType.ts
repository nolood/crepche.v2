export type SubCategoryType = {
  id: string,
  title: string,
}

export type CategoryType = {
  id: string,
  title: string,
  subcategories?: SubCategoryType[]
}
