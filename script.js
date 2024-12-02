const productTable = document.getElementById("productTable");
const totalAmountEl = document.getElementById("totalAmount");
const totalGSTEl = document.getElementById("totalGST");
const grandTotalEl = document.getElementById("grandTotal");
const productForm = document.getElementById("productForm");
const resetButton = document.getElementById("resetButton");
const viewBillButton = document.getElementById("viewBillButton");

let products = [];
let totalAmount = 0;
let totalGST = 0;

// Update Totals
function updateTotals() {
  totalAmount = products.reduce((sum, p) => sum + p.price, 0);
  totalGST = products.reduce((sum, p) => sum + p.gst, 0);
  const grandTotal = totalAmount + totalGST;

  totalAmountEl.textContent = totalAmount.toFixed(2);
  totalGSTEl.textContent = totalGST.toFixed(2);
  grandTotalEl.textContent = grandTotal.toFixed(2);
}

// Render Products Table
function renderTable() {
  productTable.innerHTML = "";
  products.forEach((product, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="border border-gray-300 px-4 py-2">${product.name}</td>
      <td class="border border-gray-300 px-4 py-2 text-right">₹ ${product.price.toFixed(2)}</td>
      <td class="border border-gray-300 px-4 py-2 text-right">₹ ${product.gst.toFixed(2)}</td>
      <td class="border border-gray-300 px-4 py-2 text-right">₹ ${product.total.toFixed(2)}</td>
    `;
    productTable.appendChild(row);
  });
  updateTotals();
}

// Add Product
productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("productName").value.trim();
  const price = parseFloat(document.getElementById("productPrice").value);

  if (name && price > 0) {
    const gst = price * 0.18;
    const total = price + gst;

    products.push({ name, price, gst, total });
    renderTable();
    productForm.reset();
  } else {
    alert("Please enter valid product details.");
  }
});

// Reset Table
resetButton.addEventListener("click", () => {
  products = [];
  renderTable();
});

// View Bill
viewBillButton.addEventListener("click", () => {
  let billWindow = window.open("", "_blank");
  let billContent = `
    <html>
    <head>
      <style>
        body {
          background-color : black;
          font-family: Arial, sans-serif;
          padding: 20px;
          background-color: #f9fafb;
        }
        .header {
          text-align: center;
        }
        .header img {
          height : 150px;
          width : 150px;
          background-size: cover;
        }
        .header h1 {
          margin: 10px 0;
          color: #4f46e5; /* Indigo color for branding */
        }
        .header p {
          color: #6b7280; /* Gray color for subtitle text */
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        table, th, td {
          border: 1px solid #d1d5db; /* Light border */
        }
        th {
          background-color: #4f46e5;
          color: white;
          text-align: left;
          padding: 8px;
        }
        td {
          padding: 8px;
          text-align: left;
        }
        .totals {
          margin-top: 20px;
          text-align: right;
          color: #374151; /* Dark gray for totals */
        }
        .totals strong {
          color: #4f46e5; /* Indigo for emphasis */
        }
      </style>
    </head>
    <body>
      <div class="header">
        <img src="https://th.bing.com/th/id/R.a84cb766676868e50d925a5c982576ad?rik=hiXcbqx%2bI59KkA&riu=http%3a%2f%2fwiki.teamliquid.net%2fcommons%2fimages%2fthumb%2f5%2f50%2fNext_gen_logo.png%2f600px-Next_gen_logo.png&ehk=Z4JAALGvPML05ZH6X35uMNMVeFwbp%2bNekLpOLZwkUWA%3d&risl=&pid=ImgRaw&r=0" alt="Company Logo">
        <h1>NextGen Tech Pvt. Ltd.</h1>
        <p>1234 Street, City, Country | Email: info@nextgen.com | Phone: +91 9876543210</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price (₹)</th>
            <th>GST (₹)</th>
            <th>Total (₹)</th>
          </tr>
        </thead>
        <tbody>
          ${products
            .map(
              (product) => `
            <tr>
              <td>${product.name}</td>
              <td>₹ ${product.price.toFixed(2)}</td>
              <td>₹ ${product.gst.toFixed(2)}</td>
              <td>₹ ${product.total.toFixed(2)}</td>
            </tr>
          `
            )
            .join("")}
        </tbody>
      </table>
      <div class="totals">
        <p>Subtotal: ₹ ${totalAmount.toFixed(2)}</p>
        <p>Total GST: ₹ ${totalGST.toFixed(2)}</p>
        <p><strong>Grand Total: ₹ ${(totalAmount + totalGST).toFixed(2)}</strong></p>
      </div>
    </body>
    </html>
  `;
  billWindow.document.write(billContent);
  billWindow.document.close();
});












































    // Update Totals
    // function updateTotals() {
    //   totalAmount = products.reduce((sum, p) => sum + p.price, 0);
    //   totalGST = products.reduce((sum, p) => sum + p.gst, 0);
    //   const grandTotal = totalAmount + totalGST;

    //   totalAmountEl.textContent = totalAmount.toFixed(2);
    //   totalGSTEl.textContent = totalGST.toFixed(2);
    //   grandTotalEl.textContent = grandTotal.toFixed(2);
    // }

    // Render Products Table
    // function renderTable() {
    //   productTable.innerHTML = "";
    //   products.forEach((product, index) => {
    //     const row = document.createElement("tr");
    //     row.innerHTML = `
    //       <td class="border border-gray-300 px-4 py-2">${product.name}</td>
    //       <td class="border border-gray-300 px-4 py-2 text-right">₹ ${product.price.toFixed(2)}</td>
    //       <td class="border border-gray-300 px-4 py-2 text-right">₹ ${product.gst.toFixed(2)}</td>
    //       <td class="border border-gray-300 px-4 py-2 text-right">₹ ${product.total.toFixed(2)}</td>
    //     `;
    //     productTable.appendChild(row);
    //   });
    //   updateTotals();
    // }

    // Add Product
    // productForm.addEventListener("submit", (e) => {
    //   e.preventDefault();
    //   const name = document.getElementById("productName").value.trim();
    //   const price = parseFloat(document.getElementById("productPrice").value);

    //   if (name && price > 0) {
    //     const gst = price * 0.18;
    //     const total = price + gst;

    //     products.push({ name, price, gst, total });
    //     renderTable();
    //     productForm.reset();
    //   } else {
    //     alert("Please enter valid product details.");
    //   }
    // });

    // Reset Table
    // resetButton.addEventListener("click", () => {
    //   products = [];
    //   renderTable();
    // });

    // View Bill
    // viewBillButton.addEventListener("click", () => {
    //   let billWindow = window.open("", "_blank");
    //   let billContent = `
    //     <html>
    //     <head>
    //       <title>Bill</title>
    //       <style>
    //         body { font-family: Arial, sans-serif; margin: 20px; }
    //         table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    //         th, td { border: 1px solid #ddd; padding: 8px; text-align: right; }
    //         th { background-color: #f4f4f4; text-align: left; }
    //       </style>
    //     </head>
    //     <body>
    //       <h1>Bill</h1>
    //       <table>
    //         <thead>
    //           <tr>
    //             <th>Product Name</th>
    //             <th>Price (₹)</th>
    //             <th>GST (₹)</th>
    //             <th>Total (₹)</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //   `;
    //   products.forEach((p) => {
    //     billContent += `
    //       <tr>
    //         <td>${p.name}</td>
    //         <td>₹ ${p.price.toFixed(2)}</td>
    //         <td>₹ ${p.gst.toFixed(2)}</td>
    //         <td>₹ ${p.total.toFixed(2)}</td>
    //       </tr>
    //     `;
    //   });
    //   billContent += `
    //         </tbody>
    //       </table>
    //       <p><strong>Total Amount:</strong> ₹ ${totalAmount.toFixed(2)}</p>
    //       <p><strong>Total GST:</strong> ₹ ${totalGST.toFixed(2)}</p>
    //       <p><strong>Grand Total:</strong> ₹ ${(totalAmount + totalGST).toFixed(2)}</p>
    //     </body>
    //     </html>
    //   `;
    //   billWindow.document.write(billContent);
    //   billWindow.document.close();
    // });
 








































// const button = document.getElementById("addProductBtn");
// const tableData = document.getElementById("productTable");
// const total = document.getElementById("totalAmount");
// const finalSumAll = document.getElementById("totalWithGST");
// let totalAmount = 0;

// button.addEventListener("click", () => {
//   const productName = document.getElementById("productName").value;
//   const productPrice = parseFloat(
//     document.getElementById("productPrice").value
//   );

  // Validate input
  // if (!productName || isNaN(productPrice) || productPrice <= 0) {
  //   alert("Enter valid details");
  //   return;
  // }
  
  // document.getElementById("productName").value = "";
  // document.getElementById("productPrice").value = "";

  // Update total amount and GST
  // totalAmount += productPrice;
  // const withGst = productPrice * 0.18;
  // totalAmount += productPrice;
  // const withGst = totalAmount * 0.18;
  
  // const g = withGst + totalAmount;
  // grandTotal.textContent = g;

  // console.log("grand", g);

  // total.textContent = totalAmount.toFixed(2);
  // finalSumAll.textContent = withGst.toFixed(2);
  // grandTotal.textContent = g.toFixed(2);

  // Create new table row
  // const row = document.createElement("tr");
  // row.innerHTML = `<td class="border border-gray-300 px-4 py-2">${productName}</td> 
  //                  <td class="border border-gray-300 px-4 py-2">${productPrice.toFixed(
  //                    2
  //                  )}</td>`;

  // productTable.appendChild(row);

  // Clear input fields
// });

// const productTable = document.getElementById("productTable");
// const totalAmountEl = document.getElementById("totalAmount");
// const totalWithGSTEl = document.getElementById("totalWithGST");
// const addProductBtn = document.getElementById("addProductBtn");
// let totalAmount = 0;

// // Add product event listener
// addProductBtn.addEventListener("click", () => {
//   const productName = document.getElementById("productName").value;
//   const productPrice = parseFloat(
//     document.getElementById("productPrice").value
//   );

//   if (!productName || isNaN(productPrice) || productPrice <= 0) {
//     alert("Please enter valid product details.");
//     return;
//   }

//   // Add product to the table
//   const row = document.createElement("tr");
//   row.innerHTML = `
//         <td class="border border-gray-300 px-4 py-2">${productName}</td>
//         <td class="border border-gray-300 px-4 py-2 text-right">₹ ${productPrice.toFixed(
//           2
//         )}</td>
//       `;
//   productTable.appendChild(row);

//   // Update totals
//   totalAmount += productPrice;
//   const totalWithGST = totalAmount * 1.18;

//   totalAmountEl.textContent = totalAmount.toFixed(2);
//   totalWithGSTEl.textContent = totalWithGST.toFixed(2);

//   // Clear inputs
//   document.getElementById("productName").value = "";
//   document.getElementById("productPrice").value = "";
// });
