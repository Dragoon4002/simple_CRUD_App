const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Product = require('./models/product.model.js');

const productRoute = require('./routes/product.route.js');

//middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));


app.use('/api/products',productRoute)

app.listen(3000, ()=>{
    console.log("Server is working");
});

// app.get('/',(req,res)=>{
// res.send("PornHub not working, too many Dipan fans there. Dipan er choto bichi");
// });

// //add element in database
// app.post('/api/products',async (req,res)=>{
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

// //view all elements in the database
// app.get("/api/products",async (req,res)=>{
//    try {
//     const products = await Product.find({});
//     res.status(200).json(products);
// } catch (error) {
//     res.status(500).json({message: error.message});
//    }
// })

// //view elements based on Id
// app.get("/api/products/:id",async (req,res)=>{
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         if (!product) {
//             return res.status(404).json({ message: "Product not found" });
//         }
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// //update api by Id
// app.put('/api/products/:id',async (req,res)=>{
//     try {
//         const {id} = req.params;

//         const product = await Product.findByIdAndUpdate(id, req.body);
//         console.log(product);
//         if(!product){
//             return res.status(404).json({message: "Product not found"});
//         }

//         const updateProduct = await Product.findById(id);
//         res.status(200).json(updateProduct);

//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

// //Delete using an Id
// app.delete('/api/products/:id',async (req,res)=>{
//     try {
//         const {id} = req.params;

//         const product = await Product.findByIdAndDelete(id);
//         if(!product){
//             return res.status(404).json({message: "Product not found"});
//         }
//         res.status(200).json({message : "Product deleted successfully"});

//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });


mongoose.connect("mongodb+srv://serverside:serverside2323@practice.ubbd6cn.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Practice")
.then(()=>{
    console.log("Done baby");
})
.catch(()=>{
    console.log("Fuck baby didnt worked");
    console.log(Error);
});

