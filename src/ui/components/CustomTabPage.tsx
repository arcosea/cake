import { Box, Typography } from "@mui/material"


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
export default function CustomTabPage(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        style={{width: "100%", height: "100%"}}
      >
        {value === index && (
          <Box sx={{ p: 3, width: "100%", minHeight: "100%"}}>
            <Box sx={{width: "90%"}}>{children}</Box>
          </Box>
        )}
      </div>
    );
  }