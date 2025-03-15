import { Document } from "mongoose"

export interface Message extends Document {
    content: string;
    createdDateTime: Date;
}

export interface User extends Document {
    username: string;
    emailAddress: string;
    password: string;
    verificationCode: string;
    codeExpiry: string;
    isVerified: boolean;
    isAcceptingMessage: boolean;
    messages: Message[]
}