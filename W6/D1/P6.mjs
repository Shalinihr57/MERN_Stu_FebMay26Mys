//Import ES modules

import createInvoiceLabel,{calculateTotal,taxRate} from "./P5.mjs";

const subtotal = 4000;
const total = calculateTotal(subtotal);
const label = createInvoiceLabel("INV-2026-001");
console.log("invoice label:", label);
console.log("Tax rate:", taxRate);
console.log("Final total:", total);

