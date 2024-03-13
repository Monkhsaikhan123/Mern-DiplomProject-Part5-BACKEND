const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsersSchema = new mongoose.Schema(
    {
        fname:String,
        lname:String, 
        email:{ type: String,unique:true},
        password:String,
        Usertype:String,
        imageURL:String,
        cart:{
            type:Number,
            default:0
        },
    },{
        timestamps:true,
        collection:'users'

    }
);

mongoose.model('users' , UsersSchema)




const ProductsSchema = new mongoose.Schema(
    {   
        userId:{type:Schema.Types.ObjectId, ref:"users"},
        name:String,
        description:String,
        price:String,
        category:String,
        image:String, 
        quantity:Number,
        email:String,

    },{
        timestamps:true,
        collection:'products'
    }
);

mongoose.model('products' , ProductsSchema)

const Products2Schema = new mongoose.Schema(
    {   
        userId:{type:Schema.Types.ObjectId, ref:"users"},
        name:String,
        description:String,
        price:String,
        category:String,
        image:String, 
        quantity:Number,
        email:String,

    },{
        timestamps:true,
        collection:'products2'
    }
);

mongoose.model('products2' , Products2Schema)

const CartSchema = new mongoose.Schema(
    {   
        creator:{type:Schema.Types.ObjectId, ref:"users"},
        menuItemId:{type:Schema.Types.ObjectId, ref:"products"},
        name:String,
        description:String,
        price:String,
        category:String,
        image:String, 
        quantity:Number,
        email:String,
    },{
        timestamps:true,
        collection:'cart',

    }
);

mongoose.model('cart' , CartSchema)


const BlogSchema = new mongoose.Schema(
    {   
        userId:{type:Schema.Types.ObjectId, ref:"users"},
        name:String,
        author:String,
        year:Number,
        description:String,
        email:String,

    },{
        timestamps:true,
        collection:'blog'
    }
);
mongoose.model('blog' , BlogSchema)
