import { AppBar, Toolbar, styled } from '@mui/material';

const Header = styled(AppBar)`
    background: #008000 
`;

const Tabs = styled('p')`
    font-size : 18px;
    margin-right : 20px
`

const NavigationBar = () => {
    return (
        <Header>
            <Toolbar>
                <Tabs>Code for Interview</Tabs>
                <Tabs>All Users</Tabs>
                <Tabs>Add User</Tabs>
            </Toolbar>
        </Header>
        
    )
}

export default NavigationBar;
