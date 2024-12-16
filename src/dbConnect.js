// import mongoose from 'mongoose';

//  const dbConnect=async()=>{
//     try { 
//        await mongoose.connect('mongodb://127.0.0.1:27017/blogNext')
//        console.log('Connected to MongoDB')
 
//     } catch (error) {
//         console.log("db error",error)
//     }

// }

// export default dbConnect;



import mongoose from 'mongoose';

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    // Already connected
    return;
  }

  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/blogNext', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('DB connection error:', error);
  }
};

export default dbConnect;
