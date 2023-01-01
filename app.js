const wrapper =document.querySelector(".sliderWrapper");
const menuItems =document.querySelectorAll(".menuItem");

const products = [

               {
                              id:1,
                              title:"FUNKY",
                              price:15,
                              colors:[
                                             {
                                             code:"black",
                                             img:"https://images.bewakoof.com/t1080/unisex-black-balance-baby-graphic-printed-t-shirt-546435-1669818702-1.jpg",
                                
                                             },
                                             {
                                              code:"blue",
                                              img:"https://images.bewakoof.com/t640/men-s-blue-itachi-of-the-sharingan-graphic-printed-oversized-t-shirt-545701-1667558281-1.jpg" ,             
                                             },
                                     ]              
               },  
               {
                              id:2,
                              title:"OVERSIZED",
                              price:20,
                              colors:[
                                             {
                                             code:"white",
                                             img:"https://images.bewakoof.com/t1080/men-s-aop-oversized-t-shirt-507984-1667497416-1.jpg",

                                
                                             },
                                             {
                                              code:"green",
                                              img:"https://images.bewakoof.com/t640/men-s-green-color-block-oversized-t-shirt-464953-1667500985-1.jpg"      ,        
                                             },
                                     ]              
               },

               {
                              id:3,
                              title:"PLAIN",
                              price:10,
                              colors:[
                                             {
                                             code:"black",
                                             img:"https://images.bewakoof.com/t1080/men-s-black-t-shirt-pack-of-3-325835-1669705016-1.jpg",
                                
                                             },
                                             {
                                              code:"white",
                                              img:"https://images.bewakoof.com/t640/men-s-white-oversized-t-shirt-439420-1670828693-1.jpg"  ,            
                                             },
                                     ]              
               },

               {
                              id:4,
                              title:"ACTIVE",
                              price:15,
                              colors:[
                                             {
                                             code:"lightgreen",
                                             img:"https://images.bewakoof.com/t640/men-s-lime-training-utility-t-shirt-455038-1656144624-1.jpg",
                                
                                             },
                                             {
                                              code:"black",
                                              img:"https://images.bewakoof.com/t640/men-s-ombre-round-neck-black-sports-t-shirt-381117-1656181402-1.jpg" ,             
                                             },
                                     ]              
               },

               {
                              id:5,
                              title:"VESTS",
                              price:10,
                              colors:[
                                             {
                                             code:"blue",
                                             img:"https://images.bewakoof.com/t1080/young-forever-side-round-neck-vest-tropical-blue-287724-1655750658-1.jpg",
                                
                                             },
                                             {
                                              code:"red",
                                              img:"https://images.bewakoof.com/t640/men-s-red-oversized-vest-pack-of-2-536125-1669705054-1.jpg" ,             
                                             },
                                     ],              
               },


];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item,index)=>{
               item.addEventListener("click",()=>{
 wrapper.style.transform = `translateX(${-100 * index}vw)`;

 choosenProduct = products[index]
 currentProductTitle.textContent = choosenProduct.title
 currentProductPrice.textContent = "$" + choosenProduct.price;
 currentProductImg.src = choosenProduct.colors[0].img

 currentProductColors.forEach((color,index)=>{
               color.style.backgroundColor=choosenProduct.colors[index].code;
 })


               });
});

currentProductColors.forEach((color,index)=>{
               color.addEventListener("click",()=>{
                              currentProductImg.src = choosenProduct.colors[index].img;
               })
})

currentProductSizes.forEach((size,index)=>{
               size.addEventListener("click",()=>{
                              currentProductSizes.forEach(size=>{
                                             size.style.backgroundColor="white";
                                             size.style.color="black";
                              });
                              size.style.backgroundColor="black";
                              size.style.color="white";
               });
});

const productButton= document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
               payment.style.display="flex"
});


close.addEventListener("click",()=>{
               payment.style.display="none"
});