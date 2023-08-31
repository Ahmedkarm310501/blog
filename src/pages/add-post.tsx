import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  useToast,
  useColorModeValue,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";

import { postSchema, postType } from "@/schemas/postSchema";
import useAddPost from "@/hooks/useAddPost";

function AddPost() {
  const buttonColor = useColorModeValue("#090D1F", "#FFF");

  const toast = useToast();
  const { mutate, isLoading, isError } = useAddPost();

  const formik = useFormik<postType>({
    initialValues: {
      title: "",
      author: "",
      content: "",
    },
    validationSchema: toFormikValidationSchema(postSchema),
    onSubmit: (values) => {
      mutate(values);
      formik.resetForm();
    },
  });
  return (
    <Box maxWidth={"500px"} mx={"auto"} my={12}>
      <form
        onSubmit={(e) => {
          formik.handleSubmit(e);
          if (
            formik.errors.title ||
            formik.errors.author ||
            formik.errors.content
          ) {
            toast({
              title: "Error",
              description: "Please fill in the required fields",
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          }
        }}
      >
        <VStack spacing={4} align="stretch">
          <FormControl
            isRequired
            isInvalid={!!formik.errors.title && formik.touched.title}
          >
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              name="title"
              placeholder="Enter a title (max 100 characters)"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />

            <FormErrorMessage>
              title is must be from 1 to 100 characters
            </FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            isInvalid={!!formik.errors.author && formik.touched.author}
          >
            <FormLabel>Author</FormLabel>
            <Input
              type="text"
              name="author"
              placeholder="Enter the author's name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.author}
            />
            <FormErrorMessage>author is required</FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            isInvalid={!!formik.errors.content && formik.touched.content}
          >
            <FormLabel>Content</FormLabel>
            <Textarea
              name="content"
              placeholder="Enter the content (min 50 characters)"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.content}
            />
            <FormErrorMessage>
              content is must be at least 50 characters
            </FormErrorMessage>
          </FormControl>
          <Button
            bg={buttonColor}
            colorScheme="blue"
            type="submit"
            isLoading={isLoading}
          >
            Create Blog Post
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export default AddPost;
