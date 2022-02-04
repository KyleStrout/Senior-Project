// Material UI Components
import { Box } from "@mui/material";
import { styled } from "@mui/styles";

// Custom Components
import CodeEditor from "../CodeEditor";

const SectionInteractionContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  margin: "0.5rem 0",
  border: "2px solid red",
}));

function SectionInteractionContent(props) {
  if (props.hasCodeEditor) {
    return (
      <Box>
        <CodeEditor defaultCode={props.defaultCode} />
        <Box
          sx={{
            border: "1px solid red",
          }}
        >
          output goes here
        </Box>
      </Box>
    );
  } else {
    return (
      <Box>
        <h1>Section Interaction</h1>
      </Box>
    );
  }
}

export default function SectionInteraction(props) {
  return (
    <SectionInteractionContainer>
      <SectionInteractionContent
        hasCodeEditor={props.hasCodeEditor}
        defaultCode={props.defaultCode}
      ></SectionInteractionContent>
    </SectionInteractionContainer>
  );
}
