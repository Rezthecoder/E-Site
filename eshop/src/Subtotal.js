import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat>
        renderText =
        {(value) => {
          return (
            <>
              <p>
                Subtotal ({value.values.items.length} items):{" "}
                <strong>{value.values.total}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          );
        }}
        thousandSeparator={true}
        decimalScale={2}
        value={0}
        displayType={"text"}
        prefix={"$"}
        
      </CurrencyFormat>
    </div>
  );
}

export default Subtotal;
