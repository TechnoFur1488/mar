import { createSlice, nanoid } from "@reduxjs/toolkit";


let arr = JSON.parse(localStorage.getItem('product')) ?? { value: [], count: 1, color: 'черный' };

const productSlice = createSlice({
  name: 'product',
  initialState: arr, 
  reducers: {
    add: (s, a) => {
      if (a.payload) {
        const { name, img, price, count, color } = a.payload;
        
        s.value.push({
          id: nanoid(),
          name,
          img,
          price,
          count,
          color
        });
        
        localStorage.setItem('product', JSON.stringify(s));
      }
    },
    remove: (s, a) => {
      const productId = a.payload;
      s.value = s.value.filter(product => product.id !== productId);
      
      localStorage.setItem('product', JSON.stringify(s));
    },
    incrementCount: (s) => {
      s.count += 1;
      localStorage.setItem('product', JSON.stringify(s));
    },
    decrementCount: (s) => {
      if (s.count > 1) {
        s.count -= 1;
      }
      localStorage.setItem('product', JSON.stringify(s));
    },

    incrementCountS: (s, a) => {
        const product = s.value.find((p) => p.id === a.payload);
        if (product) {
            product.count += 1; 
            localStorage.setItem('product', JSON.stringify(s));
        }
    },
    decrementCountS: (s, a) => {
        const product = s.value.find((p) => p.id === a.payload);
        if (product && product.count > 1) {
            product.count -= 1; 
            localStorage.setItem('product', JSON.stringify(s));
        }
    },
    changeColor: (s, a) => {
      s.color = a.payload;
      localStorage.setItem('product', JSON.stringify(s));
    }
  }
});

export default productSlice.reducer;

export const { add, remove, incrementCount, decrementCount, changeColor, incrementCountS,  decrementCountS } = productSlice.actions;
