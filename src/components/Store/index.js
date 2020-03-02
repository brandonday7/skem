import React, { Component } from "react"
import ShopifyBuy from "@shopify/buy-button-js"

class Store extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scriptURL: 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'
    }
  }

  componentDidMount() {
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        this.ShopifyBuyInit();
      } else {
        this.loadScript();
      }
    } else {
      this.loadScript();
    }
  }

  loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = this.state.scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = this.ShopifyBuyInit;
  }

  ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: process.env.REACT_APP_SHOPIFY_STORE_DOMAIN,
      storefrontAccessToken: process.env.REACT_APP_SHOPIFY_ACCESS_TOKEN,
    });
    const ui = ShopifyBuy.UI.init(client);
      ui.createComponent('product', {
        id: '4586097868859',
        node: document.getElementById('product-component-1583111281325'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                },
                "text-align": "left"
              },
              "title": {
                "font-size": "26px"
              },
              "price": {
                "font-size": "18px"
              },
              "compareAt": {
                "font-size": "15.299999999999999px"
              },
              "unitPrice": {
                "font-size": "15.299999999999999px"
              }
            },
            "layout": "horizontal",
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "description": true
            },
            "width": "100%",
            "text": {
              "button": "Add to cart"
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              }
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "cart": {
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            }
          }
        },
      });
  }

  render() {
    return(
      <div id='product-component-1583111281325'></div>
    )
  }
}

export default Store