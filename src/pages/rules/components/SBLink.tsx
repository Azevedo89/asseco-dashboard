import { Button } from '@asseco-web/ui/atomic'
import { OpenInNew } from '@mui/icons-material'

export const SBLink = ({ story, ...props }: { story: string }) => (
  <Button
    size="small"
    startIcon={<OpenInNew />}
    component="a"
    href={`http://10.92.177.219/react-modules-storybook/?path=/story/${story}`}
    target="_blank"
    rel="noreferrer"
    color="light"
    {...props}
  >
    Storybook
  </Button>
)
