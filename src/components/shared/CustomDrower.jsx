import { Drawer } from "@mui/material";

export default function CustomDrower({ children, isOpen, handleDrawerToggle }) {
    return (
        <Drawer
            variant="temporary"
            open={isOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: { xs: '300px', sm: '500px' } },
            }}
        >
            {children}
        </Drawer>
    )
}
