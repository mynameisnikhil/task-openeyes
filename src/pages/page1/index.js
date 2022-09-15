import React from "react";
import { Grid } from "@mui/material";
import { TextInput, MyStack, Form } from "../../components";




const FirstPage = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Form>
                <MyStack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}>
                    <TextInput
                        variant="outlined"
                    />
                    <MyStack
                    direction="row"
                    >
                        <TextInput
                            variant="outlined"
                        />
                        <TextInput
                            variant="outlined"
                        />
                    </MyStack>
                    <TextInput
                        variant="outlined"
                    />
                    <TextInput
                        variant="outlined"
                    />
                </MyStack>
            </Form>
        </Grid>
    )
}

export default FirstPage;