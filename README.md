# Qserach 筆試題目回答

1. 在調整 CSS 格式時，如何盡可能不用 !important ，來覆寫原有樣式？

有三種方式可以複寫原有的樣子，第一種方式是直接把樣式寫在 HTML 行內套用 CSS 樣式，或是直接將 CSS 樣式表載入 HTML 內部；第二種方式是用選擇器的類型來設定，如果想要複寫樣式，可以指定 class 或 id 來讓樣式優先套用；第三種方式是把要複寫的樣式敘述寫在原有的樣式敘述後面，因為後面樣式表示從頭開始讀下來的，因此後面的樣式會覆蓋掉前面的樣式。 


2. 為何 JS 開發會需要用到 Framework，像是 Angular, React, Vue.js … 等？

我自己的經驗是，因為這樣可以少點很多重複的工作。

我有一個網頁只用 HTML、CSS、JS 寫，但這個網頁有很多商品的區塊需要呈現，所以整個 HTML 檔案就超級長，要一直重複複製貼上一樣的架構，然後再慢慢找出要修改的文字與圖片區域，但如果用 React 來寫的話，就可以做出來一個商品模板，然後把要更改的部份用 props 傳進去模板裡面，讓程式碼可以乾淨一些不會超爆長，而且在修改資訊上也會比較容易，不需要一個一個慢慢找 p tag 跟 img tag 在哪，直接把資訊變成陣列，再寫一個迴圈或是用陣列原有的方法把資料傳進去模板裡面修改即可。

