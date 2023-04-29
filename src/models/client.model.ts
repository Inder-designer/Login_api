import { Schema, model } from 'mongoose';
import { USER_STATUS, PAYMENT_STATUS  } from '../constants/app.constants';
import {  USER_ROLE , ADMIN_ROLE } from '../constants/user.constants';

const ClientSchema = new Schema(
    {
        role: { type: Number, enum: [ADMIN_ROLE, USER_ROLE], default: USER_ROLE },
        username: { type: String, required: false, minLength: 3,maxLength: 25,unique: [true, 'Username is already exists'], default: null },
        email: { type: String, required: false, default: null },
        firstName: { type: String, required: false, minLength: 2,maxLength: 25, default: null },
        lastName: { type: String, required: false },
        password: { type: String, minLength: 4, maxLength: 80, default: null },
        phoneNumber: { type: String, required: false },
        language: { type: String, required: false, default: null },
        profile: { type: String, defalut: null },
        mPinMode: { type: Boolean, defalut: false },
        mPin: { type: String, defalut: null },
        partnerCode: { type: String, defalut: null },
        isBlocked: { type: Boolean, default: false },
        status: { type: String, enum: [USER_STATUS.PENDING, USER_STATUS.APPROVED, USER_STATUS.DECLINED], default: USER_STATUS.PENDING }
    }, { timestamps: true, versionKey: false }
)
export default model('client', ClientSchema)



