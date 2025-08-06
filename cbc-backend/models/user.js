import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: customer,
  },
  profilePicture: {
    type: String,
    default:
      "https://www.freepik.com/free-vector/user-blue-gradient_145856969.htm#fromView=search&page=1&position=49&uuid=a9527abe-2d16-4c2a-9737-6a10472cef5f&query=user",
  },
});

const User = mongoose.model("users", userSchema);
export default User;
