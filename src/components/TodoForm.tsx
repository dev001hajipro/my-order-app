import { Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, Input, InputLabel } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { db } from "../FirebaseInit";


const TodoForm: React.FC = () => {

    // todo: learn react-hook-form.
    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        const _target = e.target as typeof e.target & {
            title: { value: string }
            active: { checked: boolean }
        }

        try {
            await addDoc(collection(db, 'todos'), {
                title: _target.title.value,
                active: _target.active.checked
            })
        } catch (e) {
            console.log("Error adding document: ", e)
        }
    }
    return (
        <Box component="form" noValidate onSubmit={handleSubmit}>
            <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="name">Todo:</InputLabel>
                <Input id="title" name='title' aria-describedby='my-helper-title' />
                <FormHelperText id="my-helper-title">やることを入力してください。</FormHelperText>
            </FormControl>
            <FormControlLabel control={<Checkbox name='active' />} label="活動中" />

            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >送信
            </Button>
        </Box>
    )
}

export default TodoForm
