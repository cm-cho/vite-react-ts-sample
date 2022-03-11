/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createReceipt = /* GraphQL */ `
  mutation CreateReceipt(
    $input: CreateReceiptInput!
    $condition: ModelReceiptConditionInput
  ) {
    createReceipt(input: $input, condition: $condition) {
      id
      shopName
      posID
      date
      items
      subTotal
      received
      change
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateReceipt = /* GraphQL */ `
  mutation UpdateReceipt(
    $input: UpdateReceiptInput!
    $condition: ModelReceiptConditionInput
  ) {
    updateReceipt(input: $input, condition: $condition) {
      id
      shopName
      posID
      date
      items
      subTotal
      received
      change
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteReceipt = /* GraphQL */ `
  mutation DeleteReceipt(
    $input: DeleteReceiptInput!
    $condition: ModelReceiptConditionInput
  ) {
    deleteReceipt(input: $input, condition: $condition) {
      id
      shopName
      posID
      date
      items
      subTotal
      received
      change
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
