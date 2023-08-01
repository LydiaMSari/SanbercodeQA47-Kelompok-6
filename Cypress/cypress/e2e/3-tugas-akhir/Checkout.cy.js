// cypress/e2e/Checkout.cy.js
import Navigation from '../../support/PageObject/Navigation';
import ProductLocator from '../../support/PageObject/ProductLocator';
import PriceLocator from '../../support/PageObject/PriceLocator';
import checkout from '../../data/checkout';
import userData from '../../data/userData.json';


// Use the ProductLocator class to get the product link locator
const tshirt = ProductLocator.getProduct_tshirt();
const size = ProductLocator.getSize();
const color = ProductLocator.getColor();
const price = PriceLocator.getPrice();
const productName = "Radiant Tee";
const Man = "Hero";




describe("Checkout Page", () => {
  beforeEach(() => {
    // Navigation.visitHomepage();
    // cy.wait(1000);
    // cy.contains('Sign In').click();
    // cy.get('#email').type(userData.validUser.email);
    // cy.get('#pass').type(userData.validUser.password);
    // cy.get('#send2').as('btn').click();
    // cy.wait(5000);
  });

  // it('Verifikasi menunjukkan harga yang benar seperti subtotal, PPN, biaya pengiriman, total dan produk yang ditambahkan ke keranjang', () => {
  //   Navigation.visitHomepage();
  //   cy.get("#search").type(productName).type("{enter}");
  //   cy.get(tshirt).click();
  //   cy.wait(10000);
  //   cy.get(tshirt).should('be.visible');
  //   Navigation.visitTshirt();
  //   cy.get(price).should('contain', '$22.00');
  //   cy.get(size).click();
  //   cy.get(color).click();
  //   cy.wait(1000);
  //   cy.get(tabdetail).should('be.visible');
  //   cy.wait(1000);
  //   cy.get('#qty').clear();
  //   cy.get('#qty').type('1');
  //   cy.wait(1000);
  //   cy.get(tabInfoAdd).click();
  //   cy.wait(1000);
  //   cy.get(tabInfoAdd).should('be.visible');
  //   cy.wait(1000);
  //   cy.get(tabReview).click();
  //   cy.wait(1000);
  //   cy.get(tabReview).should('be.visible');
  //   cy.wait(1000);
  //   cy.get('#product-addtocart-button').click();
  //   cy.get('.message-success > div').should('be.visible');
  //   cy.get('.message-success > div > a').click();
  //   cy.wait(10000);
  //   cy.get('.cart-summary').should('be.visible');
  //   cy.get('strong > .price').should('be.visible');
  //   cy.wait(5000);
  // });

  it("Verifikasi dapat memilih dan menggunakan semua metode pengiriman yang tercantum dengan benar", () => {
    Navigation.visitHomepage();
    cy.get("#search").type(productName).type("{enter}");
    cy.get(tshirt).click();
    cy.wait(10000);
    cy.get(tshirt).should('be.visible');
    Navigation.visitTshirt();
    cy.get(price).should('contain', '$22.00');
    cy.get('#option-label-size-143-item-170').click();
    cy.get(color).click();
    cy.wait(1000);
    cy.get('#qty').clear();
    cy.get('#qty').type('1');
    cy.wait(1000);
    cy.get('#product-addtocart-button').click();
    cy.get('.message-success > div').should('be.visible');
    cy.get('.message-success > div > a').click();
    cy.wait(10000);
    cy.get('.cart-summary').should('be.visible');
    cy.get('strong > .price').should('be.visible');
    cy.get('.checkout-methods-items > :nth-child(1) > .action').click();
    cy.wait(10000);
    cy.get('#customer-email-fieldset > .required > .control > #customer-email').type('test@test.com');
    cy.get('#customer-password').type('Test@1234');
    cy.get('[name="shippingAddress.firstname"]').type(userData.invalidUser1.firstName);
    cy.get('[name="shippingAddress.lastname"]').type(userData.invalidUser1.lastName);
    cy.get(':nth-child(2) > ._required > .control').type('Bogor');
    cy.get('.street').type('jalan-jalan');
    cy.get('[name="shippingAddress.city"]').type('jalan-jalan');
    // cy.get('[name="shippingAddress.region_id"]').type("12");
    cy.get("#shipping-new-address-form [name=\"country_id\"]").type('Alabama');
    cy.get('[name="shippingAddress.postcode"]').type(12345);
    // cy.get('[name="shippingAddress.country_id"]').type('US');
    cy.get('[name="shippingAddress.telephone"]').type(12374567789);
    cy.get('#checkout-shipping-method-load').should('be.visible');
    cy.get(':nth-child(1) > :nth-child(1) > .radio').click();
    // cy.wait(5000);
    // cy.get("#shipping-new-address-form [name=\"country_id\"]").type('Alabama');
    cy.wait(3000)
    cy.get('.button.action.continue.primary').click()
    cy.get('.button').click();
    cy.wait(5000);
  });
})