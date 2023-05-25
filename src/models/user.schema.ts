import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export const userSchema = new mongoose.Schema({
  // user schema
  name: String,
  email: String,
  password: {
    type: String,
    select: false,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Pre-save hook to hash the password
userSchema.pre('save', async function (next: any) {
  try {
    // check if it is modified
    if (!this.isModified('password')) {
      return next();
    }
    // hash the password
    const hashedPassword = await bcrypt.hash(this.password, 10);
    // set to the newly hashed password
    this.password = hashedPassword;
    // call the nest operation
    return next();
  } catch (error) {
    return next(error);
  }
});
