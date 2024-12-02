là nơi để viết các hàm tiện ích, các hàm dùng chung cho nhiều component khác nhau.

```javascript
// src/app/utils/util.js
export const formatCurrency = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
```

....

````javascript
// src/app/utils/util.js
export const formatCurrency = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
    ```


````
