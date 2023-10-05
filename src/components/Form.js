import React, { useEffect } from "react";
import EllenLogo from "../assets/Logo/EksSiteLogo.png";
import instagram from "../assets/Socials/instagram.png";
import whatsapp from "../assets/Socials/whatsapp.png";
import linkedin from "../assets/Socials/linkedin.png";

import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const Form = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    // Form validation
    initialValues: {
      email: "",
      subject: "",
      comment: "",
    },
    onSubmit: (values) => {
      submit("", values);
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
  });
  // Show an alert when the form is submitted successfully
  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      // Reset the form if the response is successful
      if (response.type === "success") formik.resetForm();
    } // eslint-disable-next-line
  }, [response]);

  return (
    <section className="formSection">
      <VStack className="Form">
        <Heading as="h1" id="contactme-section">
          Get in touch via email or links below
        </Heading>
        <div className="socials">
          <ul>
            <li>
              <a href="tel:+447517336296">
                <img src={whatsapp} alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ellenkstone">
                <img src={instagram} alt="" />
              </a>
            </li>
            <li>
              <a href="http://www.linkedin.com/in/ellen-kamenik-15a08419b">
                <img src={linkedin} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <Box className="InfoBox">
          {/* Connect the form onSubmit prop with Formik's handleSubmit function */}
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={3}>
              <FormControl
                // as="FormControl"
                isInvalid={!!formik.errors.email && formik.touched.email}
              >
                {/* Show the error messages for each field when the field is touched and the validation fails */}
                <FormLabel htmlFor="email">Email *</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="e.g., email@example.com"
                  className={
                    !!formik.errors.email && formik.touched.email
                      ? "input-error"
                      : formik.touched.email
                      ? "input-touched"
                      : ""
                  }
                  {...formik.getFieldProps("email")} // Make the Input components from Chakra UI controlled components
                />
                {/* Show the error messages for each field when the field is touched and the validation fails */}
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <Textarea
                  id="subject"
                  name="subject"
                  placeholder="e.g., logo design & headshots"
                  className={formik.touched.subject ? "subject-touched" : ""}
                  {...formik.getFieldProps("subject")}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  placeholder="Enter text here"
                  className={formik.touched.comment ? "comment-touched" : ""}
                  {...formik.getFieldProps("comment")}
                />
                {/* Show the error messages for each field when the field is touched and the validation fails */}
              </FormControl>
              {/* Show a loading indicator */}
              <Button type="submit" isLoading={isLoading}>
                Send
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
      <img src={EllenLogo} alt="" />
    </section>
  );
};

export default Form;
