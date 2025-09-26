import nodemailer from 'nodemailer';
import {EMAIL_PASSWORD} from "./env.js";

export const accountEmail = "degendogeduo@gmail.com"

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "degendogeduo@gmail.com",
        pass: EMAIL_PASSWORD
    }
})

export default transporter;