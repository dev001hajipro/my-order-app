import React from "react";
import { Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const LinkSample: React.FC = () => {
    return (
        <div>
            <p>Linkのサンプル</p>
            <div>
                <Link component={RouterLink} to="/">
                    Link to Home (index)
                </Link>
                <br />
                <Link component={RouterLink} to="/product">
                    Link to Product component.
                </Link>
                <br />
                <Link component={RouterLink} to="/signin">
                    ログイン画面
                </Link>
                <br />
                <Link component={RouterLink} to="/signup">
                    ユーザ登録
                </Link>
                <br />
                <Button
                    variant="contained"
                    color="primary"
                    component={RouterLink}
                    to="/"
                >
                    Button to home
                </Button>
            </div>
        </div>
    )
}
