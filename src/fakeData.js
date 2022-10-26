import { faker } from '@faker-js/faker'
import { TRANSACTION_STATUS, USER_STATUS } from './config'
import { formatCurrency } from './utils'

// FAKE DATA user
export let userRows = []

for (let i = 0; i < 50; i++) {
  userRows.push({
    id: `#${faker.random.numeric(5)}`,
    username: faker.internet.userName(),
    img: faker.internet.avatar(),
    status:
      USER_STATUS[
        Object.keys(USER_STATUS)[
          Math.floor(Math.random() * Object.keys(USER_STATUS).length)
        ]
      ],
    email: faker.internet.exampleEmail(),
    age: faker.datatype.number({ min: 18, max: 100 }),
  })
}

// FAKE DATA table
function createData(
  id,
  productImg,
  productName,
  customer,
  date,
  amount,
  paymentMethod,
  status
) {
  return { id, productImg, productName, customer, date, amount, paymentMethod, status }
}

export let tableRows = []

for (let i = 0; i < 50; i++) {
  tableRows.push(
    createData(
      `#${faker.random.numeric(5)}`,
      faker.image.fashion(40, 40, true),
      faker.commerce.product(),
      faker.name.fullName(),
      faker.date.past().toLocaleDateString(),
      formatCurrency(faker.commerce.price(5, 10000, 2)),
      faker.finance.transactionType(),
      TRANSACTION_STATUS[
        Object.keys(TRANSACTION_STATUS)[
          Math.floor(Math.random() * Object.keys(TRANSACTION_STATUS).length)
        ]
      ]
    )
  )
}
