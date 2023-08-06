import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendEmail } from "../utils/sendEmail.js";

// Contact Form
export const addToWaitingList = catchAsyncError(async (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message)
    return next(new ErrorHandler(`Fill all fields`, 400));

  const to = process.env.MY_MAIL;
  const subject = "Contact from CourseBundler";
  const text = `I am ${name} and my Email is ${email}. \n ${message}`;

  await sendEmail(to, subject, text);

  res.status(200).json({
    success: true,
    message: `Your message has been sent 👍`,
  });
});
