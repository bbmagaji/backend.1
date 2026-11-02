import upload from "../middleware/upload.middleware.js";

router.post(
  "/signup",
  upload.fields([
    { name: "resume", maxCount: 5 },
    { name: "photo", maxCount: 5 }
  ]),
  validate(signupSchema),
  signup
);