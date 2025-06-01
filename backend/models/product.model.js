import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number, 
        required:True
    },
    image: {
        type:String,
        required:True
    },
}, {
    timestamps: true //createdAt, updatedAt
});

const Product = mongoose.model('Product', productSchema);
export default Product;