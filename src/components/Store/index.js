import React, { Component } from "react"
import ShopifyBuy from "@shopify/buy-button-js"
import styled from "styled-components"

const StyledDiv = styled.div`
  margin-top: 3em;
`

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
                "font-family": "Crimson Text, serif",
                "font-weight": "normal",
                "font-size": "30px",
                "color": "#000000"
              },
              "button": {
                "font-family": "Times New Roman, serif",
                ":hover": {
                  "background-color": "#cf924b"
                },
                "background-color": "#e6a253",
                ":focus": {
                  "background-color": "#cf924b"
                }
              },
              "price": {
                "font-family": "Crimson Text, serif",
                "font-size": "18px",
                "color": "#6b6b6b"
              },
              "compareAt": {
                "font-family": "Crimson Text, serif",
                "font-size": "15.299999999999999px",
                "color": "#6b6b6b"
              },
              "unitPrice": {
                "font-family": "Crimson Text, serif",
                "font-size": "15.299999999999999px",
                "color": "#6b6b6b"
              },
              "description": {
                "font-family": "Crimson Text, serif"
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
            },
            "googleFonts": [
              "Crimson Text"
            ]
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
              },
              "button": {
                "font-family": "Times New Roman, serif",
                ":hover": {
                  "background-color": "#cf924b"
                },
                "background-color": "#e6a253",
                ":focus": {
                  "background-color": "#cf924b"
                }
              }
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "option": {
            "styles": {
              "label": {
                "font-family": "Crimson Text, serif",
                "font-size": "15px",
                "color": "#787878"
              },
              "select": {
                "font-family": "Crimson Text, serif"
              }
            },
            "googleFonts": [
              "Crimson Text"
            ]
          },
          "cart": {
            "styles": {
              "button": {
                "font-family": "Times New Roman, serif",
                ":hover": {
                  "background-color": "#cf924b"
                },
                "background-color": "#e6a253",
                ":focus": {
                  "background-color": "#cf924b"
                }
              },
              "title": {
                "color": "#3b3b3b"
              },
              "header": {
                "color": "#3b3b3b"
              },
              "lineItems": {
                "color": "#3b3b3b"
              },
              "subtotalText": {
                "color": "#3b3b3b"
              },
              "subtotal": {
                "color": "#3b3b3b"
              },
              "notice": {
                "color": "#3b3b3b"
              },
              "currency": {
                "color": "#3b3b3b"
              },
              "close": {
                "color": "#3b3b3b",
                ":hover": {
                  "color": "#3b3b3b"
                }
              },
              "empty": {
                "color": "#3b3b3b"
              },
              "noteDescription": {
                "color": "#3b3b3b"
              },
              "discountText": {
                "color": "#3b3b3b"
              },
              "discountIcon": {
                "fill": "#3b3b3b"
              },
              "discountAmount": {
                "color": "#3b3b3b"
              }
            },
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            }
          },
          "toggle": {
            "styles": {
              "toggle": {
                "font-family": "Times New Roman, serif",
                "background-color": "#e6a253",
                ":hover": {
                  "background-color": "#cf924b"
                },
                ":focus": {
                  "background-color": "#cf924b"
                }
              }
            }
          },
          "lineItem": {
            "styles": {
              "variantTitle": {
                "color": "#3b3b3b"
              },
              "title": {
                "color": "#3b3b3b"
              },
              "price": {
                "color": "#3b3b3b"
              },
              "fullPrice": {
                "color": "#3b3b3b"
              },
              "discount": {
                "color": "#3b3b3b"
              },
              "discountIcon": {
                "fill": "#3b3b3b"
              },
              "quantity": {
                "color": "#3b3b3b"
              },
              "quantityIncrement": {
                "color": "#3b3b3b",
                "border-color": "#3b3b3b"
              },
              "quantityDecrement": {
                "color": "#3b3b3b",
                "border-color": "#3b3b3b"
              },
              "quantityInput": {
                "color": "#3b3b3b",
                "border-color": "#3b3b3b"
              }
            }
          }
        },
      });
  }

  render() {
    return(
      <StyledDiv>
        <div id='product-component-1583111281325'></div>
      </StyledDiv>
    )
  }
}

export default Store